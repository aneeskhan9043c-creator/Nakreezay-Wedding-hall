import React from 'react';
import { MapPin, MessageCircle, Phone, Star } from 'lucide-react';
import { HALL_CONFIG, HERO_PHOTO } from '../config/templateConfig';
import { buildQuickWhatsAppUrl } from '../utils/booking';
import { AnimatedCounter } from './MotionHelpers';

const ROSE_PETALS = [
  { left: '8%', duration: '11s', delay: '0s', size: 12 },
  { left: '22%', duration: '13.5s', delay: '2.1s', size: 10 },
  { left: '38%', duration: '12s', delay: '0.9s', size: 13 },
  { left: '54%', duration: '14s', delay: '3.0s', size: 11 },
  { left: '70%', duration: '10.8s', delay: '1.6s', size: 12 },
  { left: '84%', duration: '12.6s', delay: '2.7s', size: 10 },
  { left: '93%', duration: '11.4s', delay: '0.4s', size: 11 },
];

export const HeroSection: React.FC = () => {
  const whatsappUrl = buildQuickWhatsAppUrl(
    HALL_CONFIG.hallName,
    HALL_CONFIG.whatsappDigits
  );
  const titleWords = HALL_CONFIG.hallName.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-[74vh] sm:min-h-[86vh] flex items-center justify-center overflow-hidden bg-[#4A0E0E]"
    >
      {/* Full-bleed draped banquet hall photo (eager, 20s Ken Burns loop) */}
      <img
        src={HERO_PHOTO.src}
        alt={HERO_PHOTO.title}
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
        className="hero-ken-burns absolute inset-0 h-full w-full object-cover"
      />

      {/* Deep maroon contrast scrim (zero black fill) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#2B0606]/78 via-[#4A0E0E]/62 to-[#2B0606]/86"
      />

      {/* Floating rose petals drifting down */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {ROSE_PETALS.map((petal, idx) => (
          <svg
            key={idx}
            viewBox="0 0 24 24"
            width={petal.size}
            height={petal.size}
            className="rose-petal absolute -top-6 text-[#9E2A2B]/80"
            style={
              {
                left: petal.left,
                '--petal-duration': petal.duration,
                '--petal-delay': petal.delay,
              } as React.CSSProperties
            }
          >
            <path
              d="M12 2C7 5 4 11 6 16C8 20 14 21 18 17C21 13 19 6 12 2Z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>

      {/* Centered typography & CTAs with word-by-word & staggered GPU entrances */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-14 sm:py-20 text-center">
        <p
          className="hero-stagger inline-block border-b border-[#C9A227]/55 pb-1.5 font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-[#C9A227]"
          style={{ '--stagger-delay': '0ms' } as React.CSSProperties}
        >
          BANQUET &amp; MARQUEE — MINGORA, SWAT
        </p>

        {/* Word-by-word animated H1 with 5s gold shimmer sweep across the venue name */}
        <h1 className="mt-5 font-script text-[clamp(48px,12vw,96px)] text-[#C9A227] leading-[1.06] drop-shadow-sm px-3">
          {titleWords.map((word, idx) => (
            <span
              key={word}
              className="hero-word px-1.5"
              style={{ '--word-delay': `${140 + idx * 170}ms` } as React.CSSProperties}
            >
              <span className="hero-title-shimmer inline-block px-1">{word}</span>
            </span>
          ))}
        </h1>

        <p
          className="hero-stagger mt-2 font-editorial italic text-2xl sm:text-3xl text-[#F5EFE0] leading-relaxed"
          style={{ '--stagger-delay': '420ms' } as React.CSSProperties}
        >
          {HALL_CONFIG.tagline}
        </p>

        {/* Staggered slide-up buttons: Solid Antique Gold "Call to Book" + 1px Gold Border Outline "WhatsApp Us" */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href={HALL_CONFIG.phoneHref}
            style={{ '--stagger-delay': '520ms' } as React.CSSProperties}
            className="hero-stagger gold-hover-btn btn-primary-shimmer inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#C9A227] bg-[#C9A227] px-7 py-3 font-heading text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] whitespace-nowrap"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Call to Book</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--stagger-delay': '640ms' } as React.CSSProperties}
            className="hero-stagger gold-hover-btn inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#C9A227] bg-transparent px-7 py-3 font-heading text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#C9A227] hover:bg-[#C9A227]/15 backdrop-blur-xs whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Rating & Address line ON the photo */}
        <div
          className="hero-stagger mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#C9A227]/35 pt-5 font-editorial text-[17px] sm:text-[18px] text-[#F5EFE0]"
          style={{ '--stagger-delay': '760ms' } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Star className="h-4 w-4 fill-[#C9A227] text-[#C9A227]" aria-hidden="true" />
            <span>
              <AnimatedCounter target={4} className="stat-gold-glow text-[#C9A227]" /> Stars Rated
            </span>
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-[#C9A227]/60">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-[#C9A227] shrink-0" aria-hidden="true" />
            <span>Qamber Bypass Road, Rahimabad, Mingora, Swat</span>
          </span>
        </div>
      </div>
    </section>
  );
};
