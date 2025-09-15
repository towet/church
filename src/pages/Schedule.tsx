import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ClassSchedule } from '@/components/ClassSchedule';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 via-background to-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(var(--emerald-rgb),0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-emerald border-emerald/30 text-lg px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Academic Schedule
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-8 leading-tight">
              Class Schedule &
              <span className="text-gradient-emerald block mt-2">Academic Calendar</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Plan your educational journey with our comprehensive class schedule, 
              designed to accommodate students worldwide through online learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-emerald text-white font-bold px-8 py-4 text-lg hover:shadow-emerald transition-all duration-300 hover:scale-105">
                  Enroll Now
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
        <div className="absolute top-20 left-20 opacity-20 animate-float">
          <Calendar className="h-16 w-16 text-emerald" />
        </div>
        <div className="absolute bottom-24 right-16 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Clock className="h-14 w-14 text-primary" />
        </div>
        <div className="absolute top-1/3 right-12 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Globe className="h-18 w-18 text-emerald" />
        </div>
      </section>
      
      {/* Schedule Content */}
      <ClassSchedule />
      
      {/* Time Zone Support Section */}
      <section className="py-20 bg-gradient-to-br from-emerald/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Designed for Global Learning
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our schedule accommodates students across multiple continents, 
                ensuring everyone can participate in live classes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-emerald/10 hover:shadow-emerald/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Flexible Timing</h3>
                <p className="text-muted-foreground">
                  Classes scheduled to accommodate work and family commitments 
                  while maintaining consistent learning opportunities.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gold/10 hover:shadow-gold/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Global Reach</h3>
                <p className="text-muted-foreground">
                  Students from USA, Liberia, Malawi, Kenya, and Uganda 
                  learn together in our inclusive online environment.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Structured Learning</h3>
                <p className="text-muted-foreground">
                  Organized semester system with clear start dates, 
                  progress milestones, and completion timelines.
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
              Ready to Join Our Next Class?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't miss the opportunity to be part of our vibrant learning community. 
              Enrollment is open for upcoming semesters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-emerald text-white font-bold px-8 py-4 hover:shadow-emerald transition-all duration-300">
                  Register Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-emerald/30 hover:border-emerald hover:bg-emerald/5 px-8 py-4 font-semibold">
                  Ask Questions
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

export default Schedule;