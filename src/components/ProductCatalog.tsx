import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { ProductCategory, Product } from '../types';
import { PRODUCTS } from '../data/menswear';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  onQuickView: (product: Product) => void;
  onAddToInquiry: (product: Product) => void;
  inquiryItemIds: string[];
}

const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: 'all', label: 'All Collections' },
  { id: 'suits', label: 'Suits & Tuxedos' },
  { id: 'blazers', label: 'Blazers & Jackets' },
  { id: 'casual', label: 'Smart Casual' },
  { id: 'pants', label: 'Pants & Chinos' },
  { id: 'shoes-accessories', label: 'Footwear & Accessories' },
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onQuickView,
  onAddToInquiry,
  inquiryItemIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.arabicName && product.arabicName.includes(searchQuery));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      return 0; // featured default order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#0b0f17] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#d6af68] font-medium mb-2">
              Hamdar Boutique Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Curated Sartorial Collections
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Precision Italian tailored suits, luxury summer linens, Egyptian cotton essentials, and handcrafted footwear ready for your wardrobe.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search suits, linen, shoes..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#101622] text-white border border-white/10 rounded-lg placeholder-slate-500 focus:outline-none focus:border-[#d6af68] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar & Sorting (Interactive segmented buttons) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#d6af68] text-black font-semibold shadow-sm'
                    : 'bg-[#101622] text-slate-300 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 self-end lg:self-center shrink-0 text-xs text-slate-400">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#101622] text-white text-xs border border-white/10 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#d6af68]"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Product Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToInquiry={onAddToInquiry}
                isInInquiryList={inquiryItemIds.includes(product.id)}
              />
            ))}
          </div>
        ) : (
          /* Clean Empty State */
          <div className="py-20 text-center bg-[#101622]/40 rounded-xl border border-white/10 p-8 max-w-lg mx-auto">
            <p className="text-base font-serif text-white mb-2">No items found</p>
            <p className="text-xs text-slate-400 mb-6">
              We couldn't find any products matching your search term "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-[#d6af68] rounded-md hover:bg-[#c59b4e] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
