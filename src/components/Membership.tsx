import React from 'react';
import { Check, MessageCircle, AlertCircle, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../config/gymConfig';
import type { MembershipPlan } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface MembershipProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenWhatsApp }) => {
  const handleChoosePlan = (plan: MembershipPlan) => {
    const url = createWhatsAppUrl(plan.whatsappMessage);
    onOpenWhatsApp(url, `Membership Plan Selection: ${plan.name}`);
  };

  return (
    <section id="membership" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Transparent &amp; Flexible Memberships
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            INVEST IN YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              STRENGTH &amp; LONGEVITY
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Select a membership duration tailored to your commitment level. Every plan includes full access to free weights, machine circuits, locker facilities, and experienced floor trainer supervision.
          </p>
        </div>

        {/* Clear Notice / Editable Placeholder Disclaimer Banner */}
        <div className="mb-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 max-w-3xl mx-auto flex items-start gap-3.5 text-left">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200/90 leading-relaxed">
            <strong className="text-amber-300 font-semibold block mb-0.5">
              Notice for Website Visitors &amp; Abhijeet Gym Administration:
            </strong>
            The figures and fees below represent <em>sample editable placeholders</em> structured by NextStep Digital. Official membership rates, seasonal registration discounts, and branch promotions are confirmed directly with the gym administration upon WhatsApp enquiry.
          </div>
        </div>

        {/* 4 Pricing Cards: Monthly, Quarterly, Half-Yearly, Annual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isFeatured = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1c1d27] to-[#121319] border-2 border-red-500 shadow-2xl shadow-red-600/20 -translate-y-2'
                    : 'bg-[#14151b] border border-white/10 hover:border-white/25 hover:-translate-y-1'
                }`}
              >
                {/* Popular or Savings Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg ${
                      isFeatured
                        ? 'bg-red-600 text-white shadow-red-600/40'
                        : 'bg-white/10 text-gray-200 border border-white/20'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Title & Duration */}
                <div className="mb-6 pt-2">
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <div className="text-xs text-red-400 font-semibold mt-1">
                    {plan.duration} Commitment
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-4xl text-white">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                    <span>{plan.billingPeriod}</span>
                    <span className="text-[10px] text-amber-400/90 font-mono">(Indicative)</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Included Features */}
                <div className="flex-1 space-y-3 mb-8">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Included Benefits
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                      <div className="w-4 h-4 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-red-500" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Choose Plan Button */}
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full py-3.5 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300 ${
                    isFeatured
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Choose Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-500" />
            <span>Zero Hidden Admission Charges</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-red-500" />
            <span>Dual-Branch Access Privilege</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span>Personalized Form Guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
};
