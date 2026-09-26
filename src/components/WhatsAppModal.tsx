import React from 'react';
import { MessageCircle, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUrl: string;
  enquirySubject?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  targetUrl,
  enquirySubject = "Gym Enquiry"
}) => {
  if (!isOpen) return null;

  const handleProceed = () => {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md p-6 bg-[#121318] border border-white/10 rounded-2xl shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-display">Continue to WhatsApp</h3>
            <p className="text-xs text-gray-400">Official Abhijeet Gym Desk: {GYM_CONFIG.displayPhone}</p>
          </div>
        </div>

        {/* Message Preview Box */}
        <div className="p-3.5 mb-4 bg-black/50 border border-white/5 rounded-xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            Enquiry Topic
          </div>
          <p className="text-sm text-gray-200 font-medium">{enquirySubject}</p>
        </div>

        {/* Instructional Note */}
        <div className="space-y-2 mb-6 text-xs text-gray-300 bg-white/[0.03] p-3 rounded-lg border border-white/5">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Your enquiry is pre-composed and ready to send.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Clicking below opens WhatsApp. Simply press <strong>&quot;Send&quot;</strong> in your chat to reach our team immediately.</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 text-sm font-semibold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition"
          >
            Cancel
          </button>
          <button
            onClick={handleProceed}
            className="flex-1 py-2.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition"
          >
            <span>Open WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
