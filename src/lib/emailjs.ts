import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
export const EMAILJS_CONTACT_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID';
export const EMAILJS_ADMISSION_TEMPLATE_ID = 'YOUR_ADMISSION_TEMPLATE_ID';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTACT_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

export const sendAdmissionEmail = async (formData: {
  studentName: string;
  dateOfBirth: string;
  parentName: string;
  email: string;
  phone: string;
  grade: string;
  previousSchool: string;
  address: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_ADMISSION_TEMPLATE_ID,
      {
        student_name: formData.studentName,
        date_of_birth: formData.dateOfBirth,
        parent_name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        grade: formData.grade,
        previous_school: formData.previousSchool,
        address: formData.address,
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
