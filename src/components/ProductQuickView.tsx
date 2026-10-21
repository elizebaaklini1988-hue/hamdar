import React, { useState } from 'react';
import { X, MessageSquare, Check, ShoppingBag, ShieldCheck, Scissors } from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/menswear';
import { SartorialArtwork } from './SartorialArtwork';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToInquiry: (product: Product, size?: string, color?: string) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToInquiry,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '');
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToInquiry(product, selectedSize, selectedColor);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  // Pre-fill WhatsApp message URL
  const whatsAppMessage = encodeURIComponent(
    `Hello Hamdar Men's Wear, I am inquiring about the ${product.name} (Size: ${selectedSize}, Color: ${selectedColor}). Is it available in your Saadnayel store or for delivery?`
  );
  const directWhatsAppUrl = `https://wa.me/96176320279?text=${whatsAppMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#0e1420] border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-black/40 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Visual Frame */}
        <div className={`md:w-1/2 p-8 bg-gradient-to-br ${product.imagePlaceholder.bgGradient} flex flex-col justify-between relative`}>
          <div className="text-xs font-serif uppercase tracking-widest text-[#d6af68]">
            {product.categoryLabel}
          </div>

          <div className="py-6 flex items-center justify-center">
            <SartorialArtwork
              type={product.imagePlaceholder.silhouetteType}
              accentColor={product.imagePlaceholder.accentColor}
              className="h-64 w-full"
            />
          </div>

          <div className="text-center pt-2">
            <span className="text-xs text-slate-400">{product.imagePlaceholder.subtitle}</span>
          </div>
        </div>

        {/* Right: Product Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-[#d6af68]">
                {product.badge || 'Hamdar Exclusive'}
              </span>
              <span className="text-2xl font-serif font-bold text-white tabular-nums">
                ${product.priceUSD}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              {product.name}
            </h2>

            {product.arabicName && (
              <p className="text-sm font-serif text-slate-400 mb-4">
                {product.arabicName}
              </p>
            )}

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 mb-6">
              <div>
                <span className="text-slate-500 block mb-0.5">Fabric Composition</span>
                <span className="font-medium text-white">{product.fabric}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Silhouette & Fit</span>
                <span className="font-medium text-white">{product.fit}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Select Sizing (EU)
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${
                      selectedSize === size
                        ? 'bg-[#d6af68] text-black border-[#d6af68] font-bold'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Available Shades
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-xs rounded border transition-all ${
                      selectedColor === color
                        ? 'bg-white/20 text-white border-[#d6af68]'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAdd}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Added to List</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#d6af68]" />
                    <span>Save to Inquiry</span>
                  </>
                )}
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5 text-[#d6af68]" />
                In-store fitting in Saadnayel
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d6af68]" />
                Cash on delivery across Lebanon
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
