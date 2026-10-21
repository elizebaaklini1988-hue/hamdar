import React from 'react';
import { X, Trash2, MessageSquare, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { InquiryItem } from '../types';
import { BUSINESS_INFO } from '../data/menswear';
import { SartorialArtwork } from './SartorialArtwork';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onRemoveItem: (index: number) => void;
  onClearAll: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.product.priceUSD, 0);

  const generateWhatsAppOrderText = () => {
    let text = `Hello Hamdar Men's Wear,\nI would like to order / inquire about the following items:\n\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.name}\n`;
      text += `   - Size: ${item.selectedSize || 'Standard'}\n`;
      text += `   - Color: ${item.selectedColor || 'Default'}\n`;
      text += `   - Price: $${item.product.priceUSD}\n\n`;
    });
    text += `Estimated Total: $${subtotal} USD\n`;
    text += `Please let me know availability and delivery details to my address in Lebanon.`;
    return encodeURIComponent(text);
  };

  const whatsappOrderUrl = `https://wa.me/96176320279?text=${generateWhatsAppOrderText()}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e1420] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-serif font-bold text-white">Your Inquiry Bag</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {items.length} {items.length === 1 ? 'item' : 'items'} selected for reservation
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close inquiry drawer"
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-4">
                  <SartorialArtwork type="suit" className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-1">
                  Your inquiry list is empty
                </h3>
                <p className="text-xs text-slate-400 max-w-xs mb-6">
                  Browse our suits, blazers, and smart casual collections and click "Inquire" to assemble your list.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] rounded-md hover:bg-[#c59b4e] transition-colors"
                >
                  Browse Collections
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs text-slate-400">
                  <span>Selected Pieces</span>
                  <button
                    onClick={onClearAll}
                    className="hover:text-rose-400 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#121927] border border-white/10 flex gap-4 items-center justify-between"
                  >
                    <div className="w-14 h-14 rounded-lg bg-black/40 p-1 flex items-center justify-center shrink-0 border border-white/5">
                      <SartorialArtwork
                        type={item.product.imagePlaceholder.silhouetteType}
                        accentColor={item.product.imagePlaceholder.accentColor}
                        className="w-full h-full"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Size: {item.selectedSize || 'Std'} · {item.selectedColor || 'Default'}
                      </p>
                      <span className="text-xs font-serif font-bold text-[#d6af68] tabular-nums mt-1 block">
                        ${item.product.priceUSD} USD
                      </span>
                    </div>

                    <button
                      onClick={() => onRemoveItem(index)}
                      aria-label="Remove item"
                      className="p-2 text-slate-400 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer & Checkout via WhatsApp */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#0b0f17] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Total Estimate</span>
                  <span className="text-xs text-slate-500">Payable via COD or In-Store</span>
                </div>
                <span className="text-2xl font-serif font-bold text-white tabular-nums">
                  ${subtotal} USD
                </span>
              </div>

              <div className="space-y-2">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Order to WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#d6af68]" />
                  Delivery all across Lebanon
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d6af68]" />
                  Cash on Delivery (COD)
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
