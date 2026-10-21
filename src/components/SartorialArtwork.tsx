import React from 'react';

interface SartorialArtworkProps {
  type: 'tuxedo' | 'suit' | 'blazer' | 'shirt' | 'shoes' | 'pants' | 'accessories';
  accentColor?: string;
  className?: string;
}

export const SartorialArtwork: React.FC<SartorialArtworkProps> = ({
  type,
  accentColor = '#c5a059',
  className = 'w-full h-full',
}) => {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background fabric weave pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
        <defs>
          <pattern id="herringbone" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 L10 0 L20 10 L10 20 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
            <path
              d="M10 0 L20 10 L10 20 L0 10 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#herringbone)" />
      </svg>

      {/* Vector art matching menswear discipline */}
      {type === 'tuxedo' && (
        <svg
          viewBox="0 0 240 280"
          className="w-4/5 h-4/5 max-h-56 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          fill="none"
        >
          {/* Shoulders & Suit Jacket outline */}
          <path
            d="M50 70 L90 35 L120 40 L150 35 L190 70 L180 240 L120 250 L60 240 Z"
            fill="#090d15"
            stroke="#1f2937"
            strokeWidth="1.5"
          />
          {/* White Ceremonial Shirt */}
          <path d="M100 40 L120 75 L140 40 L130 160 L110 160 Z" fill="#f8fafc" />
          {/* Silk Bowtie */}
          <path
            d="M110 68 L120 73 L130 68 L130 82 L120 77 L110 82 Z"
            fill={accentColor}
          />
          <circle cx="120" cy="75" r="3.5" fill="#ffffff" />
          {/* Satin Peak Lapels */}
          <path
            d="M90 35 L112 110 L120 185 L85 105 Z"
            fill="#111827"
            stroke={accentColor}
            strokeWidth="1"
          />
          <path
            d="M150 35 L128 110 L120 185 L155 105 Z"
            fill="#111827"
            stroke={accentColor}
            strokeWidth="1"
          />
          {/* Satin Pocket Square */}
          <path d="M72 120 L88 120 L84 108 Z" fill="#ffffff" />
          <line x1="68" y1="120" x2="92" y2="120" stroke={accentColor} strokeWidth="1.5" />
          {/* Covered Silk Buttons */}
          <circle cx="120" cy="200" r="3" fill={accentColor} />
          <circle cx="120" cy="220" r="3" fill={accentColor} />
        </svg>
      )}

      {type === 'suit' && (
        <svg
          viewBox="0 0 240 280"
          className="w-4/5 h-4/5 max-h-56 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          fill="none"
        >
          {/* Suit Jacket */}
          <path
            d="M55 65 L95 38 L120 42 L145 38 L185 65 L175 235 L120 245 L65 235 Z"
            fill="#131822"
            stroke="#263248"
            strokeWidth="1.5"
          />
          {/* Crisp Light Blue / White Dress Shirt */}
          <path d="M102 42 L120 75 L138 42 L130 170 L110 170 Z" fill="#e2e8f0" />
          {/* Italian Silk Tie */}
          <path
            d="M116 75 L124 75 L126 185 L120 195 L114 185 Z"
            fill={accentColor}
            stroke="#1a1c22"
            strokeWidth="0.5"
          />
          {/* Classic Notched Lapels */}
          <path
            d="M95 38 L114 100 L108 108 L120 175 L92 90 Z"
            fill="#1a2230"
            stroke="#374151"
            strokeWidth="1"
          />
          <path
            d="M145 38 L126 100 L132 108 L120 175 L148 90 Z"
            fill="#1a2230"
            stroke="#374151"
            strokeWidth="1"
          />
          {/* Chest Pocket */}
          <line x1="75" y1="115" x2="98" y2="115" stroke={accentColor} strokeWidth="1.5" />
          {/* Front Buttons */}
          <circle cx="120" cy="190" r="3.5" fill="#2d3748" stroke={accentColor} strokeWidth="1" />
          <circle cx="120" cy="215" r="3.5" fill="#2d3748" stroke={accentColor} strokeWidth="1" />
        </svg>
      )}

      {type === 'blazer' && (
        <svg
          viewBox="0 0 240 280"
          className="w-4/5 h-4/5 max-h-56 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          fill="none"
        >
          {/* Unstructured Casual Blazer */}
          <path
            d="M50 65 L95 40 L120 44 L145 40 L190 65 L178 235 L120 242 L62 235 Z"
            fill="#1e2025"
            stroke="#374151"
            strokeWidth="1.5"
          />
          {/* Open Collar Shirt / Knitwear */}
          <path d="M102 44 L120 95 L138 44 L126 140 L114 140 Z" fill="#e2d9cc" />
          {/* Broad Notched Lapel */}
          <path
            d="M95 40 L115 115 L108 122 L120 180 L88 105 Z"
            fill="#272b32"
            stroke={accentColor}
            strokeWidth="1"
          />
          <path
            d="M145 40 L125 115 L132 122 L120 180 L152 105 Z"
            fill="#272b32"
            stroke={accentColor}
            strokeWidth="1"
          />
          {/* Patch Pocket */}
          <rect
            x="68"
            y="170"
            width="32"
            height="38"
            rx="4"
            fill="#22262d"
            stroke="#374151"
            strokeWidth="1"
          />
          <rect
            x="140"
            y="170"
            width="32"
            height="38"
            rx="4"
            fill="#22262d"
            stroke="#374151"
            strokeWidth="1"
          />
          {/* Horn button */}
          <circle cx="120" cy="195" r="4" fill="#a37644" stroke="#4a3520" strokeWidth="1" />
        </svg>
      )}

      {type === 'shirt' && (
        <svg
          viewBox="0 0 240 280"
          className="w-4/5 h-4/5 max-h-56 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          fill="none"
        >
          {/* Pique Polo / Oxford Shirt */}
          <path
            d="M60 65 L100 40 L120 44 L140 40 L180 65 L170 230 L70 230 Z"
            fill="#15202e"
            stroke="#253549"
            strokeWidth="1.5"
          />
          {/* Collar */}
          <path
            d="M95 40 L120 70 L110 85 L85 45 Z"
            fill="#1c2d42"
            stroke={accentColor}
            strokeWidth="1"
          />
          <path
            d="M145 40 L120 70 L130 85 L155 45 Z"
            fill="#1c2d42"
            stroke={accentColor}
            strokeWidth="1"
          />
          {/* Placket */}
          <rect
            x="114"
            y="70"
            width="12"
            height="70"
            fill="#1c2d42"
            stroke="#2d4361"
            strokeWidth="1"
          />
          <circle cx="120" cy="85" r="2.5" fill="#f8fafc" />
          <circle cx="120" cy="105" r="2.5" fill="#f8fafc" />
          <circle cx="120" cy="125" r="2.5" fill="#f8fafc" />
          {/* Embroidered Crest */}
          <path
            d="M85 105 L92 100 L99 105 L99 114 L92 119 L85 114 Z"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
          />
        </svg>
      )}

      {type === 'pants' && (
        <svg
          viewBox="0 0 240 280"
          className="w-4/5 h-4/5 max-h-56 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          fill="none"
        >
          {/* Waistband */}
          <rect
            x="75"
            y="45"
            width="90"
            height="18"
            rx="2"
            fill="#1f1e1c"
            stroke="#383531"
            strokeWidth="1"
          />
          {/* Side adjuster buckle */}
          <rect x="70" y="49" width="8" height="10" rx="1" fill={accentColor} />
          <rect x="162" y="49" width="8" height="10" rx="1" fill={accentColor} />
          {/* Pleated Trousers Leg Form */}
          <path
            d="M75 63 L70 240 L108 240 L120 115 L132 240 L170 240 L165 63 Z"
            fill="#171614"
            stroke="#2d2b27"
            strokeWidth="1.5"
          />
          {/* Razor Sharp Crease Lines */}
          <line x1="90" y1="65" x2="88" y2="240" stroke="#3d3a35" strokeWidth="1" />
          <line x1="150" y1="65" x2="152" y2="240" stroke="#3d3a35" strokeWidth="1" />
          {/* Turn-up Cuffs */}
          <rect x="68" y="228" width="42" height="12" fill="#201f1c" stroke="#383531" strokeWidth="1" />
          <rect x="130" y="228" width="42" height="12" fill="#201f1c" stroke="#383531" strokeWidth="1" />
        </svg>
      )}

      {type === 'shoes' && (
        <svg
          viewBox="0 0 240 280"
          className="w-4/5 h-4/5 max-h-56 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          fill="none"
        >
          {/* Oxford Leather Shoe Contour */}
          <path
            d="M40 180 C45 160, 65 140, 95 130 C120 120, 150 115, 175 135 C195 150, 205 180, 200 200 L45 200 Z"
            fill="#23170e"
            stroke="#452e1d"
            strokeWidth="1.5"
          />
          {/* Leather Sole & Stacked Heel */}
          <path
            d="M38 200 L202 200 C204 207, 198 214, 190 214 L140 214 L140 210 L65 210 L65 220 L38 220 Z"
            fill="#3a2517"
            stroke={accentColor}
            strokeWidth="1"
          />
          {/* Brogue Medallion Perforations */}
          <circle cx="180" cy="165" r="1.5" fill={accentColor} />
          <circle cx="185" cy="165" r="1" fill={accentColor} />
          <circle cx="175" cy="165" r="1" fill={accentColor} />
          <circle cx="180" cy="170" r="1" fill={accentColor} />
          <circle cx="180" cy="160" r="1" fill={accentColor} />
          {/* Lacing Section */}
          <path d="M110 135 L120 135 M112 143 L122 143 M114 151 L124 151" stroke="#e0a359" strokeWidth="1.5" />
          {/* Burnished Cap Toe */}
          <path
            d="M165 145 C162 165, 165 185, 170 200"
            stroke={accentColor}
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        </svg>
      )}

      {type === 'accessories' && (
        <svg
          viewBox="0 0 240 280"
          className="w-4/5 h-4/5 max-h-56 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          fill="none"
        >
          {/* Rolled Leather Belt */}
          <circle cx="95" cy="140" r="45" fill="none" stroke="#2a1e17" strokeWidth="16" />
          <circle cx="95" cy="140" r="45" fill="none" stroke={accentColor} strokeWidth="1" strokeDasharray="3 3" />
          {/* Polished Brass Buckle */}
          <rect x="52" y="125" width="22" height="30" rx="3" fill="none" stroke="#d4af37" strokeWidth="3" />
          <line x1="58" y1="140" x2="72" y2="140" stroke="#d4af37" strokeWidth="2.5" />
          {/* Silk Folded Pocket Square */}
          <path d="M140 100 L180 80 L195 125 L160 145 Z" fill="#1e1823" stroke={accentColor} strokeWidth="1" />
          <path d="M150 95 L175 85 L180 115 Z" fill="#d9a46c" opacity="0.4" />
          {/* Cufflink Pair */}
          <circle cx="160" cy="180" r="10" fill="#1b1c20" stroke="#d4af37" strokeWidth="1.5" />
          <rect x="156" y="176" width="8" height="8" fill="#d4af37" />
          <circle cx="185" cy="195" r="10" fill="#1b1c20" stroke="#d4af37" strokeWidth="1.5" />
          <rect x="181" y="191" width="8" height="8" fill="#d4af37" />
        </svg>
      )}
    </div>
  );
};
