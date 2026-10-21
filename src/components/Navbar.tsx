import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ShoppingBag, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menswear';

interface NavbarProps {
  inquiryCount: number;
  onOpenInquiryDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  inquiryCount,
  onOpenInquiryDrawer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="text-lg sm:text-xl font-serif font-bold tracking-wider text-white hover:text-[#d6af68] transition-colors whitespace-nowrap shrink-0"
          >
            HAMDAR MEN'S WEAR
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#collections"
              className="hover:text-[#d6af68] transition-colors whitespace-nowrap shrink-0"
            >
              Collections
            </a>
            <a
              href="#tailoring"
              className="hover:text-[#d6af68] transition-colors whitespace-nowrap shrink-0"
            >
              Suits & Tailoring
            </a>
            <a
              href="#groom-suite"
              className="hover:text-[#d6af68] transition-colors whitespace-nowrap shrink-0"
            >
              Groom Suite
            </a>
            <a
              href="#lookbook"
              className="hover:text-[#d6af68] transition-colors whitespace-nowrap shrink-0"
            >
              Lookbook
            </a>
            <a
              href="#visit-us"
              className="hover:text-[#d6af68] transition-colors whitespace-nowrap shrink-0"
            >
              Visit & Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action + inquiry bag */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Inquiry / Saved list badge button */}
            <button
              onClick={onOpenInquiryDrawer}
              aria-label="View inquiry items"
              className="relative p-2.5 rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {inquiryCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#c59b4e] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {inquiryCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href={BUSINESS_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Inquiry
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1420] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4 text-base font-medium text-slate-200">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d6af68] transition-colors"
            >
              Collections
            </a>
            <a
              href="#tailoring"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d6af68] transition-colors"
            >
              Suits & Tailoring
            </a>
            <a
              href="#groom-suite"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d6af68] transition-colors"
            >
              Groom Suite
            </a>
            <a
              href="#lookbook"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d6af68] transition-colors"
            >
              Lookbook
            </a>
            <a
              href="#visit-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#d6af68] transition-colors"
            >
              Visit & Contact
            </a>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] rounded-md shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp: {BUSINESS_INFO.contact.whatsappDisplay}
              </a>
              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Call Store: {BUSINESS_INFO.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
