import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = createWhatsAppUrl(
      "Hello Abhijeet Gym! I would like to join the gym. Please share available membership plans, offers, and admission details."
    );
    onOpenWhatsApp(url, "New Membership Enquiry (Join Now)");
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-800 border border-red-500/40 shadow-lg shadow-red-600/30 group-hover:scale-105 transition duration-300">
              <Dumbbell className="w-6 h-6 text-white transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-white uppercase">
                  Abhijeet<span className="text-red-500 ml-1">Gym</span>
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-red-500" /> Kolhapur • Est. {GYM_CONFIG.establishedYear}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${GYM_CONFIG.displayPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition"
              title="Call Gym Desk"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{GYM_CONFIG.displayPhone}</span>
            </a>

            <button
              onClick={handleJoinClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Join Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleJoinClick}
              className="p-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-500 transition"
              title="Join via WhatsApp"
              aria-label="Join via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${GYM_CONFIG.displayPhone.replace(/\s+/g, '')}`}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 text-sm font-semibold text-gray-200 bg-white/5 border border-white/10 rounded-xl"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {GYM_CONFIG.displayPhone}</span>
            </a>

            <button
              onClick={handleJoinClick}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold text-white bg-red-600 hover:bg-red-500 rounded-xl shadow-lg shadow-red-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join Now via WhatsApp</span>
            </button>

            <div className="text-center text-xs text-gray-500 pt-1">
              Branches: Mangalwar Peth & Apte Nagar, Kolhapur
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
