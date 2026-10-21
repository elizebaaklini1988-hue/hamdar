import React, { useState } from 'react';
import { Maximize2, X, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/menswear';
import { GalleryItem } from '../types';
import { SartorialArtwork } from './SartorialArtwork';

export const LookbookGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'suits' | 'grooms' | 'casual' | 'details'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const activeItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] || null : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="lookbook" className="py-20 sm:py-28 bg-[#070a0f] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#d6af68] font-medium mb-2">
            Visual Portfolio & Lookbook
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            The Hamdar Gallery
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Explore curated silhouettes, ceremonial groom attire, and timeless sartorial styling captured from our collections.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Looks' },
              { id: 'grooms', label: 'Grooms & Ceremonial' },
              { id: 'suits', label: 'Executive Suits' },
              { id: 'casual', label: 'Smart Casual' },
              { id: 'details', label: 'Finishing Details' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id as any);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#d6af68] text-black font-semibold'
                    : 'bg-[#101622] text-slate-300 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(idx)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-[#0e1420] border border-white/10 hover:border-[#d6af68]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Media Container */}
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${item.bgGradient} p-6 flex items-center justify-center overflow-hidden`}
              >
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <SartorialArtwork
                    type={item.silhouetteType}
                    accentColor={item.accentColor}
                    className="h-44 w-full"
                  />
                </div>

                {/* Hover overlay with expand icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#d6af68]" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 text-[11px] font-medium uppercase tracking-wider text-[#d6af68] bg-[#0b0f17]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#d6af68]/30">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Caption */}
              <div className="p-5">
                <h3 className="text-base font-serif font-semibold text-white group-hover:text-[#d6af68] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Page Live Anchor Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101622] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-white">
              Discover Weekly New Arrivals on Facebook
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Follow our official Facebook page for seasonal promotions, new fabric arrivals, and in-store highlights in Saadnayel.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-md flex items-center gap-2 active:scale-95"
          >
            <span>Visit Facebook Page</span>
          </a>
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeItem && selectedItemIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItemIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#0e1420] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous & Next Navigation */}
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-4 md:right-[52%] top-1/2 -translate-y-1/2 z-20 p-2.5 text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Media Area */}
            <div
              className={`md:w-1/2 p-8 bg-gradient-to-br ${activeItem.bgGradient} flex items-center justify-center min-h-[300px]`}
            >
              <SartorialArtwork
                type={activeItem.silhouetteType}
                accentColor={activeItem.accentColor}
                className="h-64 w-full"
              />
            </div>

            {/* Details Area */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d6af68] font-medium block mb-2">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {activeItem.description}
                </p>
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-400">
                  <span className="text-white font-medium block mb-0.5">Showroom Consultation</span>
                  Available for fitting and custom sizing at our Saadnayel flagship location.
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <a
                  href={`https://wa.me/96176320279?text=${encodeURIComponent(
                    `Hello Hamdar Men's Wear, I am interested in this look from your gallery: "${activeItem.title}". Is it available?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire About This Look</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
