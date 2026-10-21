import React from 'react';
import { Sparkles, Check, MessageSquare, Calendar, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menswear';
import { SartorialArtwork } from './SartorialArtwork';

export const GroomSuite: React.FC = () => {
  const groomPackageItems = [
    "Hand-tailored 2-piece or 3-piece tuxedo (Shawl or Peak lapel)",
    "Egyptian cotton tuxedo shirt with hidden placket or stud holes",
    "Pure mulberry silk bowtie or ceremonial tie & matching pocket square",
    "Pair of polished rhodium-plated brass cufflinks",
    "Complimentary in-house fitting adjustments and sleeve taper",
    "Deluxe breathable dustproof garment travel bag",
  ];

  const groomWhatsAppMessage = encodeURIComponent(
    "Hello Hamdar Men's Wear, I am inquiring about your Wedding & Groom Ceremonial Suite. I would like to schedule a consultation / fitting for my wedding."
  );
  const groomWhatsAppUrl = `https://wa.me/96176320279?text=${groomWhatsAppMessage}`;

  return (
    <section id="groom-suite" className="py-20 sm:py-28 bg-[#0b0f17] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#121927] via-[#0e1420] to-[#080c14] border border-[#d6af68]/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Subtle gold line accent at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d6af68] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d6af68] font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Ceremonial Dressing Suite</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Your Wedding Day, Styled to Absolute Perfection.
              </h2>

              <p className="text-sm font-serif italic text-slate-400 mb-6">
                أطقم وبدلات عرسان فاخرة مع كافة الإكسسوارات والتفصيل الخاص في سعدنايل
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                Your wedding marks a once-in-a-lifetime milestone. At Hamdar Men's Wear, our groom concierge prepares an immaculate sartorial presentation tailored specifically to your wedding venue, color palette, and bridal gown harmony.
              </p>

              {/* Package Inclusion List */}
              <div className="space-y-3 mb-8">
                {groomPackageItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#d6af68]/15 text-[#d6af68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={groomWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all active:scale-95 shadow-lg shadow-[#c59b4e]/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve Groom Consultation</span>
                </a>

                <a
                  href="#visit-us"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#d6af68]" />
                  <span>Visit Saadnayel Showroom</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Presentation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#090d15] border border-white/10 p-6 sm:p-8 flex flex-col justify-between aspect-[4/5] shadow-inner">
                
                <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/10">
                  <span className="font-serif uppercase tracking-wider text-[#d6af68]">Master Tailored</span>
                  <span>Black Tie Standard</span>
                </div>

                <div className="my-auto py-6">
                  <SartorialArtwork type="tuxedo" accentColor="#d6af68" className="h-60" />
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#d6af68] font-medium mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Groomsmen Group Rates Available</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Coordinated styling for the father of the bride, best man, and groomsmen.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
