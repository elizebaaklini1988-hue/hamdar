import React from 'react';
import { ArrowRight, MessageSquare, Scissors, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menswear';
import { SartorialArtwork } from './SartorialArtwork';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#070a0f] via-[#0b0f17] to-[#0d121c]">
      {/* Subtle ambient luxury glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c59b4e]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Call to Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Editorial Location Kicker (Clean unboxed text, no pill) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d6af68] font-medium mb-4">
              <span>Saadnayel · Bekaa Valley</span>
              <span aria-hidden="true">·</span>
              <span>Established Men's Boutique</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-6 max-w-2xl text-balance">
              Distinction in Every Stitch, Tailored for Every Occasion.
            </h1>

            {/* Arabic Slogan & Subtitle */}
            <p className="text-sm sm:text-base font-serif italic text-slate-400 mb-2">
              {BUSINESS_INFO.arabicName} — تشكيلة واسعة من البدلات الرجالية الرسمية والسبور شيك
            </p>

            {/* Editorial Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              From ceremonial wedding tuxedos and Italian-cut suits to contemporary smart-casual layers, Hamdar Men's Wear delivers unmatched craftsmanship, personalized alterations, and prompt delivery across all regions of Lebanon.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all shadow-lg shadow-[#c59b4e]/20 active:scale-95"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#d6af68]" />
                <span>WhatsApp Sizing & Orders</span>
              </a>
            </div>

            {/* Quiet metadata details */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-white font-medium">Location:</span> Main Road, Saadnayel (facing Al-Sirat)
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-white font-medium">Direct Line:</span> 03 / 05 73 71
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#121927] to-[#090d14] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between aspect-[4/5] max-w-md mx-auto">
              
              {/* Card Header Note */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/10">
                <span className="font-serif tracking-wider uppercase text-[#d6af68]">Ceremonial Series</span>
                <span>Super 140s Wool</span>
              </div>

              {/* Bespoke Silhouette Centerpiece */}
              <div className="my-auto py-4">
                <SartorialArtwork type="tuxedo" accentColor="#d6af68" className="h-64" />
              </div>

              {/* Card Footer Detail */}
              <div className="pt-4 border-t border-white/10 bg-[#0b0f17]/60 backdrop-blur-sm -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">Sovereign Midnight Tuxedo</h2>
                  <p className="text-xs text-slate-400">Bespoke Fit · Silk Lapels</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Complete Set</span>
                  <span className="text-base font-serif font-bold text-[#d6af68] tabular-nums">$240</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width 4-Column Trust Strip Row (below hero split) */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d6af68] shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">In-Store Alterations</h3>
              <p className="text-xs text-slate-400 mt-1">
                Precision sleeve, waist, and cuff adjustments for your bespoke silhouette.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d6af68] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Premium Textiles</h3>
              <p className="text-xs text-slate-400 mt-1">
                Carefully selected Turkish and European fabrics engineered for drape and comfort.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d6af68] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Groom Styling Suite</h3>
              <p className="text-xs text-slate-400 mt-1">
                Head-to-toe wedding packages for the groom and wedding parties.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d6af68] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">All-Lebanon Delivery</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fast doorstep service with Cash on Delivery (COD) across Beirut, Bekaa, and beyond.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
