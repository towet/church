import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StaffSection } from '@/components/StaffSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Staff = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 via-background to-gold/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(var(--emerald-rgb),0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(var(--gold-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-emerald border-emerald/30 text-lg px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Our Team
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-8 leading-tight">
              Exceptional Faculty &
              <span className="text-gradient-emerald block mt-2">Dedicated Staff</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Meet the passionate educators and ministry leaders who are committed to your 
              spiritual growth and academic excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/president">
                <Button size="lg" className="bg-gradient-emerald text-white font-bold px-8 py-4 text-lg hover:shadow-emerald transition-all duration-300 hover:scale-105">
                  Meet Our President
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-2 border-emerald/20 hover:border-emerald hover:bg-emerald/5 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 opacity-20 animate-float">
          <Sparkles className="h-14 w-14 text-emerald" />
        </div>
        <div className="absolute bottom-24 left-16 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Award className="h-18 w-18 text-gold" />
        </div>
        <div className="absolute top-1/3 right-8 opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>
          <Users className="h-16 w-16 text-emerald" />
        </div>
      </section>
      
      {/* Staff Content */}
      <StaffSection />
      
      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-emerald/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-emerald/10 hover:shadow-emerald/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for academic and spiritual excellence in everything we do, 
                  ensuring our students receive the highest quality education.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gold/10 hover:shadow-gold/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive learning community where students, faculty, 
                  and staff grow together in faith and knowledge.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace innovative teaching methods and technology to deliver 
                  engaging and effective theological education globally.
                </p>
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
              Learn From the Best
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join a college where experienced faculty and dedicated staff are committed 
              to your success and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-emerald text-white font-bold px-8 py-4 hover:shadow-emerald transition-all duration-300">
                  Apply Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-emerald/30 hover:border-emerald hover:bg-emerald/5 px-8 py-4 font-semibold">
                  Contact Us
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

export default Staff;