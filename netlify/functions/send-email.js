const nodemailer = require('nodemailer');

// Helper: CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

exports.handler = async function (event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    const required = ['name', 'email', 'cellNumber', 'address'];
    const missing = required.filter((k) => !data[k]);
    if (missing.length) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: `Missing fields: ${missing.join(', ')}` }) };
    }

    const selectedSemesters = Object.entries(data.semesters || {})
      .filter(([_, v]) => !!v)
      .map(([k]) => k)
      .join(', ');

    const selectedPrograms = Object.entries(data.programType || {})
      .filter(([_, v]) => !!v)
      .map(([k]) => k)
      .join(', ');

    const adminEmail = process.env.ADMIN_EMAIL;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!adminEmail || !smtpUser || !smtpPass) {
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Server email is not configured. Set ADMIN_EMAIL, SMTP_USER, and SMTP_PASS in Netlify environment variables.' }),
      };
    }

    // Create SMTP transporter (Gmail example)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = 'New Student Registration - The Way Bible College';

    const text = `New Student Registration Received:

PERSONAL INFORMATION:
- Name: ${data.name}
- Gender: ${data.gender || 'Not provided'}
- Email: ${data.email}
- Cell Number: ${data.cellNumber}
- WhatsApp: ${data.whatsappNumber || 'Not provided'}
- Facebook Page: ${data.facebookPage || 'Not provided'}

ADDRESS:
${data.address}

MINISTRY BACKGROUND:
- Church Affiliation: ${data.churchAffiliation || 'Not provided'}
- Ministry Title: ${data.ministryTitle || 'Not provided'}

EDUCATION:
- High School Diploma: ${data.highSchoolDiploma || 'Not specified'}
- Previous Degrees: ${data.degrees || 'None specified'}

PROGRAM SELECTION:
- Semesters: ${selectedSemesters || 'None selected'}
- Program Type: ${selectedPrograms || 'None selected'}

Submitted on: ${new Date().toLocaleString()}`;

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111">
        <h2 style="margin:0 0 16px;color:#1f2937">New Student Registration</h2>
        <p style="margin:0 0 16px"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
        
        <h3 style="color:#374151;margin:16px 0 8px">Personal Information</h3>
        <ul style="margin:0 0 16px;padding-left:20px">
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Gender:</strong> ${data.gender || 'Not provided'}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Cell Number:</strong> ${data.cellNumber}</li>
          <li><strong>WhatsApp:</strong> ${data.whatsappNumber || 'Not provided'}</li>
          <li><strong>Facebook Page:</strong> ${data.facebookPage || 'Not provided'}</li>
        </ul>
        
        <h3 style="color:#374151;margin:16px 0 8px">Address</h3>
        <p style="margin:0 0 16px">${(data.address || '').replace(/\n/g, '<br/>')}</p>
        
        <h3 style="color:#374151;margin:16px 0 8px">Ministry Background</h3>
        <ul style="margin:0 0 16px;padding-left:20px">
          <li><strong>Church Affiliation:</strong> ${data.churchAffiliation || 'Not provided'}</li>
          <li><strong>Ministry Title:</strong> ${data.ministryTitle || 'Not provided'}</li>
        </ul>
        
        <h3 style="color:#374151;margin:16px 0 8px">Education</h3>
        <ul style="margin:0 0 16px;padding-left:20px">
          <li><strong>High School Diploma:</strong> ${data.highSchoolDiploma || 'Not specified'}</li>
          <li><strong>Previous Degrees:</strong> ${data.degrees || 'None specified'}</li>
        </ul>
        
        <h3 style="color:#374151;margin:16px 0 8px">Program Selection</h3>
        <ul style="margin:0 0 16px;padding-left:20px">
          <li><strong>Semesters:</strong> ${selectedSemesters || 'None selected'}</li>
          <li><strong>Program Type:</strong> ${selectedPrograms || 'None selected'}</li>
        </ul>
        
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
        <p style="color:#6b7280;font-size:14px;margin:0">
          This registration was submitted through The Way Bible College website.
        </p>
      </div>`;

    const mailOptions = {
      from: `"${data.name}" <${smtpUser}>`,
      to: adminEmail,
      replyTo: data.email,
      subject: subject,
      text: text,
      html: html,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true, message: 'Registration email sent successfully' }),
    };

  } catch (error) {
    console.error('Email sending error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
