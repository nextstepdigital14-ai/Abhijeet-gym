import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Membership } from './components/Membership';
import { Trainers } from './components/Trainers';
import { Transformations } from './components/Transformations';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';

export function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    url: string;
    subject: string;
  }>({
    isOpen: false,
    url: '',
    subject: '',
  });

  const handleOpenWhatsApp = (url: string, subject: string) => {
    setModalState({
      isOpen: true,
      url,
      subject,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#080809] text-gray-100 selection:bg-red-600 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Main Content Sections */}
      <main>
        {/* Hero / Home */}
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />

        {/* About Abhijeet Gym */}
        <About onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Fitness Programs */}
        <Programs onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Membership Plans */}
        <Membership onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Trainers & Coaches */}
        <Trainers onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Transformations & Facility Gallery */}
        <Transformations onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact & Branch Locations */}
        <ContactSection onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp onOpenWhatsApp={handleOpenWhatsApp} />

      {/* WhatsApp Click-to-Chat Instruction Modal */}
      <WhatsAppModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        targetUrl={modalState.url}
        enquirySubject={modalState.subject}
      />
    </div>
  );
}

export default App;
