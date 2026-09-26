import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight, Sparkles } from 'lucide-react';
import { FITNESS_PROGRAMS } from '../config/gymConfig';
import type { ProgramItem } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface ProgramsProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenWhatsApp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength', label: 'Strength & Iron' },
    { id: 'fat-loss', label: 'Fat Loss & HIIT' },
    { id: 'personal-training', label: '1-on-1 Coaching' },
    { id: 'beginner', label: 'Beginner Friendly' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? FITNESS_PROGRAMS
    : FITNESS_PROGRAMS.filter(p => p.category === selectedCategory || (selectedCategory === 'strength' && p.category === 'transformation'));

  const handleEnquire = (program: ProgramItem) => {
    const url = createWhatsAppUrl(program.whatsappMessage);
    onOpenWhatsApp(url, `Program Enquiry: ${program.title}`);
  };

  return (
    <section id="programs" className="py-24 bg-[#080809] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Tailored Workout Disciplines
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              PROVEN FITNESS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                PROGRAMS &amp; DISCIPLINES
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              Whether you aim to strip fat, pack on dense muscle, or gain peak endurance, our structured training programs are backed by expert supervision and progressive overload.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  selectedCategory === tab.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Core Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="group relative flex flex-col rounded-2xl bg-[#14151b] border border-white/10 hover:border-red-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Program Image with Dark Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14151b] via-[#14151b]/40 to-transparent" />

                {/* Badge if available */}
                {program.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-[11px] font-bold text-white tracking-wider uppercase shadow-md">
                    {program.badge}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                    {program.tagline}
                  </div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wide mb-3 group-hover:text-red-400 transition">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Program Features */}
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {program.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquiry Action Button */}
                <button
                  onClick={() => handleEnquire(program)}
                  className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-500/50 shadow-md group-hover:shadow-red-600/20 flex items-center justify-center gap-2 transition duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white transition" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-gray-400 max-w-2xl mx-auto">
          Need guidance on which program matches your body structure and fitness targets? Our trainers evaluate your baseline strength upon joining.
        </div>
      </div>
    </section>
  );
};
