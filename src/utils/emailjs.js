

import emailjs from '@emailjs/browser';

export const sendEmail = async (templateParams) => {
    try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        );

        return { success: true, message: 'Message sent successfully!', response };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return { success: false, message: 'Failed to send message. Please try again.', error };
    }
};
