export interface RegistrationData {
  name: string;
  gender: string;
  email: string;
  facebookPage: string;
  cellNumber: string;
  whatsappNumber: string;
  address: string;
  churchAffiliation: string;
  ministryTitle: string;
  highSchoolDiploma: string;
  degrees: string;
  semesters: {
    fall: boolean;
    winter: boolean;
    spring: boolean;
    summer: boolean;
  };
  programType: {
    degree: boolean;
    certificate: boolean;
  };
}

// Send email using Netlify serverless function with Nodemailer
export const sendDirectEmail = async (formData: RegistrationData): Promise<boolean> => {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Registration email sent successfully via Netlify function');
      return true;
    } else {
      console.error('Email sending failed:', result.error);
      return false;
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
