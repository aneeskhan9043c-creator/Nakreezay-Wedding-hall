export type NakreezayEventType =
  | 'Mehndi'
  | 'Barat'
  | 'Walima'
  | 'Nikah'
  | 'Engagement'
  | 'Birthday'
  | 'Corporate';

export interface BookingFormValues {
  name: string;
  phone: string;
  eventType: NakreezayEventType;
  guests: string;
  eventDate: string;
}

export interface BookingValidationErrors {
  name?: string;
  phone?: string;
  eventType?: string;
  guests?: string;
}

export const EVENT_TYPES: NakreezayEventType[] = [
  'Mehndi',
  'Barat',
  'Walima',
  'Nikah',
  'Engagement',
  'Birthday',
  'Corporate',
];

export function sanitizeWhatsAppNumber(input: string): string {
  const digits = input.replace(/\D/g, '');
  if (digits.startsWith('0') && digits.length >= 10) {
    return `92${digits.slice(1)}`;
  }
  return digits || '923409553001';
}

export function validateBookingForm(
  values: BookingFormValues
): BookingValidationErrors {
  const errors: BookingValidationErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = 'Please enter a valid mobile number (e.g., 0340-9553001).';
  }

  if (!values.eventType) {
    errors.eventType = 'Please select an event type.';
  }

  const guestCount = Number(values.guests);
  if (!values.guests.trim() || Number.isNaN(guestCount) || guestCount < 20) {
    errors.guests = 'Please enter estimated guests (at least 20).';
  } else if (guestCount > 5000) {
    errors.guests = 'Please enter a valid guest estimate.';
  }

  return errors;
}

export function buildWhatsAppBookingUrl(
  values: BookingFormValues,
  hallName: string = 'Nakreezay Banquet',
  whatsappDigits: string = '923409553001'
): string {
  const targetDigits = sanitizeWhatsAppNumber(whatsappDigits);
  const messageLines = [
    `Assalam-o-Alaikum, I would like to check availability at ${hallName}, Mingora, Swat:`,
    '',
    `Name: ${values.name.trim()}`,
    `Mobile: ${values.phone.trim()}`,
    `Event: ${values.eventType}`,
    `Guests: ${values.guests.trim()}`,
    `Preferred Date: ${values.eventDate.trim() || 'Flexible / To be discussed'}`,
    '',
    'Please share available dates and hall details. JazakAllah Khair.',
  ];
  return `https://wa.me/${targetDigits}?text=${encodeURIComponent(messageLines.join('\n'))}`;
}

export function buildQuickWhatsAppUrl(
  hallName: string = 'Nakreezay Banquet',
  whatsappDigits: string = '923409553001'
): string {
  const targetDigits = sanitizeWhatsAppNumber(whatsappDigits);
  const text = encodeURIComponent(
    `Assalam-o-Alaikum! I would like to check a date and hall details at ${hallName}, Mingora, Swat.`
  );
  return `https://wa.me/${targetDigits}?text=${text}`;
}
