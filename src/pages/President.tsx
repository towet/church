import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PresidentSection } from '@/components/PresidentSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Crown, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const President = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-background to-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--gold-rgb),0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-gold border-gold/30 text-lg px-4 py-2">
              <Crown className="h-4 w-4 mr-2" />
              College Leadership
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-8 leading-tight">
              Meet Our
              <span className="text-gradient-gold block mt-2">Founding President</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover the vision, passion, and dedication behind The Way Bible College's 
              transformative educational mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/about">
                <Button size="lg" className="bg-gradient-gold text-primary font-bold px-8 py-4 text-lg hover:shadow-gold transition-all duration-300 hover:scale-105">
                  Learn About Our College
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gold/20 hover:border-gold hover:bg-gold/5 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Contact Leadership
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-16 left-16 opacity-20 animate-float">
          <Heart className="h-12 w-12 text-gold" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute top-1/2 left-8 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
          <Crown className="h-20 w-20 text-gold" />
        </div>
      </section>
      
      {/* President Content */}
      <PresidentSection />
      
      {/* Inspirational Quote Section */}
      <section className="py-20 bg-gradient-to-br from-gold/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-playfair italic text-primary mb-8 leading-relaxed">
              "Education is the most powerful weapon which you can use to change the world, 
              and through Christ, we equip students to transform communities."
            </blockquote>
            <cite className="text-lg text-muted-foreground">— Dr. Nedenia P. Barber, Founding President</cite>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Experience Exceptional Leadership
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join a college where visionary leadership meets academic excellence, 
              and where your spiritual and educational growth is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-gold text-primary font-bold px-8 py-4 hover:shadow-gold transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/staff">
                <Button size="lg" variant="outline" className="border-2 border-gold/30 hover:border-gold hover:bg-gold/5 px-8 py-4 font-semibold">
                  Meet Our Staff
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

export default President;