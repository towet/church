import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MessageCircle, Facebook, Globe, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const contactInfo = {
    president: {
      name: "Bishop Nedenia P. Barber",
      phone: "762-260-0567",
      whatsapp: "(706) 394-2516",
      email: "ulyssebarber@comcast.net"
    },
    administrator: {
      name: "Evangelist Ann Macharia",
      email: "anmasha3@gmail.com",
      whatsapp: "+(254) 722114313"
    },
    social: {
      facebook: "The Way Bible College School of Leadership",
      website: "www.thewaybiblecollege.org",
      whatsappGroup: "The Way Bible College"
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold/30">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Contact
            <span className="text-gradient-gold block mt-2">The Way Bible College</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-emerald mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your theological education journey? Our team is here to help you 
            with admissions, course information, and any questions you may have.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* College President Contact */}
            <Card className="professional-shadow border-0 bg-card hover-lift animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2">
                    College President
                  </h3>
                  <p className="text-gold font-semibold">{contactInfo.president.name}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald" />
                    <span className="text-muted-foreground">Cell:</span>
                    <a href={`tel:${contactInfo.president.phone}`} 
                       className="font-medium text-primary hover:text-emerald">
                      {contactInfo.president.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-emerald" />
                    <span className="text-muted-foreground">WhatsApp:</span>
                    <a href={`https://wa.me/${contactInfo.president.whatsapp.replace(/[^\d]/g, '')}`} 
                       className="font-medium text-primary hover:text-emerald">
                      {contactInfo.president.whatsapp}
                    </a>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-emerald" />
                    <a href={`mailto:${contactInfo.president.email}`} 
                       className="font-medium text-primary hover:text-emerald text-sm">
                      {contactInfo.president.email}
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-gradient-primary text-white hover:shadow-elegant">
                    <Phone className="h-4 w-4 mr-2" />
                    Call President
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Administrator Contact */}
            <Card className="professional-shadow border-0 bg-card hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-emerald rounded-full mx-auto flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2">
                    College Administrator
                  </h3>
                  <p className="text-emerald font-semibold">{contactInfo.administrator.name}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-gold" />
                    <a href={`mailto:${contactInfo.administrator.email}`} 
                       className="font-medium text-primary hover:text-gold text-sm">
                      {contactInfo.administrator.email}
                    </a>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-gold" />
                    <span className="text-muted-foreground">WhatsApp:</span>
                    <a href={`https://wa.me/${contactInfo.administrator.whatsapp.replace(/[^\d]/g, '')}`} 
                       className="font-medium text-primary hover:text-gold">
                      {contactInfo.administrator.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-gradient-emerald text-white hover:shadow-emerald">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Administrator
                  </Button>
                  <Button variant="outline" className="w-full border-emerald/30 text-emerald hover:bg-emerald/10">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media & Online */}
            <Card className="professional-shadow border-0 bg-card hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2">
                    Online Presence
                  </h3>
                  <p className="text-gold font-semibold">Connect With Us</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Facebook className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Facebook Page:</p>
                      <p className="font-medium text-primary text-sm">{contactInfo.social.facebook}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Globe className="h-4 w-4 text-emerald mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Website:</p>
                      <a href={`https://${contactInfo.social.website}`} 
                         className="font-medium text-primary hover:text-emerald text-sm">
                        {contactInfo.social.website}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <MessageCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">WhatsApp Group:</p>
                      <p className="font-medium text-primary text-sm">{contactInfo.social.whatsappGroup}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-gradient-gold text-primary hover:shadow-gold">
                    <Globe className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook Page
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location & Additional Info */}
          <div className="mt-16">
            <Card className="professional-shadow border-0 bg-card animate-fade-in-up">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-primary rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold text-primary">
                      Global Online Education
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">USA & International</h4>
                    <p className="text-muted-foreground text-sm">
                      Online Zoom Classes accessible worldwide with flexible scheduling 
                      for different time zones.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gold mb-2">Established 2015</h4>
                    <p className="text-muted-foreground text-sm">
                      Nearly a decade of excellence in biblical and theological education 
                      with global reach and impact.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Accredited Programs</h4>
                    <p className="text-muted-foreground text-sm">
                      Certificate through Doctorate level programs designed for ministry 
                      preparation and spiritual growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};