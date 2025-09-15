import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Globe } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground}
          alt="Biblical Education Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            Equipping Leaders for
            <span className="text-gradient-gold block mt-2">
              Ministry Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            The Way Bible College offers comprehensive theological education through online Zoom classes. 
            From Associates to Doctorate degrees in Biblical Studies, Leadership, Evangelism, and Chaplaincy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">9+ Years</div>
              <div className="text-lg text-gray-300">Of Excellence</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">4 Schools</div>
              <div className="text-lg text-gray-300">Specialized Programs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">Global</div>
              <div className="text-lg text-gray-300">Online Community</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center mb-20 md:mb-32">
            <Button 
              size="lg" 
              className="bg-gradient-gold text-primary font-bold px-8 py-4 text-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};