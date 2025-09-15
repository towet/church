import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PresidentSection } from '@/components/PresidentSection';
import { StaffSection } from '@/components/StaffSection';
import { ClassSchedule } from '@/components/ClassSchedule';
import { RegistrationForm } from '@/components/RegistrationForm';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* President Section */}
      <PresidentSection />
      
      {/* Staff Section */}
      <StaffSection />
      
      {/* Class Schedule */}
      <ClassSchedule />
      
      {/* Registration Form */}
      <RegistrationForm />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
