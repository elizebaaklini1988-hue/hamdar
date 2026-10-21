import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutSection } from './components/AboutSection';
import { GroomSuite } from './components/GroomSuite';
import { LookbookGallery } from './components/LookbookGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductQuickView } from './components/ProductQuickView';
import { InquiryDrawer } from './components/InquiryDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product, InquiryItem } from './types';

export default function App() {
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToInquiry = (product: Product, size?: string, color?: string) => {
    setInquiryItems((prev) => [
      ...prev,
      {
        product,
        selectedSize: size || product.sizes[0] || 'Standard',
        selectedColor: color || product.colors[0] || 'Default',
      },
    ]);
    showToast(`Added "${product.name}" to your inquiry bag`);
  };

  const handleRemoveInquiryItem = (index: number) => {
    setInquiryItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearInquiry = () => {
    setInquiryItems([]);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-[#d6af68] selection:text-black">
      
      {/* Top Navigation */}
      <Navbar
        inquiryCount={inquiryItems.length}
        onOpenInquiryDrawer={() => setIsInquiryDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Product Catalog */}
        <ProductCatalog
          onQuickView={(product) => setQuickViewProduct(product)}
          onAddToInquiry={(product) => handleAddToInquiry(product)}
          inquiryItemIds={inquiryItems.map((item) => item.product.id)}
        />

        {/* Groom & Wedding Ceremonial Suite */}
        <GroomSuite />

        {/* Tailoring & Heritage (About Us) */}
        <AboutSection />

        {/* Lookbook & Visual Gallery */}
        <LookbookGallery />

        {/* Showroom Visit, Google Maps & Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToInquiry={handleAddToInquiry}
        />
      )}

      {/* Inquiry Bag Slide-over Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        items={inquiryItems}
        onRemoveItem={handleRemoveInquiryItem}
        onClearAll={handleClearInquiry}
      />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Discrete Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#121927] border border-[#d6af68]/60 text-white text-xs px-4 py-2.5 rounded-lg shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#d6af68]" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
