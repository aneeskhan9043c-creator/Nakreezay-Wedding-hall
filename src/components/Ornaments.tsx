import React, { useEffect, useRef, useState } from 'react';

interface WaxSealProps {
  monogram?: string;
  className?: string;
  size?: number;
}

export const WaxSealSvg: React.FC<WaxSealProps> = ({
  monogram = 'N',
  className = '',
  size = 88,
}) => {
  const uid = React.useId();
  const baseGradId = `${uid}-base`;
  const rimGradId = `${uid}-rim`;
  const recessGradId = `${uid}-recess`;
  const glossGradId = `${uid}-gloss`;
  const dropShadowId = `${uid}-shadow`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id={dropShadowId} x="-18%" y="-14%" width="140%" height="144%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1A0202" floodOpacity="0.62" />
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#2B0606" floodOpacity="0.45" />
        </filter>
        <radialGradient id={baseGradId} cx="34%" cy="28%" r="74%">
          <stop offset="0%" stopColor="#FCE9A6" />
          <stop offset="28%" stopColor="#DDB647" />
          <stop offset="62%" stopColor="#B88E1C" />
          <stop offset="88%" stopColor="#86620B" />
          <stop offset="100%" stopColor="#5E4204" />
        </radialGradient>
        <linearGradient id={rimGradId} x1="12%" y1="8%" x2="88%" y2="92%">
          <stop offset="0%" stopColor="#FFF5C4" stopOpacity="0.92" />
          <stop offset="45%" stopColor="#C9A227" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4A3203" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id={recessGradId} cx="54%" cy="56%" r="62%">
          <stop offset="0%" stopColor="#9C7513" />
          <stop offset="65%" stopColor="#B88E1D" />
          <stop offset="88%" stopColor="#815D0B" />
          <stop offset="100%" stopColor="#5D4104" />
        </radialGradient>
        <linearGradient id={glossGradId} x1="20%" y1="0%" x2="80%" y2="85%">
          <stop offset="0%" stopColor="#FFFBE0" stopOpacity="0.58" />
          <stop offset="45%" stopColor="#FFF5C0" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#FFF5C0" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g filter={`url(#${dropShadowId})`}>
        {/* Uneven organic poured wax silhouette */}
        <path
          d="M59 5C67 6 73 3 80 7C86 11 94 11 100 18C106 24 113 30 112 39C111 46 117 52 115 60C113 68 116 76 110 84C104 92 103 100 94 105C86 110 79 115 70 113C62 111 56 117 47 113C38 110 30 111 23 104C16 97 10 92 9 82C8 73 3 66 7 56C10 47 7 38 14 30C20 22 25 14 35 12C44 10 50 4 59 5Z"
          fill={`url(#${baseGradId})`}
          stroke={`url(#${rimGradId})`}
          strokeWidth="1.6"
        />

        {/* Secondary poured-wax inner puddle lip */}
        <path
          d="M60 13C68 14 75 13 82 17C90 22 97 25 101 34C105 42 108 50 107 60C106 70 104 80 98 88C91 96 84 103 73 104C63 106 54 107 45 103C36 99 26 97 21 88C16 79 13 70 15 59C17 48 16 38 23 30C30 22 38 17 47 15C52 14 55 13 60 13Z"
          fill="none"
          stroke="#6A4B07"
          strokeOpacity="0.45"
          strokeWidth="1.4"
        />

        {/* Stamped inner recessed wax basin */}
        <circle
          cx="60"
          cy="60"
          r="35"
          fill={`url(#${recessGradId})`}
          stroke="#5C3F05"
          strokeWidth="2.4"
          strokeOpacity="0.72"
        />

        {/* Upper inner lip catchlight */}
        <circle
          cx="60"
          cy="60"
          r="33"
          fill="none"
          stroke="#FAE8A8"
          strokeWidth="1"
          strokeOpacity="0.62"
        />

        {/* Engraved beaded inner ring */}
        <circle
          cx="60"
          cy="60"
          r="28.5"
          fill="none"
          stroke="#634506"
          strokeWidth="1.1"
          strokeDasharray="1.8 3.6"
          strokeOpacity="0.68"
        />

        {/* Glossy wax specular arc */}
        <path
          d="M31 44C36 27 54 19 72 22C83 24 91 30 96 39C86 30 70 27 55 31C42 34 35 42 31 53C30 50 30 47 31 44Z"
          fill={`url(#${glossGradId})`}
        />

        {/* Embossed / stamped monogram with highlight & crease shadow */}
        <text
          x="60.8"
          y="71.4"
          textAnchor="middle"
          fill="#4A3203"
          fillOpacity="0.7"
          fontFamily="Cinzel, Georgia, serif"
          fontWeight="700"
          fontSize="33"
        >
          {monogram}
        </text>
        <text
          x="59.4"
          y="69.8"
          textAnchor="middle"
          fill="#FFF2BE"
          fillOpacity="0.68"
          fontFamily="Cinzel, Georgia, serif"
          fontWeight="700"
          fontSize="33"
        >
          {monogram}
        </text>
        <text
          x="60"
          y="70.5"
          textAnchor="middle"
          fill="#8E6710"
          fontFamily="Cinzel, Georgia, serif"
          fontWeight="700"
          fontSize="33"
        >
          {monogram}
        </text>
      </g>
    </svg>
  );
};

interface SilkDrapeDividerProps {
  topTone?: 'maroon' | 'ivory';
  bottomTone?: 'maroon' | 'ivory';
  flip?: boolean;
  className?: string;
}

export const SilkDrapeDivider: React.FC<SilkDrapeDividerProps> = ({
  topTone = 'maroon',
  bottomTone = 'ivory',
  flip = false,
  className = '',
}) => {
  const id = React.useId();
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const topColor = topTone === 'maroon' ? '#3B0808' : '#F5EFE0';
  const bottomColor = bottomTone === 'maroon' ? '#3B0808' : '#F5EFE0';

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden select-none pointer-events-none leading-none ${className}`}
      style={{
        background: `linear-gradient(180deg, ${topColor} 0%, ${topColor} 48%, ${bottomColor} 52%, ${bottomColor} 100%)`,
      }}
      aria-hidden="true"
    >
      <div
        data-visible={visible ? 'true' : 'false'}
        className="divider-draw w-full"
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className={`w-full h-16 sm:h-24 md:h-28 block ${flip ? 'scale-x-[-1]' : ''}`}
        >
          <defs>
            <linearGradient id={`${id}-shadow`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D0303" />
              <stop offset="40%" stopColor="#5D1313" />
              <stop offset="75%" stopColor="#2A0505" />
              <stop offset="100%" stopColor="#6D1919" />
            </linearGradient>
            <linearGradient id={`${id}-satin`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A0E0E" />
              <stop offset="35%" stopColor="#892323" />
              <stop offset="68%" stopColor="#3B0808" />
              <stop offset="100%" stopColor="#771B1B" />
            </linearGradient>
            <linearGradient id={`${id}-highlight`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A53535" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#C9A227" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#A53535" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,12 C260,115 620,142 980,78 C1190,40 1350,24 1440,38 L1440,110 C1180,142 820,148 440,116 C210,96 80,72 0,62 Z"
            fill={`url(#${id}-shadow)`}
          />
          <path
            d="M0,34 C250,104 540,126 840,92 C1090,64 1280,18 1440,10 L1440,68 C1200,112 900,132 520,108 C250,90 95,62 0,52 Z"
            fill={`url(#${id}-satin)`}
          />
          <path
            d="M0,44 C280,112 630,126 990,74 C1190,45 1340,22 1440,28"
            fill="none"
            stroke={`url(#${id}-highlight)`}
            strokeWidth="1.6"
          />
          <path
            d="M0,58 C300,106 670,134 1030,96 C1220,76 1350,58 1440,62"
            fill="none"
            stroke="#C9A227"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
};

export const GoldHairlineDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      className={`divider-draw flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#C9A227]/80" />
      <span className="w-2.5 h-2.5 rotate-45 border border-[#C9A227] bg-[#C9A227]/30" />
      <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#C9A227]/80" />
    </div>
  );
};

export const GoldRibbonStrip: React.FC = () => {
  const phrase = 'NAKREEZAY BANQUET  •  MINGORA  •  SWAT  •';
  const items = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className="gold-ribbon-strip relative w-full overflow-hidden border-y border-[#C9A227]/45 bg-[#3B0808] py-2.5 select-none"
    >
      <div className="gold-ribbon-track">
        {[0, 1].map((groupIdx) => (
          <div key={groupIdx} className="flex shrink-0 items-center">
            {items.map((idx) => (
              <span
                key={`${groupIdx}-${idx}`}
                className="mx-5 whitespace-nowrap font-heading text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.32em] text-[#C9A227]"
              >
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
