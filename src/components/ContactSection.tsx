import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/menswear';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceInterest: 'suit-fitting',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Hamdar Men's Wear,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterest: ${formData.serviceInterest}\nMessage: ${formData.notes || 'Inquiring about store visit / sizing'}`
    );
    window.open(`https://wa.me/96176320279?text=${text}`, '_blank');
  };

  return (
    <section id="visit-us" className="py-20 sm:py-28 bg-[#0b0f17] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#d6af68] font-medium mb-2">
            Showroom & Consultations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Visit Us in Saadnayel
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Located along the main Chtoura–Saadnayel highway. Step into our boutique for private fitting sessions or get in touch for nationwide Lebanon delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Business Information & Map (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="p-6 rounded-xl bg-[#101622] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-9 h-9 rounded-lg bg-white/5 text-[#d6af68] flex items-center justify-center mb-4 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Saadnayel Showroom</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  {BUSINESS_INFO.location.address}
                </p>
                <p className="text-[11px] text-slate-500">
                  Landmark: {BUSINESS_INFO.location.landmark}
                </p>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-xl bg-[#101622] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-9 h-9 rounded-lg bg-white/5 text-[#d6af68] flex items-center justify-center mb-4 border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Store Hours</h3>
                <div className="space-y-1 text-xs text-slate-300">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-slate-400">{h.days}:</span>
                      <span className="font-medium text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
                <span className="mt-3 inline-block text-[11px] text-emerald-400 font-medium">
                  Open 7 Days a Week
                </span>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-xl bg-[#101622] border border-white/10 hover:border-[#d6af68]/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">WhatsApp Direct</h3>
                <p className="text-xs text-slate-400 mb-3">
                  Instant sizing advice, fabric videos, and COD orders.
                </p>
                <a
                  href={BUSINESS_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#d6af68] hover:underline flex items-center gap-1.5"
                >
                  <span>Chat {BUSINESS_INFO.contact.whatsappDisplay}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-xl bg-[#101622] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-9 h-9 rounded-lg bg-white/5 text-[#d6af68] flex items-center justify-center mb-4 border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Direct Landline</h3>
                <p className="text-xs text-slate-400 mb-3">
                  Direct telephone line for showroom inquiries.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="text-xs font-semibold text-white hover:text-[#d6af68] transition-colors"
                >
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </div>

            </div>

            {/* Interactive Location Visual / Map Frame */}
            <div className="rounded-xl overflow-hidden bg-[#101622] border border-white/10 p-6 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-4 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Interactive Location Map</h4>
                  <p className="text-xs text-slate-400">
                    Main Chtoura - Saadnayel - Zahle Highway, Bekaa, Lebanon
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Saadnayel, Lebanon Hamdar Men's Wear")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Map embed visualizer */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-[#0a0e16] border border-white/5">
                <iframe
                  title="Hamdar Men's Wear Location Map"
                  src="https://maps.google.com/maps?q=Saadnayel%20Lebanon&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Official Social Links Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-xs text-slate-400 font-medium">Connect on Socials:</span>
              <a
                href={BUSINESS_INFO.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs text-white bg-[#1877F2]/20 hover:bg-[#1877F2] border border-[#1877F2]/40 rounded-md transition-colors flex items-center gap-2"
              >
                <span>Facebook Official Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs text-white bg-pink-500/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-pink-500/30 rounded-md transition-all flex items-center gap-2"
              >
                <span>Instagram: {BUSINESS_INFO.contact.instagramHandle}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Booking Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#101622] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              <div className="mb-6">
                <span className="text-xs font-serif uppercase tracking-widest text-[#d6af68]">
                  Direct Service Desk
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-1">
                  Request a Fitting or Nationwide Order
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below. Our team in Saadnayel will reply promptly to confirm availability and sizing.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white">Inquiry Received</h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                      Thank you, {formData.name}. Would you like to expedite your response via WhatsApp right now?
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp Now</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', serviceInterest: 'suit-fitting', notes: '' });
                      }}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Your Full Name <span className="text-[#d6af68]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Salim Khoury"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0b0f17] text-white border border-white/10 rounded-lg placeholder-slate-500 focus:outline-none focus:border-[#d6af68] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Phone Number / WhatsApp <span className="text-[#d6af68]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +961 70 123 456"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0b0f17] text-white border border-white/10 rounded-lg placeholder-slate-500 focus:outline-none focus:border-[#d6af68] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Service or Item of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0b0f17] text-white border border-white/10 rounded-lg focus:outline-none focus:border-[#d6af68] transition-colors"
                    >
                      <option value="suit-fitting">In-Store Suit Fitting (Saadnayel)</option>
                      <option value="wedding-groom">Wedding & Groom Package Consultation</option>
                      <option value="nationwide-order">Nationwide Delivery Order (Cash on Delivery)</option>
                      <option value="general-inquiry">General Question / Sizing Assistance</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Additional Notes or Size Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mention your estimated suit size, preferred color, or wedding date..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0b0f17] text-white border border-white/10 rounded-lg placeholder-slate-500 focus:outline-none focus:border-[#d6af68] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-[#d6af68] hover:bg-[#c59b4e] rounded-md transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Showroom Request</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    Or reach us directly on WhatsApp at <strong className="text-slate-200">+961 76 320 279</strong>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
