import React from 'react';
import { Eye, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { SartorialArtwork } from './SartorialArtwork';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToInquiry: (product: Product) => void;
  isInInquiryList?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToInquiry,
  isInInquiryList = false,
}) => {
  return (
    <div className="group relative flex flex-col bg-[#0e1420] border border-white/10 rounded-xl overflow-hidden hover:border-[#d6af68]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40">
      
      {/* Top Media Slot: 65-75% visual height */}
      <div className={`relative aspect-[4/3] bg-gradient-to-b ${product.imagePlaceholder.bgGradient} overflow-hidden p-6 flex items-center justify-center`}>
        
        {/* Subtle subtle badge tag if present (max 1 subtle tag, clean text) */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 text-[11px] font-medium tracking-wider uppercase text-[#d6af68] bg-[#0b0f17]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#d6af68]/30">
            {product.badge}
          </div>
        )}

        {/* Dynamic Vector Artwork */}
        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
          <SartorialArtwork
            type={product.imagePlaceholder.silhouetteType}
            accentColor={product.imagePlaceholder.accentColor}
            className="h-44 w-full"
          />
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-4">
          <button
            onClick={() => onQuickView(product)}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900/90 hover:bg-slate-800 rounded-md backdrop-blur-sm border border-white/20 transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>

      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-[#0e1420]">
        
        <div>
          {/* Category & Arabic subtext */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="uppercase tracking-wider font-medium text-[#d6af68]">
              {product.categoryLabel}
            </span>
            {product.arabicName && (
              <span className="text-[11px] font-serif text-slate-400 truncate max-w-[130px]">
                {product.arabicName}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-semibold text-white group-hover:text-[#d6af68] transition-colors cursor-pointer line-clamp-1 mb-1.5"
          >
            {product.name}
          </h3>

          {/* Fabric & Cut Highlights */}
          <p className="text-xs text-slate-400 line-clamp-1 mb-3">
            {product.fabric} · {product.fit}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
          <div>
            <span className="text-xs text-slate-400 block">USD</span>
            <span className="text-lg font-serif font-bold text-white tabular-nums">
              ${product.priceUSD}
            </span>
          </div>

          <button
            onClick={() => onAddToInquiry(product)}
            aria-label={isInInquiryList ? "In inquiry list" : "Add to inquiry list"}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              isInInquiryList
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600/40'
                : 'bg-white/5 hover:bg-[#d6af68] text-slate-200 hover:text-black border border-white/10 active:scale-95'
            }`}
          >
            {isInInquiryList ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Selected</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Inquire</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
