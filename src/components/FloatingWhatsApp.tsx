import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Dumbbell, Shield, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenWhatsApp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickEnquiries = [
    {
      title: 'New Member Admission',
      desc: 'Check joining fees & batch availability',
      icon: <Dumbbell className="w-4 h-4 text-red-500" />,
      msg: 'Hello Abhijeet Gym! I would like to enquire about new member admission, current offers, and batch timings.'
    },
    {
      title: '1-on-1 Personal Training',
      desc: 'Connect with a certified transformation coach',
      icon: <Shield className="w-4 h-4 text-emerald-400" />,
      msg: 'Hello Abhijeet Gym! I am looking for 1-on-1 personal training guidance. Please share coach availability and fees.'
    },
    {
      title: 'Free Gym Floor Visit',
      desc: 'Schedule a visit to see our equipment',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      msg: 'Hello Abhijeet Gym! I would like to visit the gym today to inspect the equipment and training atmosphere.'
    }
  ];

  const handleSelectEnquiry = (msg: string, title: string) => {
    const url = createWhatsAppUrl(msg);
    onOpenWhatsApp(url, `Floating Quick Enquiry: ${title}`);
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    const url = createWhatsAppUrl(
      'Hello Abhijeet Gym! I have a question regarding your fitness facilities and memberships.'
    );
    onOpenWhatsApp(url, 'General Floating Chat');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#14151b] border border-white/10 shadow-2xl p-5 text-left animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#14151b] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display">Abhijeet Gym Support</h4>
                <p className="text-[11px] text-emerald-400 font-medium">Online • Mon-Sat (5:30 AM - 9:30 PM)</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition"
              aria-label="Close chat prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 mb-4 leading-relaxed">
            Welcome to Abhijeet Gym Kolhapur. Choose a quick topic below to connect directly with the gym management on WhatsApp:
          </p>

          {/* Quick Action Buttons */}
          <div className="space-y-2 mb-4">
            {quickEnquiries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectEnquiry(q.msg, q.title)}
                className="w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-emerald-500/40 text-left transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-black/40 shrink-0">
                    {q.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition">
                      {q.title}
                    </div>
                    <div className="text-[10px] text-gray-400">{q.desc}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition shrink-0" />
              </button>
            ))}
          </div>

          {/* Direct Custom Chat */}
          <button
            onClick={handleDirectChat}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open Custom WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="relative group">
        {/* Pulse radar wave */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Chat with Abhijeet Gym on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-white/10" />
          )}

          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-600 border-2 border-[#080809] flex items-center justify-center text-[9px] font-black text-white">
              1
            </span>
          )}
        </button>

        {/* Hover Tooltip on desktop */}
        {!isOpen && (
          <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-black/90 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition pointer-events-none">
            Enquire on WhatsApp
          </div>
        )}
      </div>
    </div>
  );
};
