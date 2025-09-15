import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-emerald/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(var(--primary-rgb),0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(var(--emerald-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 text-lg px-4 py-2">
              <MessageCircle className="h-4 w-4 mr-2" />
              Get In Touch
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-8 leading-tight">
              We're Here to
              <span className="text-gradient-emerald block mt-2">Help You Succeed</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Have questions about our programs, admissions, or need guidance on your 
              educational journey? Our dedicated team is ready to assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-primary text-white font-bold px-8 py-4 text-lg hover:shadow-primary transition-all duration-300 hover:scale-105">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/schedule">
                <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  View Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-16 opacity-20 animate-float">
          <MessageCircle className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute bottom-24 right-20 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Phone className="h-14 w-14 text-emerald" />
        </div>
        <div className="absolute top-1/2 right-8 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Mail className="h-18 w-18 text-primary" />
        </div>
      </section>
      
      {/* Quick Contact Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-emerald border-emerald/30">
              Multiple Ways to Connect
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Choose Your Preferred
              <span className="text-gradient-emerald block mt-2">Communication Method</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
            <div className="text-center p-6 rounded-lg bg-card professional-shadow hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak directly with our admissions team
              </p>
              <div className="space-y-2">
                <p className="text-primary font-semibold">762-260-0567</p>
                <p className="text-xs text-muted-foreground">Mon-Fri 9AM-5PM EST</p>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card professional-shadow hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">Email</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us detailed questions anytime
              </p>
              <div className="space-y-2">
                <p className="text-primary font-semibold text-sm">ulyssebarber@comcast.net</p>
                <p className="text-xs text-muted-foreground">24-48 hour response</p>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card professional-shadow hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Quick messages and instant responses
              </p>
              <div className="space-y-2">
                <p className="text-primary font-semibold">+254 721 14 3313</p>
                <p className="text-xs text-muted-foreground">Text or voice messages</p>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card professional-shadow hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-primary mb-3">Online</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Visit our website or social media
              </p>
              <div className="space-y-2">
                <p className="text-primary font-semibold text-sm">thewaybiblecollege.com</p>
                <p className="text-xs text-muted-foreground">Facebook Messenger available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <ContactSection />
      
      {/* Office Hours & Information */}
      <section className="py-20 bg-gradient-to-br from-emerald/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Administrative Information
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-emerald/10">
                <h3 className="text-xl font-playfair font-bold text-primary mb-6 flex items-center">
                  <Phone className="h-5 w-5 text-emerald mr-3" />
                  Office Hours & Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Admissions Office</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM EST</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Phone Support</h4>
                    <p className="text-muted-foreground">Available during office hours</p>
                    <p className="text-primary font-semibold">762-260-0567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Emergency Contact</h4>
                    <p className="text-muted-foreground">For urgent matters outside office hours</p>
                    <p className="text-primary font-semibold">WhatsApp: +254 721 14 3313</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-gold/10">
                <h3 className="text-xl font-playfair font-bold text-primary mb-6 flex items-center">
                  <MessageCircle className="h-5 w-5 text-gold mr-3" />
                  Key Contacts
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">College Administrator</h4>
                    <p className="text-muted-foreground">Evangelist Ann Macharia</p>
                    <p className="text-primary font-semibold">anmasha3@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">President & Founder</h4>
                    <p className="text-muted-foreground">Dr. Nedenia P. Barber</p>
                    <p className="text-primary font-semibold">ulyssebarber@comcast.net</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Social Media</h4>
                    <p className="text-muted-foreground">Facebook Messenger Pages:</p>
                    <p className="text-primary font-semibold text-sm">"The Way Bible College", "Ann Macharia", "Nedenia Barber"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-emerald/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't hesitate to reach out. Our team is here to guide you through every step 
              of your educational journey and help you achieve your ministry goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-primary text-white font-bold px-8 py-4 hover:shadow-primary transition-all duration-300">
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-4 font-semibold">
                  Browse Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;