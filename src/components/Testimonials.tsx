import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../config/gymConfig';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-[#080809] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Member Experiences
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            ATHLETIC VOICES &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              COMMUNITY STORIES
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            What our dedicated lifters and transformation seekers say about the environment, coaches, and workout energy at Abhijeet Gym.
          </p>
        </div>

        {/* Clear Notice / Editable Placeholder */}
        <div className="mb-10 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 max-w-xl mx-auto flex items-center gap-3 text-left">
          <Info className="w-4 h-4 text-red-400 shrink-0" />
          <div className="text-xs text-gray-300 leading-snug">
            <strong>Placeholder Review Section:</strong> Sample testimonial templates. Actual verified Google Map reviews and member quotes will replace these entries upon client launch.
          </div>
        </div>

        {/* Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#14151b] border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Background Quote Watermark */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-white/[0.03] pointer-events-none transform -rotate-12" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Left Column: Avatar & Rating */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 border-2 border-red-500/40 shadow-lg shadow-red-600/20 flex items-center justify-center text-2xl font-display font-black text-white mb-3">
                  {current.name.charAt(0)}
                </div>
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                  {current.program}
                </span>
              </div>

              {/* Right Column: Quote & Author */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-base sm:text-xl text-gray-200 font-medium italic leading-relaxed mb-6">
                  &ldquo;{current.review}&rdquo;
                </p>

                <div>
                  <h4 className="font-display font-black text-lg text-white uppercase">
                    {current.name}
                  </h4>
                  <div className="text-xs text-gray-400">
                    {current.role} • <span className="text-gray-300">{current.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-red-500' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
