import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menswear';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      
      {/* Pop-up bubble prompt */}
      {showTooltip && (
        <div className="hidden sm:flex pointer-events-auto items-center gap-2 bg-[#0e1420] border border-[#d6af68]/40 shadow-2xl py-2 px-3.5 rounded-xl text-xs text-slate-200 animate-in fade-in slide-in-from-right duration-300">
          <span>Need sizing help or suit advice?</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-slate-400 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={BUSINESS_INFO.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Hamdar Men's Wear"
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-200 group relative"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">Contact on WhatsApp</span>
      </a>

    </div>
  );
};
