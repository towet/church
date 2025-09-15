import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-emerald/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--emerald-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-emerald border-emerald/30 text-lg px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" />
              About Our College
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-8 leading-tight">
              Transforming Lives Through
              <span className="text-gradient-emerald block mt-2">Biblical Education</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Since 2015, The Way Bible College has been dedicated to providing quality theological education 
              that equips students for ministry and Christian leadership worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/programs">
                <Button size="lg" className="bg-gradient-gold text-primary font-bold px-8 py-4 text-lg hover:shadow-gold transition-all duration-300 hover:scale-105">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Award className="h-16 w-16 text-gold" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Users className="h-20 w-20 text-emerald" />
        </div>
      </section>
      
      {/* About Content */}
      <AboutSection />
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-emerald/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of learners and discover your calling in ministry and Christian leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-emerald text-white font-bold px-8 py-4 hover:shadow-emerald transition-all duration-300">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/schedule">
                <Button size="lg" variant="outline" className="border-2 border-emerald/30 hover:border-emerald hover:bg-emerald/5 px-8 py-4 font-semibold">
                  View Schedule
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

export default About;