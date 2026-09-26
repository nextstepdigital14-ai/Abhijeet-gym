import React from 'react';
import { ArrowRight, MessageCircle, Flame, Shield, Award, Clock } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  const handleJoinNow = () => {
    const url = createWhatsAppUrl(
      "Hello Abhijeet Gym! I am ready to start my fitness journey. Please share your current membership offers and batch timings."
    );
    onOpenWhatsApp(url, "Hero CTA: Join Now Enquiry");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Gym Aesthetic & Overlay Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="Abhijeet Gym Training Floor"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Layered gradients for professional international gym depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080809] via-[#080809]/60 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left pt-8">
        <div className="max-w-3xl">
          {/* Athletic Category Tag / Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
            <span className="w-2 h-2 rounded-full bg-red-500 -ml-4 shrink-0" />
            <span>Kolhapur&apos;s Elite Strength &amp; Fitness Hub</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[1.05] mb-6">
            BUILD YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-300 drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
              STRONGER
            </span>{' '}
            SELF.
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-300 font-medium tracking-wide mb-8 max-w-2xl leading-relaxed">
            Train harder. Get stronger. Become your best.
          </p>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mb-10 leading-relaxed">
            Equipped with heavy Olympic barbells, high-tensile power cages, certified trainers, and an authentic lifting atmosphere across Mangalwar Peth and Apte Nagar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <button
              onClick={handleJoinNow}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-black text-base uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-0.5 active:translate-y-0 transition duration-300 flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition" />
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>

            <a
              href="#programs"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-base uppercase tracking-wider text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Programs</span>
            </a>
          </div>

          {/* Small Motivational Fitness Section */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <Flame className="w-5 h-5 text-red-500 shrink-0" />
              <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white">
                The Abhijeet Gym Code
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
              &ldquo;Motivation gets you started. Discipline keeps you going. No shortcuts, no excuses — just iron, sweat, and relentless progress every single day.&rdquo;
            </p>
          </div>
        </div>

        {/* Athletic Trust Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-display font-black text-2xl text-white">10+ Years</div>
              <div className="text-xs text-gray-400 font-medium">Fitness Legacy</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-display font-black text-2xl text-white">500+</div>
              <div className="text-xs text-gray-400 font-medium">Transformations</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-display font-black text-2xl text-white">2 Branches</div>
              <div className="text-xs text-gray-400 font-medium">In Kolhapur</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-display font-black text-2xl text-white">5:30 AM</div>
              <div className="text-xs text-gray-400 font-medium">Morning Early Birds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
