import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap } from 'lucide-react';
import bishopImage from '@/assets/HEADSHOT BISHOP NEDENIA P BARBER.jpeg';
import tamaraImage from '@/assets/HEADSHOT TEACHER TAMARA GREEN.jpeg';
import peterImage from '@/assets/MINISTER PETER MAINA.jpeg';
import phillipImage from '@/assets/PASTOR PHILLIP ZANTOE.jpg';
import simonImage from '@/assets/PASTOR SIMON MACHARIA.jpeg';
import bobbyImage from '@/assets/UPDATE HEADSHOT DR BOBBY JENNINGS SR.jpeg';

export const StaffSection = () => {
  const instructors = [
    {
      name: "Bishop Nedenia P. Barber",
      title: "M.DIV., D.Ed. (Apprentice)",
      role: "Founder/President/Instructor",
      specialization: "Leadership & Biblical Studies",
      image: bishopImage
    },
    {
      name: "Minister Peter Maina Njoroge",
      title: "M.S. Degree",
      role: "Senior Instructor",
      specialization: "Theological Studies",
      image: peterImage
    },
    {
      name: "Dr. Bobby Jennings, Sr.",
      title: "PhD Degree",
      role: "Senior Faculty",
      specialization: "Biblical Research & Apologetics",
      image: bobbyImage
    },
    {
      name: "Pastor Simon Macharia",
      title: "M.S. Degree", 
      role: "Instructor",
      specialization: "Pastoral Studies",
      image: simonImage
    },
    {
      name: "Teacher Tamara Green",
      title: "M.S. Degree",
      role: "Academic Instructor",
      specialization: "Educational Methods",
      image: tamaraImage
    },
    {
      name: "Pastor Phillip Zantoe",
      title: "B.S. Degree",
      role: "Instructor",
      specialization: "Evangelism & Outreach",
      image: phillipImage
    }
  ];

  return (
    <section id="staff" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-emerald border-emerald/30">
            Our Faculty
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Meet Our Expert
            <span className="text-gradient-emerald block mt-2">Instructors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our distinguished faculty brings decades of experience in ministry, academic excellence, 
            and theological expertise to provide world-class biblical education.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card 
              key={index} 
              className="professional-shadow border-0 bg-card hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Profile Image */}
                <div className="mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover rounded-full border-3 border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent"></div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-playfair font-bold text-primary mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-gold font-semibold mb-2">{instructor.title}</p>
                  <Badge variant="secondary" className="text-xs">
                    {instructor.role}
                  </Badge>
                </div>

                {/* Specialization */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-center mb-2">
                    <GraduationCap className="h-4 w-4 text-emerald mr-2" />
                    <span className="text-sm font-medium text-emerald">Specialization</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{instructor.specialization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Faculty Excellence Note */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto professional-shadow border-0 bg-card animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-emerald rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary">Faculty Excellence</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our instructors combine academic credentials with real-world ministry experience, 
                ensuring students receive both theoretical knowledge and practical application. 
                Each faculty member is carefully selected for their expertise, spiritual maturity, 
                and commitment to educational excellence in biblical and theological studies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};