import React, { useState } from 'react';
import { Sparkles, Trophy, X, ShieldAlert, ArrowRight, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, TRANSFORMATIONS_DATA } from '../config/gymConfig';
import type { GalleryItem } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface TransformationsProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenWhatsApp }) => {
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>('all');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<GalleryItem | null>(null);

  const galleryTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'equipment', label: 'Free Weights & Machines' },
    { id: 'facility', label: 'Cardio & Facility' },
    { id: 'training', label: 'Lifting Environment' },
  ];

  const filteredGallery = activeGalleryTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeGalleryTab);

  const handleStartTransformation = () => {
    const url = createWhatsAppUrl(
      "Hello Abhijeet Gym! I am inspired by your transformation results. I would like to consult with a trainer on my body transformation journey."
    );
    onOpenWhatsApp(url, "Transformation Consultation Enquiry");
  };

  return (
    <section id="transformations" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" /> Proven Transformations &amp; Facility
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            REAL WORK. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              MEASURABLE RESULTS.
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Witness the discipline of our members and take an inside look at the high-caliber machinery and training turf available across both Abhijeet Gym Kolhapur branches.
          </p>
        </div>

        {/* Transformation Showcase Cards */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                Transformation Highlights
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Structured progressive overload, balanced nutrition, and sheer consistency.
              </p>
            </div>

            <button
              onClick={handleStartTransformation}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSFORMATIONS_DATA.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-[#14151b] border border-white/10 p-6 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      Duration: {item.duration}
                    </span>
                  </div>

                  <h4 className="font-display font-black text-xl text-white uppercase mb-2">
                    {item.title}
                  </h4>
                  <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4">
                    Result: {item.achievement}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    {item.story}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="italic">Supervised by Abhijeet Gym Strength Coaches</span>
                  <button
                    onClick={handleStartTransformation}
                    className="text-red-400 font-bold hover:text-white flex items-center gap-1 transition"
                  >
                    <span>Enquire Similar Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Client Results Disclaimer */}
          <div className="mt-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 text-xs text-gray-400">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Authenticity Commitment:</strong> Demonstrative sample cards. Actual member before-and-after photos will only be published with explicit written member authorization.
            </span>
          </div>
        </div>

        {/* Facility & Equipment Gallery with Filters */}
        <div id="gallery" className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Gym Atmosphere
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                Facility &amp; Equipment Gallery
              </h3>
            </div>

            {/* Gallery Category Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
              {galleryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                    activeGalleryTab === tab.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryImage(item)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-red-500/40 shadow-lg"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-base text-white uppercase group-hover:text-red-400 transition">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                const url = createWhatsAppUrl(
                  "Hello Abhijeet Gym! I would like to visit the gym in person to inspect the machines and facilities. When is a good time?"
                );
                onOpenWhatsApp(url, "Facility Inspection Tour");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Book an In-Person Gym Tour on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#14151b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 rounded-full hover:bg-black transition"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedGalleryImage.imageUrl}
              alt={selectedGalleryImage.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6">
              <h3 className="font-display font-black text-xl text-white uppercase mb-1">
                {selectedGalleryImage.title}
              </h3>
              <p className="text-sm text-gray-300">
                {selectedGalleryImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
