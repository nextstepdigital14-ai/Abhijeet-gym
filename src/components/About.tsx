import React from 'react';
import { Dumbbell, Flame, ShieldCheck, Users, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface AboutProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsApp }) => {
  const handleScheduleVisit = () => {
    const url = createWhatsAppUrl(
      "Hello Abhijeet Gym! I would like to schedule a visit to your facility and see the equipment. Please share suitable timings."
    );
    onOpenWhatsApp(url, "Facility Tour / Visit Enquiry");
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-red-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-red-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Fitness Philosophy &amp; Legacy
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            MORE THAN A GYM. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              A TEMPLE OF DISCIPLINE.
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Founded in Kolhapur with an uncompromising passion for authentic strength, Abhijeet Gym was engineered to deliver raw, no-nonsense fitness transformations in a supportive and high-octane community.
          </p>
        </div>

        {/* Philosophy & Facility Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
              Forged For Lifters Who Demand Results
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              At Abhijeet Gym, we believe physical transformation is the ultimate catalyst for personal confidence and mental fortitude. Whether you are stepping beneath a barbell for the very first time or pulling a 200kg deadlift, our gym floor provides the equipment, knowledge, and peer motivation to exceed your limits.
            </p>

            {/* Key Gym Hallmarks */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200 font-medium">
                  <strong>Heavy Free-Weight Sanctuary:</strong> Multiple flat/incline benches, power racks, Olympic bars, and dumbbells up to heavy ranges.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200 font-medium">
                  <strong>Personalized Progression:</strong> Certified coaches who ensure strict biomechanical safety, form correction, and gradual load increment.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200 font-medium">
                  <strong>High Energy Brotherhood:</strong> Zero intimidation, positive athletic culture, and passionate fitness camaraderie.
                </span>
              </div>
            </div>

            {/* Branch Locations Callout */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mt-6 space-y-3">
              <div className="text-xs font-bold text-red-400 tracking-wider uppercase flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Two Strategic Locations Across Kolhapur
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <div className="font-bold text-white mb-1">1. Mangalwar Peth (Main)</div>
                  <p className="text-gray-400">Suvarna Plaza, Sangar Galli, Near Padmaraje Girls High School</p>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <div className="font-bold text-white mb-1">2. Apte Nagar Branch</div>
                  <p className="text-gray-400">Jetvan, Salokhe Nagar Road, Near Apte Nagar Panyachi Taaki</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleScheduleVisit}
                className="px-6 py-3 rounded-xl font-display font-bold text-sm text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 flex items-center gap-2 transition"
              >
                <span>Schedule a Free Facility Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Gallery Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                  alt="Strength Barbell Training"
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Olympic Free Weights</span>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80"
                  alt="Gym Cable & Machine Stations"
                  className="w-full h-44 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Plate Loaded Stations</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80"
                  alt="Cardio Deck"
                  className="w-full h-44 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Cardio Conditioning</span>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80"
                  alt="Gym Floor Atmosphere"
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Lifting Culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Abhijeet Gym */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider">
              The 4 Pillars of Abhijeet Gym
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Our core foundation that drives continuous athletic transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GYM_CONFIG.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.04] transition duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="font-display font-black text-lg text-white uppercase tracking-wide mb-2 group-hover:text-red-400 transition">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
