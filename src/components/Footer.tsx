import React, { useState } from 'react';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { HALL_CONFIG } from '../config/templateConfig';
import { buildQuickWhatsAppUrl } from '../utils/booking';
import { AnimatedCounter, ScrollReveal } from './MotionHelpers';
import { GoldHairlineDivider, WaxSealSvg } from './Ornaments';

const FOOTER_LINKS = [
  { href: '#halls', label: 'Halls' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faqs', label: 'FAQs' },
];

const ANEES_BURST_SPARKS = [
  { bx: '-42px', by: '-18px', size: 4, delay: '0ms' },
  { bx: '44px', by: '-16px', size: 4, delay: '20ms' },
  { bx: '-28px', by: '-30px', size: 3.5, delay: '35ms' },
  { bx: '26px', by: '-28px', size: 3.5, delay: '15ms' },
  { bx: '-52px', by: '4px', size: 3, delay: '45ms' },
  { bx: '54px', by: '6px', size: 3, delay: '30ms' },
  { bx: '-20px', by: '22px', size: 3.5, delay: '40ms' },
  { bx: '22px', by: '24px', size: 3.5, delay: '25ms' },
  { bx: '0px', by: '-34px', size: 4, delay: '10ms' },
  { bx: '0px', by: '28px', size: 3, delay: '50ms' },
];

export const Footer: React.FC = () => {
  const [burstId, setBurstId] = useState(0);

  const whatsappUrl = buildQuickWhatsAppUrl(
    HALL_CONFIG.hallName,
    HALL_CONFIG.whatsappDigits
  );

  const triggerSignatureBurst = () => {
    setBurstId((prev) => prev + 1);
  };

  return (
    <footer className="border-t border-[#C9A227]/40 bg-[#3B0808] pt-10 pb-22 md:pb-12 px-4 sm:px-6 text-[#F5EFE0]">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <WaxSealSvg monogram={HALL_CONFIG.monogram} size={48} />
          <h2 className="mt-3 font-script text-[clamp(44px,10vw,64px)] text-[#C9A227] leading-none">
            {HALL_CONFIG.hallName}
          </h2>
          <p className="mt-1 font-editorial italic text-[18px] sm:text-xl text-[#F5EFE0]">
            {HALL_CONFIG.tagline}
          </p>
        </div>

        <GoldHairlineDivider className="my-6" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 font-editorial text-[17px] text-[#F5EFE0]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Address</span>
            </div>
            <p className="mt-2.5 leading-[1.7] text-[#F5EFE0]">{HALL_CONFIG.address}</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Call &amp; WhatsApp</span>
            </div>
            <p className="mt-2.5 leading-[1.7]">
              <a
                href={HALL_CONFIG.phoneHref}
                className="text-[#F5EFE0] hover:text-[#EAD074] transition-colors duration-200"
              >
                Call to Book:{' '}
                <span className="font-heading text-sm text-[#C9A227] tabular-nums">
                  {HALL_CONFIG.phone}
                </span>
              </a>
            </p>
            <p className="mt-1 leading-[1.7]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F5EFE0] hover:text-[#EAD074] hover:underline transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#C9A227]" aria-hidden="true" />
                <span>
                  WhatsApp Us (
                  <span className="font-heading text-sm text-[#C9A227] tabular-nums">
                    {HALL_CONFIG.whatsappDisplay}
                  </span>
                  )
                </span>
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Timings</span>
            </div>
            <p className="mt-2.5 text-[#F5EFE0] leading-[1.7]">
              {HALL_CONFIG.timingsNote}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Quick Links
            </p>
            <nav
              aria-label="Footer navigation"
              className="mt-2.5 flex flex-wrap md:flex-col justify-center md:items-end gap-x-5 gap-y-1.5"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#F5EFE0] hover:text-[#EAD074] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-10 pt-6 border-t border-[#C9A227]/25 flex flex-col sm:flex-row items-center justify-between gap-3 font-editorial text-base text-[#F5EFE0]/85">
          <p>
            {HALL_CONFIG.hallName} — {HALL_CONFIG.city}, {HALL_CONFIG.region}
          </p>
          <p>
            <AnimatedCounter target={4} className="stat-gold-glow text-sm text-[#C9A227]" /> Stars Rated · Two Spacious Main Halls · Big Car Parking
          </p>
        </div>

        {/* Final Signature Credit — VERY LAST element in footer */}
        <ScrollReveal
          delayMs={120}
          className="mt-6 pt-6 border-t border-[#C9A227]/25 flex justify-center text-center"
        >
          <a
            href="https://linktr.ee/aneeskhan90430"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={triggerSignatureBurst}
            onTouchStart={triggerSignatureBurst}
            onFocus={triggerSignatureBurst}
            aria-label="Made by Anees — open portfolio links in a new tab"
            className="group relative inline-flex flex-col items-center no-underline py-1.5 px-4 transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#C9A227]"
          >
            {/* Soft antique-gold aura behind the signature */}
            <span
              aria-hidden="true"
              className="anees-signature-glow pointer-events-none absolute inset-x-2 bottom-0 top-3 rounded-full bg-[radial-gradient(ellipse_at_50%_65%,rgba(201,162,39,0.18)_0%,transparent_72%)] blur-md group-hover:bg-[radial-gradient(ellipse_at_50%_65%,rgba(232,199,88,0.34)_0%,transparent_72%)]"
            />

            {/* Reactive burst of tiny antique gold specks on hover / tap */}
            {burstId > 0 && (
              <span
                key={burstId}
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2"
              >
                {ANEES_BURST_SPARKS.map((spark, idx) => (
                  <span
                    key={idx}
                    className="anees-burst-spark absolute left-0 top-0 rounded-full bg-[#F2D578] shadow-[0_0_6px_rgba(242,213,120,0.9)]"
                    style={
                      {
                        width: `${spark.size}px`,
                        height: `${spark.size}px`,
                        animationDelay: spark.delay,
                        '--bx': spark.bx,
                        '--by': spark.by,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </span>
            )}

            <span className="relative z-10 inline-flex items-center gap-2.5 font-heading text-[12px] font-bold uppercase tracking-[0.35em] text-[#C9A227] transition-colors duration-200 group-hover:text-[#F2D874] group-active:text-[#F2D874]">
              <span
                aria-hidden="true"
                className="text-[9px] tracking-normal text-[#C9A227] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#F2D874]"
              >
                ◆
              </span>
              <span>Made By</span>
              <span
                aria-hidden="true"
                className="text-[9px] tracking-normal text-[#C9A227] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#F2D874]"
              >
                ◆
              </span>
            </span>

            <span className="anees-signature-wrap relative z-10 mt-1 font-script text-[36px] sm:text-[40px] leading-[1.15]">
              <span className="anees-signature-base">Anees</span>
              <span aria-hidden="true" className="anees-signature-sheen">
                Anees
              </span>
            </span>
          </a>
        </ScrollReveal>
      </ScrollReveal>
    </footer>
  );
};
