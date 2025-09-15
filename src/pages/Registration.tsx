import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { RegistrationForm } from '@/components/RegistrationForm';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, UserPlus, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-background to-emerald/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(var(--gold-rgb),0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_75%,rgba(var(--emerald-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-gold border-gold/30 text-lg px-4 py-2">
              <UserPlus className="h-4 w-4 mr-2" />
              Student Registration
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-8 leading-tight">
              Begin Your
              <span className="text-gradient-gold block mt-2">Transformation Journey</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards your calling. Register today and join a community 
              of learners committed to excellence in biblical education and ministry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/programs">
                <Button size="lg" className="bg-gradient-gold text-primary font-bold px-8 py-4 text-lg hover:shadow-gold transition-all duration-300 hover:scale-105">
                  View Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/schedule">
                <Button size="lg" variant="outline" className="border-2 border-gold/20 hover:border-gold hover:bg-gold/5 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Class Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-16 right-16 opacity-20 animate-float">
          <UserPlus className="h-16 w-16 text-gold" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <CheckCircle className="h-14 w-14 text-emerald" />
        </div>
        <div className="absolute top-1/3 left-12 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="h-18 w-18 text-gold" />
        </div>
      </section>
      
      {/* Registration Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-emerald border-emerald/30">
              Why Register With Us?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Your Success is
              <span className="text-gradient-emerald block mt-2">Our Priority</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center p-6 rounded-lg bg-card professional-shadow hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary mb-4">Easy Application</h3>
              <p className="text-muted-foreground">
                Simple, streamlined registration process that gets you enrolled quickly 
                and efficiently in your chosen program.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card professional-shadow hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary mb-4">Personalized Support</h3>
              <p className="text-muted-foreground">
                Dedicated academic advisors help guide your educational journey 
                and ensure you achieve your ministry goals.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card professional-shadow hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary mb-4">Global Community</h3>
              <p className="text-muted-foreground">
                Join students from around the world in a supportive learning 
                environment that celebrates diversity and unity in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <RegistrationForm />
      
      {/* Next Steps Section */}
      <section className="py-20 bg-gradient-to-br from-gold/5 to-emerald/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-8">
              What Happens After Registration?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-playfair font-bold text-primary mb-3">Application Review</h3>
                <p className="text-muted-foreground">
                  Our admissions team reviews your application and contacts you within 48 hours 
                  with next steps and any additional requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-gold text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-playfair font-bold text-primary mb-3">Academic Planning</h3>
                <p className="text-muted-foreground">
                  Work with your academic advisor to select courses, understand requirements, 
                  and plan your academic journey.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-playfair font-bold text-primary mb-3">Start Learning</h3>
                <p className="text-muted-foreground">
                  Begin your classes with full access to our online platform, resources, 
                  and supportive learning community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Your Ministry Calling Awaits
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't wait to pursue your calling. Register today and take the first step 
              towards becoming the leader God has called you to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#registration-form">
                <Button size="lg" className="bg-gradient-gold text-primary font-bold px-8 py-4 hover:shadow-gold transition-all duration-300">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gold/30 hover:border-gold hover:bg-gold/5 px-8 py-4 font-semibold">
                  Have Questions?
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

export default Registration;