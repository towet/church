import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Phone, Mail, Globe, Facebook, Heart } from 'lucide-react';
import collegeLogo from '@/assets/college-logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'About Us', href: '#about' },
      { label: 'Academic Programs', href: '#programs' },
      { label: 'Faculty', href: '#staff' },
      { label: 'Registration', href: '#registration' }
    ],
    contact: [
      { label: 'College President', href: '#president' },
      { label: 'Administrator', href: '#contact' },
      { label: 'Class Schedule', href: '#schedule' },
      { label: 'Contact Info', href: '#contact' }
    ]
  };

  return (
    <footer className="bg-gradient-primary text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* College Info & Logo */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={collegeLogo} 
                  alt="The Way Bible College Logo" 
                  className="h-16 w-16 animate-float"
                />
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-1">
                    The Way Bible College
                  </h3>
                  <p className="text-gold-light">Established 2015</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Equipping leaders for ministry excellence through comprehensive biblical education. 
                We offer Associate to Doctorate degrees in Biblical Studies, Leadership, Evangelism, 
                and Chaplaincy via online Zoom classes worldwide.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <GraduationCap className="h-5 w-5 text-gold mr-3" />
                  <span>4 Schools • Certificate to Doctorate Programs</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="h-5 w-5 text-emerald-light mr-3" />
                  <span>Global Online Education • USA & International</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-playfair font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-playfair font-semibold text-white mb-6">
                Contact & Support
              </h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.contact.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-light transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 text-gold mr-3" />
                  <span className="text-sm">762-260-0567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 text-emerald-light mr-3" />
                  <span className="text-sm">anmasha3@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="h-4 w-4 text-gold mr-3" />
                  <span className="text-sm">thewaybiblecollege.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 inline-block">
              <div className="p-8">
                <h4 className="text-xl font-playfair font-bold text-white mb-3">
                  Ready to Begin Your Journey?
                </h4>
                <p className="text-gray-300 mb-6">
                  Join our global community of learners and ministry leaders
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-gold text-primary font-semibold hover:shadow-gold">
                    Apply Today
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm">
                  © {currentYear} The Way Bible College. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Founded by Bishop Nedenia P. Barber • Established 2015
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                  aria-label="Facebook Page"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-emerald-light transition-colors duration-300"
                  aria-label="Website"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <div className="flex items-center text-gray-400 text-xs">
                  <Heart className="h-3 w-3 text-red-400 mr-1" />
                  <span>Made with excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};