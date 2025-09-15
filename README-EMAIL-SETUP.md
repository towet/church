# Email Setup for Netlify Deployment

## Overview
The registration form now uses Nodemailer via a Netlify serverless function to send emails directly to your inbox.

## Setup Instructions

### 1. Environment Variables
In your Netlify dashboard, go to **Site settings > Environment variables** and add:

```
ADMIN_EMAIL=frankyfreaky103@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
```

### 2. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-factor authentication if not already enabled
3. Go to **Security > App passwords**
4. Generate a new app password for "Mail"
5. Use this 16-character password as `SMTP_PASS`

### 3. Alternative Email Providers
For other email providers, update the SMTP settings:

**Outlook/Hotmail:**
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Yahoo:**
```
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 4. Testing
After deployment, test the registration form. Check:
- Netlify function logs for any errors
- Your email inbox for registration submissions
- Browser console for any client-side errors

## Files Created/Modified
- `netlify/functions/send-email.js` - Serverless function using Nodemailer
- `src/lib/emailService.ts` - Updated to call Netlify function
- `netlify.toml` - Netlify configuration (already existed)

## Troubleshooting
- Check Netlify function logs in your dashboard
- Verify environment variables are set correctly
- Ensure SMTP credentials are valid
- Check spam folder for test emails
