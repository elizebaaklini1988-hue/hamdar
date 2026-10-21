import React from 'react';
import { ExternalLink, Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menswear';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070a0f] border-t border-white/10 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-serif font-bold text-white tracking-wider mb-2">
              HAMDAR MEN'S WEAR
            </h3>
            <p className="text-sm font-serif italic text-[#d6af68] mb-4">
              {BUSINESS_INFO.arabicName} · سعدنايل، البقاع
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              Premier men's fashion and tailoring showroom located on Saadnayel Main Road. Specializing in Italian-cut suits, groom ceremonial tuxedos, and contemporary smart-casual apparel with nationwide Lebanon delivery.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white transition-colors"
                aria-label="Hamdar Men's Wear on Facebook"
              >
                <span className="text-xs font-semibold px-1">Facebook Page</span>
              </a>
              <a
                href={BUSINESS_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-pink-600 text-slate-300 hover:text-white transition-colors"
                aria-label="Hamdar Men's Wear on Instagram"
              >
                <span className="text-xs font-semibold px-1">Instagram</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Collections & Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#collections" className="hover:text-[#d6af68] transition-colors">
                  Ceremonial Suits & Tuxedos
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#d6af68] transition-colors">
                  Italian Cut Blazers
                </a>
              </li>
              <li>
                <a href="#groom-suite" className="hover:text-[#d6af68] transition-colors">
                  Groom & Wedding Suite
                </a>
              </li>
              <li>
                <a href="#tailoring" className="hover:text-[#d6af68] transition-colors">
                  In-Store Fitting & Alterations
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-[#d6af68] transition-colors">
                  Seasonal Lookbook & Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Boutique Location
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d6af68] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.location.address}, Saadnayel, Bekaa Valley, Lebanon
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d6af68] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-white">
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp: {BUSINESS_INFO.contact.whatsappDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500">
              Open Mon–Sat: 10:00 AM – 9:00 PM · Sun: 11:00 AM – 6:00 PM
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Hamdar Men's Wear. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Saadnayel, Lebanon</span>
            <span>·</span>
            <span>Cash on Delivery Available</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
