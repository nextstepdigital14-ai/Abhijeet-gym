import React from 'react';
import { Dumbbell, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { GYM_CONFIG, FITNESS_PROGRAMS } from '../config/gymConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  const handleGeneralEnquiry = () => {
    const url = createWhatsAppUrl(
      "Hello Abhijeet Gym! I would like to enquire about membership, facilities, and visiting your Kolhapur branches."
    );
    onOpenWhatsApp(url, "Footer WhatsApp Enquiry");
  };

  return (
    <footer className="bg-[#060708] border-t border-white/10 text-gray-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 border border-red-500/40 shadow-lg shadow-red-600/30">
                <Dumbbell className="w-5 h-5 text-white transform -rotate-45" />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white uppercase tracking-wider">
                  Abhijeet<span className="text-red-500 ml-0.5">Gym</span>
                </span>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                  Kolhapur • Fitness &amp; Strength
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {GYM_CONFIG.shortDescription}
            </p>

            <div className="pt-2">
              <button
                onClick={handleGeneralEnquiry}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp: {GYM_CONFIG.displayPhone}</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About Gym</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition">Fitness Programs</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition">Membership Plans</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition">Trainers &amp; Team</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-white transition">Transformations</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">Facility Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Contact &amp; Location</a>
              </li>
            </ul>
          </div>

          {/* Programs List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Training Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              {FITNESS_PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <a href="#programs" className="hover:text-white transition flex items-center justify-between group">
                    <span>{prog.title}</span>
                    <span className="text-[10px] text-red-500 opacity-0 group-hover:opacity-100 transition">View</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolhapur Branch Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Kolhapur Facilities
            </h4>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> Mangalwar Peth (Main)
                </div>
                <p className="text-gray-400 text-[11px]">
                  Suvarna Plaza, Sangar Galli, Near Padmaraje Girls High School, Kolhapur 416012
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> Apte Nagar Branch
                </div>
                <p className="text-gray-400 text-[11px]">
                  Jetvan, Salokhe Nagar Road, Near Apte Nagar Panyachi Taaki, Kolhapur 416007
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Mon-Sat: 5:30 AM – 9:30 PM | Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Attribution & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Abhijeet Gym. All rights reserved. Registered in Kolhapur, Maharashtra.
          </div>

          {/* NextStep Digital Attribution Banner */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-gray-300">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>by</span>
            <span className="font-bold text-white tracking-wide">
              {GYM_CONFIG.agency.name}
            </span>
            <span className="text-[10px] text-red-400 font-semibold">• Digital Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
