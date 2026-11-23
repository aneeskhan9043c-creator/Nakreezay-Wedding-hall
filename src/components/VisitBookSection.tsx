import React, { useState } from 'react';
import {
  Check,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { HALL_CONFIG } from '../config/templateConfig';
import {
  BookingFormValues,
  BookingValidationErrors,
  EVENT_TYPES,
  NakreezayEventType,
  buildQuickWhatsAppUrl,
  buildWhatsAppBookingUrl,
  validateBookingForm,
} from '../utils/booking';
import { ScrollReveal } from './MotionHelpers';
import { GoldHairlineDivider } from './Ornaments';

export const VisitBookSection: React.FC = () => {
  const [values, setValues] = useState<BookingFormValues>({
    name: '',
    phone: '',
    eventType: 'Barat',
    guests: '',
    eventDate: '',
  });
  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [justSubmitted, setJustSubmitted] = useState(false);

  const quickWhatsApp = buildQuickWhatsAppUrl(
    HALL_CONFIG.hallName,
    HALL_CONFIG.whatsappDigits
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const url = buildWhatsAppBookingUrl(
      values,
      HALL_CONFIG.hallName,
      HALL_CONFIG.whatsappDigits
    );
    setJustSubmitted(true);
    setGeneratedUrl(url);
    window.setTimeout(() => {
      setJustSubmitted(false);
    }, 1100);
  };

  return (
    <section
      id="visit-book"
      className="bg-ivory-parchment border-t border-[#C9A227]/30 py-9 sm:py-16 px-4 sm:px-6 text-[#3B2A26]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <ScrollReveal delayMs={0}>
            <p className="font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-[#B08D2E]">
              Qamber Bypass Road · Rahimabad · Mingora, Swat
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <h2 className="mt-1.5 font-heading text-[clamp(26px,6vw,40px)] font-semibold text-[#4A0E0E]">
              Visit &amp; Book
            </h2>
          </ScrollReveal>
          <GoldHairlineDivider className="mt-3.5" />
        </div>

        <div className="mt-7 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Embedded Map, Address + Landmark & Direct CTAs */}
          <ScrollReveal delayMs={0} className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="gold-hover-card overflow-hidden border border-[#C9A227]/60 bg-[#FFFDF8] shadow-xs">
              <div className="aspect-[16/9] lg:aspect-[4/3] w-full bg-[#4A0E0E]/10">
                <iframe
                  title="Nakreezay Banquet Location Map — Qamber Bypass Road, Mingora, Swat"
                  src={HALL_CONFIG.googleMapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="p-5 space-y-3.5 font-editorial text-[17px] sm:text-[18px]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-1.5 h-4 w-4 shrink-0 text-[#B08D2E]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4A0E0E]">
                      {HALL_CONFIG.address}
                    </p>
                    <p className="mt-1 italic text-[16px] text-[#6B5B52]">
                      {HALL_CONFIG.landmark}
                    </p>
                  </div>
                </div>

                <a
                  href={HALL_CONFIG.googleMapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-heading text-xs uppercase tracking-[0.16em] text-[#4A0E0E] underline decoration-[#C9A227] underline-offset-4 hover:text-[#B08D2E]"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={HALL_CONFIG.phoneHref}
                className="gold-hover-btn btn-primary-shimmer inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#C9A227] bg-[#C9A227] px-4 py-2.5 font-heading text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] whitespace-nowrap"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Call to Book</span>
              </a>
              <a
                href={quickWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-hover-btn inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#C9A227] bg-transparent px-4 py-2.5 font-heading text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] hover:bg-[#C9A227]/12 whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Short One-Hand Mobile-Friendly WhatsApp Date Form */}
          <ScrollReveal
            delayMs={100}
            className="lg:col-span-7 border border-[#C9A227]/65 bg-[#FFFDF8] p-6 sm:p-8 shadow-[0_14px_34px_rgba(74,14,14,0.08)]"
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#4A0E0E]">
              Check Your Date on WhatsApp
            </h3>
            <p className="mt-1.5 font-editorial text-[17px] sm:text-[18px] text-[#3B2A26] leading-[1.7]">
              Fill in your details below to open a pre-filled WhatsApp message to{' '}
              <span className="font-heading text-[#4A0E0E] tabular-nums">{HALL_CONFIG.phone}</span>.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#4A0E0E]"
                  >
                    Name *
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={values.name}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, name: e.target.value }));
                      setGeneratedUrl(null);
                    }}
                    placeholder="Your full name"
                    className="mt-1.5 min-h-[46px] w-full border border-[#B08D2E]/50 bg-[#FAF6EC] px-3.5 py-2 font-editorial text-[17px] text-[#3B2A26] transition-[border-color,box-shadow] duration-200 focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.28)] focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 font-editorial text-sm font-semibold text-[#8B1A1A]">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#4A0E0E]"
                  >
                    Mobile *
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, phone: e.target.value }));
                      setGeneratedUrl(null);
                    }}
                    placeholder="03XX-XXXXXXX"
                    className="mt-1.5 min-h-[46px] w-full border border-[#B08D2E]/50 bg-[#FAF6EC] px-3.5 py-2 font-editorial text-[17px] text-[#3B2A26] transition-[border-color,box-shadow] duration-200 focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.28)] focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1 font-editorial text-sm font-semibold text-[#8B1A1A]">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-event"
                    className="block font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#4A0E0E]"
                  >
                    Event *
                  </label>
                  <select
                    id="enquiry-event"
                    value={values.eventType}
                    onChange={(e) => {
                      setValues((prev) => ({
                        ...prev,
                        eventType: e.target.value as NakreezayEventType,
                      }));
                      setGeneratedUrl(null);
                    }}
                    className="mt-1.5 min-h-[46px] w-full border border-[#B08D2E]/50 bg-[#FAF6EC] px-3.5 py-2 font-editorial text-[17px] text-[#3B2A26] transition-[border-color,box-shadow] duration-200 focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.28)] focus:outline-none"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-guests"
                    className="block font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#4A0E0E]"
                  >
                    Guests *
                  </label>
                  <input
                    id="enquiry-guests"
                    type="number"
                    min={20}
                    max={5000}
                    value={values.guests}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, guests: e.target.value }));
                      setGeneratedUrl(null);
                    }}
                    placeholder="Estimated count"
                    className="mt-1.5 min-h-[46px] w-full border border-[#B08D2E]/50 bg-[#FAF6EC] px-3.5 py-2 font-editorial text-[17px] text-[#3B2A26] transition-[border-color,box-shadow] duration-200 focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.28)] focus:outline-none"
                  />
                  {errors.guests && (
                    <p className="mt-1 font-editorial text-sm font-semibold text-[#8B1A1A]">{errors.guests}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-date"
                    className="block font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#4A0E0E]"
                  >
                    Date (Optional)
                  </label>
                  <input
                    id="enquiry-date"
                    type="date"
                    value={values.eventDate}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, eventDate: e.target.value }));
                      setGeneratedUrl(null);
                    }}
                    className="mt-1.5 min-h-[46px] w-full border border-[#B08D2E]/50 bg-[#FAF6EC] px-3.5 py-2 font-editorial text-[17px] text-[#3B2A26] transition-[border-color,box-shadow] duration-200 focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.28)] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <button
                  type="submit"
                  className="gold-hover-btn btn-primary-shimmer inline-flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#C9A227] bg-[#C9A227] px-6 py-2.5 font-heading text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] cursor-pointer whitespace-nowrap"
                >
                  {justSubmitted ? (
                    <>
                      <Check className="check-pop h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Ready for WhatsApp</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Check My Date</span>
                    </>
                  )}
                </button>
                <a
                  href={HALL_CONFIG.phoneHref}
                  className="gold-hover-btn inline-flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#C9A227] bg-transparent px-6 py-2.5 font-heading text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] hover:bg-[#C9A227]/12 whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Call to Book</span>
                </a>
              </div>
            </form>

            {generatedUrl && (
              <div
                role="status"
                className="check-pop mt-5 border border-[#C9A227] bg-[#FAF6EC] p-4 text-[#3B2A26]"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4A0E0E]" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-heading text-base font-semibold text-[#4A0E0E]">
                      WhatsApp Message Ready
                    </p>
                    <p className="mt-1 font-editorial text-[17px] text-[#3B2A26]">
                      Tap below to send your {values.eventType} inquiry for{' '}
                      <span className="font-heading tabular-nums text-[#4A0E0E]">{values.guests}</span>{' '}
                      guests via WhatsApp.
                    </p>
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-hover-btn btn-primary-shimmer mt-3 inline-flex min-h-[46px] items-center justify-center gap-2 border border-[#C9A227] bg-[#C9A227] px-5 py-2 font-heading text-[13px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E]"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Open WhatsApp ({HALL_CONFIG.phone})</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>

      {/* Minimal Mobile-Only Floating WhatsApp CTA with Gentle Bob */}
      <a
        href={quickWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us at Nakreezay Banquet"
        className="whatsapp-float-bob gold-hover-btn btn-primary-shimmer md:hidden fixed bottom-4 right-4 z-40 inline-flex min-h-[46px] items-center gap-2 border border-[#4A0E0E]/30 bg-[#C9A227] px-4 py-2.5 font-heading text-[12px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] shadow-[0_10px_24px_rgba(43,6,6,0.38)]"
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>WhatsApp Us</span>
      </a>
    </section>
  );
};
