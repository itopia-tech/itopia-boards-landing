import emailjs from '@emailjs/browser';

// Configuración de EmailJS de ITopIA
const EMAILJS_CONFIG = {
  serviceId: 'service_a2tz65m',
  templateId: 'template_s3xxu4j',
  publicKey: 'eEci_wuWIg8UAUeiD'
};

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  service?: string;
  product?: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: ContactFormData): string | null => {
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    return "Por favor completa todos los campos obligatorios.";
  }

  if (!validateEmail(formData.email)) {
    return "Por favor ingresa un email válido.";
  }

  if (formData.message.length < 10) {
    return "El mensaje debe tener al menos 10 caracteres.";
  }

  return null;
};

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    company: formData.company || 'No especificada',
    phone: formData.phone || 'No especificado',
    service: formData.service || 'No especificado',
    product: formData.product || 'ITopIA Boards',
    to_name: 'ITopIA',
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
};