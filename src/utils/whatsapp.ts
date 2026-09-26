import { GYM_CONFIG } from '../config/gymConfig';

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  selectedProgram: string;
  preferredBranch?: string;
  notes?: string;
}

/**
 * Builds the official WhatsApp click-to-chat URL with a prefilled, URL-encoded message.
 * Format: https://wa.me/<number>?text=<encoded_text>
 */
export function createWhatsAppUrl(message: string, customNumber?: string): string {
  const number = customNumber || GYM_CONFIG.whatsappNumber;
  // Clean number just in case: remove +, spaces, dashes
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

/**
 * Formats a comprehensive enquiry message from the website contact form
 */
export function formatContactFormWhatsAppMessage(data: ContactFormData): string {
  const branchText = data.preferredBranch ? `\n• Preferred Branch: ${data.preferredBranch}` : '';
  const notesText = data.notes && data.notes.trim() ? `\n• Note: ${data.notes.trim()}` : '';

  return (
    `Hello Abhijeet Gym!\n\n` +
    `My name is ${data.fullName.trim()}.\n` +
    `I am interested in: ${data.selectedProgram || 'General Gym Membership'}.${branchText}\n` +
    `My contact number is: ${data.phoneNumber.trim()}.${notesText}\n\n` +
    `Please share the membership details, batch timings, and current offers.`
  );
}

/**
 * Formats prefilled message for specific program enquiry
 */
export function formatProgramEnquiryMessage(programName: string): string {
  return `Hello Abhijeet Gym! I am interested in learning more about your "${programName}" program. Please share the details, timings, and fee structure.`;
}

/**
 * Formats prefilled message for specific membership plan enquiry
 */
export function formatPlanEnquiryMessage(planName: string, duration: string): string {
  return `Hello Abhijeet Gym! I would like to choose the "${planName}" (${duration}) membership plan. Please guide me through the admission process and payment options.`;
}

/**
 * Opens WhatsApp in a new tab with the given message, and triggers an optional callback
 */
export function openWhatsAppChat(message: string, onOpened?: () => void): void {
  const url = createWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
  if (onOpened) {
    onOpened();
  }
}
