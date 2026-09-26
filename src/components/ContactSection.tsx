import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Send,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { GYM_CONFIG, FITNESS_PROGRAMS } from '../config/gymConfig';
import { createWhatsAppUrl, formatContactFormWhatsAppMessage, type ContactFormData } from '../utils/whatsapp';

interface ContactSectionProps {
  onOpenWhatsApp: (url: string, subject: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    selectedProgram: FITNESS_PROGRAMS[0].title,
    preferredBranch: GYM_CONFIG.branches[0].name,
    notes: ''
  });

  const [errors, setErrors] = useState<{ fullName?: string; phoneNumber?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { fullName?: string; phoneNumber?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Please enter your phone or WhatsApp number';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatContactFormWhatsAppMessage(formData);
    const url = createWhatsAppUrl(message);

    setSubmitted(true);
    onOpenWhatsApp(url, `Contact Form: ${formData.selectedProgram} (${formData.fullName})`);

    // Reset feedback after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleDirectWhatsAppClick = () => {
    const url = createWhatsAppUrl(
      "Hello Abhijeet Gym! I have a question regarding gym membership, admission rules, and timings. Please assist me."
    );
    onOpenWhatsApp(url, "General WhatsApp Enquiry");
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0b0e] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Direct Reach &amp; Visit
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            VISIT ABHIJEET GYM &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              START YOUR TRANSFORMATION
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Have questions about fees, personal training, or workout slots? Send an enquiry directly to the gym owner&apos;s WhatsApp or drop by our Kolhapur training floors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Branch Locations, Operating Hours & Google Maps */}
          <div className="lg:col-span-6 space-y-8">
            {/* Quick Contact & WhatsApp Bar */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-red-950/30 via-[#14151b] to-[#14151b] border border-red-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  Fastest Response via WhatsApp
                </div>
                <div className="text-lg font-bold text-white font-display">
                  {GYM_CONFIG.displayPhone}
                </div>
                <div className="text-xs text-gray-400">Direct desk contact for enquiries &amp; admissions</div>
              </div>

              <button
                onClick={handleDirectWhatsAppClick}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Operating Hours Box */}
            <div className="p-6 rounded-3xl bg-[#14151b] border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white uppercase">
                    Verified Operating Hours
                  </h3>
                  <p className="text-xs text-gray-400">Regular training batch schedule</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-gray-400 font-medium">Monday to Saturday:</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {GYM_CONFIG.operatingHours.weekdays}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    Morning: {GYM_CONFIG.operatingHours.morningSlot} <br />
                    Evening: {GYM_CONFIG.operatingHours.eveningSlot}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-gray-400 font-medium">Sunday:</div>
                  <div className="text-sm font-bold text-red-400 mt-0.5">
                    {GYM_CONFIG.operatingHours.sunday}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    Rejuvenation &amp; rest day for maximum muscle recovery.
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Branches Cards */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Our 2 Kolhapur Branches</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {GYM_CONFIG.branches.map((branch, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#14151b] border border-white/10 hover:border-white/20 transition shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-base text-white">
                            {branch.name}
                          </h4>
                          {branch.isMainBranch && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-600/20 text-red-400 border border-red-500/30">
                              Main Facility
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-300 mt-1 font-medium">{branch.address}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{branch.landmark}</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {branch.city}, Maharashtra {branch.pincode}
                        </p>
                      </div>

                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-red-600 text-gray-300 hover:text-white border border-white/10 shrink-0 transition"
                        title="View on Google Maps"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-gray-400 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-red-500" /> {branch.phone}
                      </span>
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Directions on Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Google Maps View & Direct Map Button */}
            <div className="rounded-3xl bg-[#14151b] border border-white/10 overflow-hidden shadow-xl">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Google Maps Location</span>
                </div>
                <a
                  href={GYM_CONFIG.primaryMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-500 flex items-center gap-1.5 transition"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Maps iframe */}
              <div className="relative h-64 w-full bg-[#1a1b22]">
                <iframe
                  title="Abhijeet Gym Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5794326543166!2d74.220!3d16.695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc055b1d18c1333%3A0x51696fd1aca0de3b!2sAbhijeet%20Gym!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#14151b] border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  <Send className="w-4 h-4" />
                </div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                  Enquire via WhatsApp
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mb-8 leading-relaxed">
                Fill in your details below. We will generate a structured WhatsApp message and open your chat with Abhijeet Gym directly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-200 mb-0.5">Continuing to WhatsApp...</strong>
                    Please tap &ldquo;Send&rdquo; in your WhatsApp application to deliver your enquiry directly to the gym.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Rahul Patil"
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border text-white text-sm focus:outline-none transition ${
                      errors.fullName
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-white/10 focus:border-red-500'
                    }`}
                  />
                  {errors.fullName && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Mobile / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border text-white text-sm focus:outline-none transition ${
                      errors.phoneNumber
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-white/10 focus:border-red-500'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phoneNumber}</span>
                    </div>
                  )}
                </div>

                {/* Interested Program */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="program" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Interested Program
                    </label>
                    <select
                      id="program"
                      value={formData.selectedProgram}
                      onChange={(e) => setFormData({ ...formData, selectedProgram: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500"
                    >
                      {FITNESS_PROGRAMS.map((prog) => (
                        <option key={prog.id} value={prog.title} className="bg-[#14151b] text-white">
                          {prog.title}
                        </option>
                      ))}
                      <option value="Quarterly Plan (3 Months)" className="bg-[#14151b] text-white">
                        Quarterly Plan (3 Months)
                      </option>
                      <option value="Half-Yearly Plan (6 Months)" className="bg-[#14151b] text-white">
                        Half-Yearly Plan (6 Months)
                      </option>
                      <option value="Annual Plan (12 Months)" className="bg-[#14151b] text-white">
                        Annual Plan (12 Months)
                      </option>
                      <option value="General Enquiries" className="bg-[#14151b] text-white">
                        General Membership Query
                      </option>
                    </select>
                  </div>

                  {/* Preferred Branch */}
                  <div>
                    <label htmlFor="branch" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Preferred Branch
                    </label>
                    <select
                      id="branch"
                      value={formData.preferredBranch}
                      onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500"
                    >
                      {GYM_CONFIG.branches.map((b, idx) => (
                        <option key={idx} value={b.name} className="bg-[#14151b] text-white">
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Optional Note / Specific Questions
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Looking for early morning 6:00 AM slot or personal trainer availability..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>

                {/* Important WhatsApp Notice */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-gray-400 flex items-start gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>How this works:</strong> Clicking &ldquo;Send Enquiry on WhatsApp&rdquo; will open WhatsApp with your message formatted and ready. You simply need to hit <em>Send</em> to connect directly with the gym owner.
                  </span>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-display font-black text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 flex items-center justify-center gap-3 transition duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </form>

              {/* Social Media Links (Placeholders) */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <span className="text-xs text-gray-400 block mb-3 uppercase tracking-wider font-semibold">
                  Connect on Social Channels (Editable Placeholders)
                </span>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={GYM_CONFIG.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-red-600 text-gray-300 hover:text-white transition"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a
                    href={GYM_CONFIG.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-red-600 text-gray-300 hover:text-white transition"
                    title="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a
                    href={GYM_CONFIG.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-red-600 text-gray-300 hover:text-white transition"
                    title="YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a
                    href={GYM_CONFIG.primaryMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-red-600 text-gray-300 hover:text-white transition"
                    title="Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
