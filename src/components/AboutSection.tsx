import React from 'react';
import { Scissors, Compass, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/menswear';

export const AboutSection: React.FC = () => {
  return (
    <section id="tailoring" className="py-20 sm:py-28 bg-[#070a0f] border-b border-white/5 relative overflow-hidden">
      
      {/* Decorative hairline grid pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-[#d6af68] font-medium mb-3">
              Heritage & Tailoring Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              A Legacy of Sartorial Poise in Saadnayel
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-4">
              At Hamdar Men's Wear, we believe that an exceptional suit is more than fine cloth; it is an armor of confidence. Situated strategically along the main artery of Saadnayel in the Bekaa Valley, our boutique serves modern gentlemen seeking the refined balance between timeless European tailoring and contemporary Middle Eastern lifestyle.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Every garment in our showroom undergoes rigorous inspection for weave integrity, drape, and stitch density. Whether you are stepping onto the altar as a groom or leading an executive boardroom, our master tailors ensure your ensemble speaks with quiet authority.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-2xl font-serif font-bold text-[#d6af68] block mb-1">
                  100%
                </span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                  Bespoke Fit Check
                </span>
                <p className="text-xs text-slate-400">
                  Every suit tailored to your personal proportions before handover.
                </p>
              </div>

              <div>
                <span className="text-2xl font-serif font-bold text-[#d6af68] block mb-1">
                  24–48h
                </span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                  Lebanon Delivery
                </span>
                <p className="text-xs text-slate-400">
                  Reliable door-to-door delivery with Cash on Delivery options nationwide.
                </p>
              </div>

              <div>
                <span className="text-2xl font-serif font-bold text-[#d6af68] block mb-1">
                  500+
                </span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                  Grooms Outfitted
                </span>
                <p className="text-xs text-slate-400">
                  Trusted for premier ceremonies across Bekaa, Mount Lebanon, and Beirut.
                </p>
              </div>
            </div>

          </div>

          {/* Right Visual Story Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#101622] border border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-serif uppercase tracking-widest text-[#d6af68]">
                    In-House Tailoring Room
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">
                    The 4 Steps to Your Signature Fit
                  </h3>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d6af68]">
                  <Scissors className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#d6af68]/10 text-[#d6af68] border border-[#d6af68]/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Silhouette Selection</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Analyzing posture, shoulder slope, and event context to pick the ideal cut (Slim, Athletic, or Classic).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#d6af68]/10 text-[#d6af68] border border-[#d6af68]/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Sartorial Pinning</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Measuring jacket sleeve length, waist suppression, and trouser break over dress shoes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#d6af68]/10 text-[#d6af68] border border-[#d6af68]/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Precision In-Store Adjustment</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fine needle alterations executed on-site in Saadnayel with high-tensile threads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#d6af68]/10 text-[#d6af68] border border-[#d6af68]/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Hand-Press & Garment Bagging</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Steam pressing on natural horsehair boards to protect fabric sheen, delivered ready to wear.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Link */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={BUSINESS_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-center text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all block"
                >
                  Book a Fitting Session via WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency: Genuine Customer Testimonials */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-widest text-[#d6af68] font-medium mb-2">
              Customer Experiences
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Endorsed by Gentlemen Across Lebanon
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#0e1420] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold text-white block">{t.author}</span>
                    <span className="text-xs text-slate-400">{t.location}</span>
                  </div>
                  <span className="text-[11px] text-[#d6af68] uppercase tracking-wider font-medium">
                    {t.context}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
