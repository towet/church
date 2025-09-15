import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Target, Heart, Globe2 } from 'lucide-react';

export const AboutSection = () => {
  const schools = [
    "School of Leadership",
    "School of Evangelism", 
    "School of Biblical Studies",
    "School of Chaplaincy"
  ];

  const degrees = [
    "Certificate Programs",
    "Associate Degree",
    "Bachelor's Degree", 
    "Master's Degree",
    "Doctorate Degree"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-emerald border-emerald/30">
            About The Way Bible College
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Transforming Lives Through 
            <span className="text-gradient-emerald block mt-2">Biblical Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>

        {/* History & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-right">
            <Card className="h-full professional-shadow border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-emerald rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-primary">Our History</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Way Bible College started in 2015 as The Way Bible Institute and evolved into 
                  The Way Bible College in 2018, founded by College President Bishop Nedenia P. Barber.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are a College of Higher Education designed to teach and facilitate student learning 
                  through in-depth Biblical Studies, theological truths, academic research, and innovative 
                  technology including YouTube video clips as teaching tools.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <Card className="h-full professional-shadow border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-gold rounded-full mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-primary">Mission & Vision</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">Mission</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To academically, biblically, and theologically educate leaders in ministry or those 
                      who feel called to ministry. We cater to seasoned spiritual leaders, believers, and 
                      lifelong learners through our online classroom setting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-2">Vision</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To equip, empower, and employ individuals for the work of ministry, facilitating 
                      leaders to become lifelong learners.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Schools & Degrees - Enhanced Design */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Our Schools */}
          <div className="animate-scale-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-emerald rounded-2xl mb-4 shadow-emerald">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-primary mb-2">Our Schools</h3>
              <div className="w-16 h-1 bg-gradient-emerald mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {schools.map((school, index) => (
                <div key={index} 
                     className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-card to-card-elegant/5 border border-emerald/10 p-6 hover-lift transition-all duration-500 hover:shadow-emerald hover:border-emerald/30"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute inset-0 bg-gradient-emerald opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-playfair font-semibold text-primary group-hover:text-emerald transition-colors duration-300">
                        {school}
                      </h4>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-emerald transition-all duration-500 mt-1"></div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Degree Programs */}
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-gold rounded-2xl mb-4 shadow-gold">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-primary mb-2">Degree Programs</h3>
              <div className="w-16 h-1 bg-gradient-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {degrees.map((degree, index) => (
                <div key={index} 
                     className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-card to-card-elegant/5 border border-gold/10 p-6 hover-lift transition-all duration-500 hover:shadow-gold hover:border-gold/30"
                     style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-playfair font-semibold text-primary group-hover:text-gold-dark transition-colors duration-300">
                        {degree}
                      </h4>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-gold transition-all duration-500 mt-1"></div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};