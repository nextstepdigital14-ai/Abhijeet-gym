import React from 'react';
import { Award, MessageCircle, Info } from 'lucide-react';
import { TRAINERS_DATA } from '../config/gymConfig';
import type { Trainer } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface TrainersProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenWhatsApp }) => {
  const handleEnquireTrainer = (trainer: Trainer) => {
    const url = createWhatsAppUrl(
      `Hello Abhijeet Gym! I would like to enquire about personal training and workout guidance under your coaches (${trainer.role}). Please share details.`
    );
    onOpenWhatsApp(url, `Trainer Enquiry: ${trainer.role}`);
  };

  return (
    <section id="trainers" className="py-24 bg-[#080809] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Expert Coaching Staff
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            CERTIFIED COACHES &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              STRENGTH MENTORS
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our floor trainers and personal coaches prioritize biomechanical safety, form correction, and relentless progress to help you achieve your personal best without injury.
          </p>
        </div>

        {/* Clear Notice / Editable Placeholder */}
        <div className="mb-12 p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-2xl mx-auto flex items-start gap-3.5 text-left">
          <Info className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-xs text-gray-300 leading-relaxed">
            <strong className="text-white block font-semibold mb-0.5">
              Client Profile Integration Note:
            </strong>
            The coach cards below are structured as <em>editable templates</em>. The actual names, competitive accolades, and certified credentials of Abhijeet Gym&apos;s coaching team will be populated as supplied by the gym owner.
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer) => (
            <div
              key={trainer.id}
              className="group flex flex-col rounded-3xl bg-[#14151b] border border-white/10 hover:border-red-500/40 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.role}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14151b] via-[#14151b]/30 to-transparent" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-200">
                  {trainer.experience}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                    {trainer.specialty}
                  </span>
                  <h3 className="font-display font-black text-xl text-white uppercase">
                    {trainer.role}
                  </h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="space-y-1.5 mb-6 border-t border-white/5 pt-4">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-red-500" /> Key Specializations
                    </div>
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="text-xs text-gray-300 font-medium">
                        • {cert}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire CTA */}
                <button
                  onClick={() => handleEnquireTrainer(trainer)}
                  className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-500/50 flex items-center justify-center gap-2 transition duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white transition" />
                  <span>Enquire Personal Training</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
