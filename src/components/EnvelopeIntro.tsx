import React, { useEffect, useRef, useState } from 'react';
import { HALL_CONFIG } from '../config/templateConfig';
import { WaxSealSvg } from './Ornaments';

interface EnvelopeIntroProps {
  onOpenComplete: () => void;
}

const FLOATING_GOLD_PARTICLES = [
  { tx: '-74px', ty: '-148px', delay: '120ms', dur: '1.3s', size: 5 },
  { tx: '-32px', ty: '-172px', delay: '220ms', dur: '1.35s', size: 4 },
  { tx: '18px', ty: '-186px', delay: '180ms', dur: '1.4s', size: 6 },
  { tx: '64px', ty: '-154px', delay: '260ms', dur: '1.25s', size: 5 },
  { tx: '-98px', ty: '-108px', delay: '160ms', dur: '1.15s', size: 4 },
  { tx: '96px', ty: '-116px', delay: '300ms', dur: '1.2s', size: 4 },
  { tx: '-14px', ty: '-140px', delay: '380ms', dur: '1.25s', size: 5 },
  { tx: '42px', ty: '-132px', delay: '420ms', dur: '1.2s', size: 3.5 },
  { tx: '-54px', ty: '-164px', delay: '460ms', dur: '1.3s', size: 4 },
  { tx: '82px', ty: '-144px', delay: '500ms', dur: '1.25s', size: 4.5 },
  { tx: '-4px', ty: '-196px', delay: '320ms', dur: '1.4s', size: 5 },
  { tx: '28px', ty: '-160px', delay: '540ms', dur: '1.2s', size: 3.5 },
];

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpenComplete }) => {
  const [cracking, setCracking] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [cardOut, setCardOut] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const handleOpen = () => {
    if (cracking || fadingOut) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setFadingOut(true);
      const id = window.setTimeout(() => onOpenComplete(), 320);
      timersRef.current.push(id);
      return;
    }

    // 1.75s multi-stage royal unboxing choreography (transform + opacity only)
    setCracking(true);
    timersRef.current.push(window.setTimeout(() => setFlapOpen(true), 260));
    timersRef.current.push(window.setTimeout(() => setCardOut(true), 560));
    timersRef.current.push(window.setTimeout(() => setFadingOut(true), 1280));
    timersRef.current.push(window.setTimeout(() => onOpenComplete(), 1750));
  };

  return (
    <div
      className={`envelope-intro-fade fixed inset-0 z-50 flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#2B0606] px-5 py-6 sm:px-8 sm:py-8 transition-opacity duration-500 ease-out ${
        fadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Nakreezay Banquet wedding venue invitation envelope"
      data-testid="envelope-intro"
    >
      {/* Warm top overhead ambient lighting + deep royal vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_78%_54%_at_50%_6%,rgba(235,196,112,0.16)_0%,rgba(94,18,18,0.42)_44%,rgba(26,3,3,0.96)_100%)]"
      />

      {/* Subtle fine woven maroon paper grain overlay across backdrop */}
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 h-full w-full opacity-[0.06] mix-blend-overlay"
      >
        <filter id="backdropGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#backdropGrain)" />
      </svg>

      {/* Ornate Thin Gold Double Frame Around Screen Edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-2.5 sm:inset-5 border border-[#C9A227]/40"
      >
        <div className="absolute inset-[5px] border border-[#C9A227]/18" />
        {/* Top-left filigree corner */}
        <svg className="absolute -left-px -top-px h-7 w-7 sm:h-9 sm:w-9 text-[#C9A227]" viewBox="0 0 36 36" fill="none">
          <path d="M1 22V1H22" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.85" />
          <path d="M5 14V5H14" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.55" />
          <rect x="4" y="4" width="4" height="4" transform="rotate(45 6 6)" fill="currentColor" fillOpacity="0.7" />
        </svg>
        {/* Top-right filigree corner */}
        <svg className="absolute -right-px -top-px h-7 w-7 sm:h-9 sm:w-9 text-[#C9A227]" viewBox="0 0 36 36" fill="none">
          <path d="M35 22V1H14" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.85" />
          <path d="M31 14V5H22" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.55" />
          <rect x="28" y="4" width="4" height="4" transform="rotate(45 30 6)" fill="currentColor" fillOpacity="0.7" />
        </svg>
        {/* Bottom-left filigree corner */}
        <svg className="absolute -bottom-px -left-px h-7 w-7 sm:h-9 sm:w-9 text-[#C9A227]" viewBox="0 0 36 36" fill="none">
          <path d="M1 14V35H22" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.85" />
          <path d="M5 22V31H14" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.55" />
          <rect x="4" y="28" width="4" height="4" transform="rotate(45 6 30)" fill="currentColor" fillOpacity="0.7" />
        </svg>
        {/* Bottom-right filigree corner */}
        <svg className="absolute -bottom-px -right-px h-7 w-7 sm:h-9 sm:w-9 text-[#C9A227]" viewBox="0 0 36 36" fill="none">
          <path d="M35 14V35H14" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.85" />
          <path d="M31 22V31H22" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.55" />
          <rect x="28" y="28" width="4" height="4" transform="rotate(45 30 30)" fill="currentColor" fillOpacity="0.7" />
        </svg>
      </div>

      {/* Single-screen centered layout with guaranteed safe margins */}
      <div className="envelope-enter relative z-10 flex w-full max-w-3xl flex-col items-center justify-center text-center px-2 sm:px-4">
        <p className="font-heading text-[10px] sm:text-[12px] uppercase tracking-[0.28em] text-[#C9A227]/95 max-w-full">
          Banquet &amp; Marquee · {HALL_CONFIG.city}
        </p>

        {/* Full venue name safely scaled on one regal line with horizontal glyph padding so Pinyon Script swashes never clip */}
        <h1 className="mt-1.5 sm:mt-2 w-full max-w-full px-3 font-script text-[clamp(30px,7.6vw,62px)] text-[#C9A227] leading-[1.2] whitespace-nowrap drop-shadow-[0_2px_10px_rgba(20,2,2,0.7)]">
          {HALL_CONFIG.hallName}
        </h1>

        <p
          className={`mt-0.5 sm:mt-1 font-editorial italic text-[17px] sm:text-2xl text-[#F5EFE0]/95 transition-opacity duration-300 ${
            flapOpen ? 'opacity-20' : 'opacity-100'
          }`}
        >
          {HALL_CONFIG.tagline}
        </p>

        {/* Realistic 3D Maroon Cotton-Paper Royal Envelope */}
        <div className="envelope-stage relative mt-5 sm:mt-10 w-full max-w-[300px] sm:max-w-[400px]">
          {/* Soft ambient surface shadow directly under the envelope */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 inset-x-4 h-7 rounded-full bg-[#120101]/85 blur-xl"
          />

          <div
            className="relative mx-auto aspect-[1.52/1] w-full rounded-[10px] bg-gradient-to-br from-[#5B1313] via-[#450C0C] to-[#280505] shadow-[0_22px_50px_rgba(14,1,1,0.82),0_4px_12px_rgba(14,1,1,0.55),inset_0_1px_0_rgba(255,224,155,0.22)] overflow-visible"
          >
            {/* Gold-lined interior visible when top flap lifts */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[2px] rounded-[8px] bg-[linear-gradient(180deg,#6E480D_0%,#3C0A0A_55%,#2D0606_100%)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(244,210,115,0.34),transparent_65%)]" />
            </div>

            {/* Golden light spilling out from inside the opened envelope */}
            <div
              aria-hidden="true"
              className={`envelope-inner-glow pointer-events-none absolute -top-16 left-1/2 z-10 h-44 w-[96%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_68%,rgba(255,233,156,0.68)_0%,rgba(201,162,39,0.28)_48%,transparent_76%)] blur-md ${
                flapOpen ? 'is-lit' : ''
              }`}
            />

            {/* Rising Textured Ivory Royal Invitation Card */}
            <div
              className={`envelope-letter absolute inset-x-4 sm:inset-x-5 top-2.5 bottom-2.5 z-[15] rounded-[5px] border border-[#C9A227]/80 bg-[#F5EFE0] px-4 pt-4 sm:pt-6 pb-3 text-[#4A0E0E] shadow-[0_14px_34px_rgba(22,2,2,0.58)] flex flex-col items-center justify-start ${
                cardOut ? 'is-open' : ''
              }`}
              aria-hidden="true"
            >
              <div className="pointer-events-none absolute inset-[4px] rounded-[3px] border border-[#C9A227]/40" />
              <p className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#B08D2E]">
                Royal Invitation
              </p>
              <p className="mt-1 font-script text-[24px] sm:text-[32px] text-[#4A0E0E] leading-tight px-2 whitespace-nowrap">
                {HALL_CONFIG.hallName}
              </p>
              <p className="mt-0.5 font-editorial italic text-[11px] sm:text-sm text-[#6B5B52]">
                {HALL_CONFIG.tagline}
              </p>
            </div>

            {/* Realistic Layered Envelope Folds with Depth, Paper Grain & Foil Seams */}
            <svg
              viewBox="0 0 440 290"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-20 h-full w-full rounded-[10px]"
              aria-hidden="true"
            >
              <defs>
                <filter id="envelopePaperGrain" x="0%" y="0%" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise" />
                  <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
                  <feComponentTransfer in="gray" result="soft">
                    <feFuncA type="linear" slope="0.11" />
                  </feComponentTransfer>
                </filter>
                <linearGradient id="leftFoldGrad" x1="0%" y1="0%" x2="100%" y2="55%">
                  <stop offset="0%" stopColor="#5D1414" />
                  <stop offset="100%" stopColor="#380808" />
                </linearGradient>
                <linearGradient id="rightFoldGrad" x1="100%" y1="0%" x2="0%" y2="55%">
                  <stop offset="0%" stopColor="#4B0E0E" />
                  <stop offset="100%" stopColor="#2F0606" />
                </linearGradient>
                <linearGradient id="bottomFoldGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#651717" />
                  <stop offset="48%" stopColor="#4A0E0E" />
                  <stop offset="100%" stopColor="#320707" />
                </linearGradient>
                <linearGradient id="foilEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F4DC8D" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#C9A227" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#85620D" stopOpacity="0.45" />
                </linearGradient>
                <filter id="foldDropShadow" x="-10%" y="-12%" width="120%" height="128%">
                  <feDropShadow dx="0" dy="-2" stdDeviation="4" floodColor="#140101" floodOpacity="0.58" />
                </filter>
              </defs>

              {/* Side folds */}
              <polygon
                points="0,0 220,154 0,290"
                fill="url(#leftFoldGrad)"
                stroke="url(#foilEdge)"
                strokeWidth="0.9"
              />
              <polygon
                points="440,0 220,154 440,290"
                fill="url(#rightFoldGrad)"
                stroke="url(#foilEdge)"
                strokeWidth="0.9"
              />

              {/* Bottom overlap flap with cast crease shadow & rounded apex */}
              <path
                d="M 0,290 L 208,144 Q 220,135 232,144 L 440,290 Z"
                fill="url(#bottomFoldGrad)"
                stroke="url(#foilEdge)"
                strokeWidth="1"
                filter="url(#foldDropShadow)"
              />

              {/* Cotton paper texture overlay across front folds */}
              <rect
                width="440"
                height="290"
                fill="#FFFFFF"
                filter="url(#envelopePaperGrain)"
                style={{ mixBlendMode: 'overlay' }}
              />

              {/* Subtle rounded outer paper border catchlight */}
              <rect
                x="1"
                y="1"
                width="438"
                height="288"
                rx="9"
                fill="none"
                stroke="url(#foilEdge)"
                strokeWidth="1.2"
              />
            </svg>

            {/* Realistic Soft Cast Shadow Underneath the Top Flap (fades as flap lifts) */}
            <svg
              viewBox="0 0 440 185"
              preserveAspectRatio="none"
              aria-hidden="true"
              className={`envelope-flap-shadow pointer-events-none absolute inset-x-0 top-0 z-20 h-[62%] w-full ${
                flapOpen ? 'is-open' : ''
              }`}
            >
              <defs>
                <filter id="castBlur" x="-10%" y="-10%" width="120%" height="140%">
                  <feGaussianBlur stdDeviation="5.5" />
                </filter>
              </defs>
              <path
                d="M 8,6 L 432,6 L 234,168 Q 220,179 206,168 Z"
                fill="#140202"
                fillOpacity="0.62"
                filter="url(#castBlur)"
              />
            </svg>

            {/* 3D Pointed Top Paper Flap */}
            <div
              className={`envelope-flap absolute inset-x-0 top-0 z-30 h-[59%] ${
                flapOpen ? 'is-open' : ''
              }`}
            >
              <svg
                viewBox="0 0 440 172"
                preserveAspectRatio="none"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="topFlapRealisticGrad" x1="25%" y1="0%" x2="65%" y2="100%">
                    <stop offset="0%" stopColor="#721B1B" />
                    <stop offset="48%" stopColor="#561111" />
                    <stop offset="100%" stopColor="#3B0808" />
                  </linearGradient>
                  <linearGradient id="flapFoilTrim" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F7E199" stopOpacity="0.78" />
                    <stop offset="50%" stopColor="#C9A227" stopOpacity="0.52" />
                    <stop offset="100%" stopColor="#85620E" stopOpacity="0.65" />
                  </linearGradient>
                  <clipPath id="flapClip">
                    <path d="M 0,8 Q 0,0 8,0 L 432,0 Q 440,0 440,8 L 234,160 Q 220,171 206,160 Z" />
                  </clipPath>
                </defs>

                <g clipPath="url(#flapClip)">
                  <path
                    d="M 0,8 Q 0,0 8,0 L 432,0 Q 440,0 440,8 L 234,160 Q 220,171 206,160 Z"
                    fill="url(#topFlapRealisticGrad)"
                  />
                  {/* Paper fiber grain */}
                  <rect
                    width="440"
                    height="172"
                    fill="#FFFFFF"
                    filter="url(#envelopePaperGrain)"
                    style={{ mixBlendMode: 'overlay' }}
                  />
                </g>

                {/* Gold foil border catching top light */}
                <path
                  d="M 1,8 Q 1,1 8,1 L 432,1 Q 439,1 439,8 L 234,160 Q 220,171 206,160 Z"
                  fill="none"
                  stroke="url(#flapFoilTrim)"
                  strokeWidth="1.35"
                />
                {/* Inner pressed crease line */}
                <path
                  d="M 16,6 L 220,152 L 424,6"
                  fill="none"
                  stroke="#F5DF97"
                  strokeOpacity="0.16"
                  strokeWidth="0.9"
                />
              </svg>
            </div>

            {/* Golden Light Flash & Upward Floating Gold Particles on Seal Break */}
            {cracking && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[54%] z-40 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="wax-crack-flare h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,238,173,0.92)_0%,rgba(201,162,39,0.45)_45%,transparent_72%)] blur-md" />
                {FLOATING_GOLD_PARTICLES.map((particle, index) => (
                  <span
                    key={index}
                    className="gold-spark absolute left-0 top-0 rounded-full bg-[#F2D578] shadow-[0_0_8px_rgba(242,213,120,0.9)]"
                    style={
                      {
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        '--tx': particle.tx,
                        '--ty': particle.ty,
                        '--delay': particle.delay,
                        '--dur': particle.dur,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>
            )}

            {/* Realistic Wax Seal Button (pulses softly idle, splits cleanly on crack) */}
            <button
              type="button"
              onClick={handleOpen}
              className={`wax-seal-btn absolute left-1/2 top-[54%] z-40 cursor-pointer rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-4 focus-visible:ring-offset-[#4A0E0E] ${
                cracking ? 'is-cracking pointer-events-none' : ''
              }`}
              aria-label="Open Nakreezay Banquet invitation envelope"
            >
              {/* Soft warm gold pulse halo before tap */}
              {!cracking && (
                <span
                  aria-hidden="true"
                  className="wax-seal-halo pointer-events-none absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(232,193,86,0.48)_0%,rgba(201,162,39,0.14)_52%,transparent_74%)] blur-sm"
                />
              )}

              {!cracking ? (
                <div className="relative h-[78px] w-[78px] sm:h-[92px] sm:w-[92px]">
                  <WaxSealSvg monogram={HALL_CONFIG.monogram} size={92} className="h-full w-full" />
                </div>
              ) : (
                <div className="relative h-[78px] w-[78px] sm:h-[92px] sm:w-[92px]">
                  <div className="wax-half-left absolute inset-0">
                    <WaxSealSvg monogram={HALL_CONFIG.monogram} size={92} className="h-full w-full" />
                  </div>
                  <div className="wax-half-right absolute inset-0">
                    <WaxSealSvg monogram={HALL_CONFIG.monogram} size={92} className="h-full w-full" />
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Elegant Antique Gold Outline CTA Button */}
        <button
          type="button"
          onClick={handleOpen}
          className="gold-hover-btn mt-6 sm:mt-8 inline-flex min-h-[44px] items-center justify-center border border-[#C9A227]/85 bg-transparent px-6 sm:px-7 py-2 font-heading text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9A227] hover:bg-[#C9A227]/12 hover:border-[#EAD074] hover:text-[#F4DE8D] cursor-pointer whitespace-nowrap"
        >
          Tap Wax Seal to Enter
        </button>

        {/* Fully Visible Address Line */}
        <p className="mt-2.5 sm:mt-3 font-editorial italic text-[14px] sm:text-[16px] text-[#F5EFE0]/90 tracking-wide px-2">
          Qamber Bypass Road · Rahimabad · Mingora, Swat
        </p>
      </div>
    </div>
  );
};
