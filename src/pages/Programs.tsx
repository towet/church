import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, GraduationCap, BookOpen, Star, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const schools = [
    {
      name: "School of Theology",
      description: "Comprehensive biblical studies and theological education",
      icon: BookOpen,
      color: "emerald",
      programs: ["Biblical Studies", "Systematic Theology", "Church History", "Hermeneutics"]
    },
    {
      name: "School of Ministry",
      description: "Practical ministry training and leadership development",
      icon: Users,
      color: "gold",
      programs: ["Pastoral Ministry", "Youth Ministry", "Worship Ministry", "Missions"]
    },
    {
      name: "School of Christian Counseling",
      description: "Biblical counseling and pastoral care programs",
      icon: Award,
      color: "primary",
      programs: ["Biblical Counseling", "Marriage & Family", "Addiction Recovery", "Grief Counseling"]
    }
  ];

  const degrees = [
    {
      level: "Certificate Programs",
      duration: "6-12 months",
      description: "Specialized training in specific ministry areas",
      icon: Star,
      color: "emerald"
    },
    {
      level: "Associate Degree",
      duration: "2 years",
      description: "Foundation in biblical studies and Christian ministry",
      icon: BookOpen,
      color: "gold"
    },
    {
      level: "Bachelor's Degree",
      duration: "4 years",
      description: "Comprehensive theological education and ministry preparation",
      icon: GraduationCap,
      color: "primary"
    },
    {
      level: "Master's Degree",
      duration: "2-3 years",
      description: "Advanced theological studies and specialized ministry focus",
      icon: Award,
      color: "emerald"
    },
    {
      level: "Doctoral Degree",
      duration: "3-5 years",
      description: "Highest level of theological scholarship and research",
      icon: Star,
      color: "gold"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-gold/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary-rgb),0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(var(--gold-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 text-lg px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" />
              Academic Programs
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-8 leading-tight">
              Transform Your
              <span className="text-gradient-gold block mt-2">Ministry Calling</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover comprehensive degree programs designed to equip you for effective 
              ministry and Christian leadership in today's world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-gold text-primary font-bold px-8 py-4 text-lg hover:shadow-gold transition-all duration-300 hover:scale-105">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/schedule">
                <Button size="lg" variant="outline" className="border-2 border-gold/20 hover:border-gold hover:bg-gold/5 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  View Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-16 left-16 opacity-20 animate-float">
          <GraduationCap className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <BookOpen className="h-14 w-14 text-gold" />
        </div>
        <div className="absolute top-1/3 right-12 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Award className="h-20 w-20 text-emerald" />
        </div>
      </section>
      
      {/* Schools Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-emerald border-emerald/30">
              Our Schools
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Academic Excellence in
              <span className="text-gradient-emerald block mt-2">Three Distinct Schools</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each school offers specialized programs designed to meet the unique needs 
              of students called to different areas of ministry and service.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {schools.map((school, index) => (
              <Card 
                key={index} 
                className="professional-shadow border-0 bg-card hover-lift transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 bg-gradient-${school.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <school.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-playfair font-bold text-primary">
                    {school.name}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">{school.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary mb-3">Featured Programs:</h4>
                    {school.programs.map((program, programIndex) => (
                      <div key={programIndex} className="flex items-center">
                        <div className={`w-2 h-2 bg-${school.color} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="text-muted-foreground">{program}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Degree Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-gold border-gold/30">
              Degree Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              From Certificate to
              <span className="text-gradient-gold block mt-2">Doctoral Studies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're beginning your theological journey or advancing your ministry expertise, 
              we have programs tailored to your educational and spiritual growth needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {degrees.map((degree, index) => (
              <Card 
                key={index} 
                className="professional-shadow border-0 bg-card hover-lift transition-all duration-300 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-${degree.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <degree.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-primary text-lg mb-2">
                    {degree.level}
                  </h3>
                  <Badge variant="secondary" className={`text-${degree.color} bg-${degree.color}/10 border-${degree.color}/30 mb-3`}>
                    {degree.duration}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {degree.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Why Choose Our Programs?
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-emerald/10 hover:shadow-emerald/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Global Access</h3>
                <p className="text-muted-foreground">
                  Study from anywhere in the world with our online Zoom classes 
                  scheduled for multiple time zones.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gold/10 hover:shadow-gold/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Accredited Excellence</h3>
                <p className="text-muted-foreground">
                  Receive quality education from accredited programs recognized 
                  for their academic rigor and spiritual depth.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from experienced ministry leaders and theologians 
                  committed to your spiritual and academic growth.
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
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our comprehensive programs can prepare you for effective 
              ministry and Christian leadership in your community and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="bg-gradient-gold text-primary font-bold px-8 py-4 hover:shadow-gold transition-all duration-300">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gold/30 hover:border-gold hover:bg-gold/5 px-8 py-4 font-semibold">
                  Get More Info
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

export default Programs;