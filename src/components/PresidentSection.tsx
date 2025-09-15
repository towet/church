import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, MapPin, Calendar, Church } from 'lucide-react';
import bishopImage from '@/assets/HEADSHOT BISHOP NEDENIA P BARBER.jpeg';

export const PresidentSection = () => {
  return (
    <section id="president" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold/30">
            College Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Meet Our 
            <span className="text-gradient-gold block mt-2">Founding President</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-emerald mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="professional-shadow border-0 bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* President Photo */}
                <div className="lg:col-span-2 bg-gradient-primary p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <img 
                        src={bishopImage} 
                        alt="Bishop Nedenia P. Barber" 
                        className="w-full h-full object-cover rounded-full border-4 border-gold/30 shadow-2xl"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">
                      Bishop Nedenia P. Barber
                    </h3>
                    <div className="space-y-1 text-gold-light">
                      <p className="font-semibold">M.DIV., D.Ed. (Apprentice)</p>
                      <p className="text-sm">Founder & President</p>
                      <p className="text-sm">Curriculum Developer</p>
                    </div>
                  </div>
                </div>

                {/* Biography Content */}
                <div className="lg:col-span-3 p-8">
                  <div className="space-y-6">
                    {/* Introduction */}
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-primary mb-3 flex items-center">
                        <Award className="h-5 w-5 text-emerald mr-2" />
                        Leadership Excellence
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Nedenia P. Barber was born in Augusta, Georgia to the late Deacon Elliott and 
                        Missionary Louise Parker. She gave her life to Christ at age 10 and accepted 
                        her call to preach at age 23 while serving active-duty military in the United States Air Force.
                      </p>
                    </div>

                    {/* Ministry Experience */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="font-semibold text-emerald flex items-center">
                          <Church className="h-4 w-4 mr-2" />
                          Ministry Experience
                        </h5>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• 42 years in Ministry</li>
                          <li>• 20 years as United Methodist Itinerant Pastor</li>
                          <li>• Founded The Way Church International (2013)</li>
                          <li>• Executive Director of Prayer, Light of the World</li>
                          <li>• Senior Clinical Chaplain III (Retired)</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h5 className="font-semibold text-gold flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Global Ministry
                        </h5>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• South Korea & West Germany</li>
                          <li>• Kenya, Liberia, Nigeria, Malawi (Africa)</li>
                          <li>• Jamaica & Grand Cayman Island</li>
                          <li>• Churches planted in multiple nations</li>
                          <li>• Partnership with global leaders</li>
                        </ul>
                      </div>
                    </div>

                    {/* Education & Credentials */}
                    <div>
                      <h5 className="font-semibold text-primary mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Educational Excellence
                      </h5>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="font-medium text-primary">Doctor of Education</p>
                          <p className="text-sm text-muted-foreground">Grand Canyon University</p>
                          <p className="text-xs text-emerald">Higher Education Leadership</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="font-medium text-primary">Master of Divinity</p>
                          <p className="text-sm text-muted-foreground">Erskine Theological Seminary</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="font-medium text-primary">Bachelor of Science</p>
                          <p className="text-sm text-muted-foreground">Voorhees College</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="font-medium text-primary">Associate of Arts</p>
                          <p className="text-sm text-muted-foreground">University of Maine</p>
                          <p className="text-xs text-gold">Business Concentration</p>
                        </div>
                      </div>
                    </div>

                    {/* Personal */}
                    <div className="border-t pt-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-medium text-primary">Personal Life:</span> Married to retired Bishop Ulysses Barber 
                        for 23 years. Together they have 5 adult children and 4 grandchildren. 
                        Served 4 years active duty in the United States Air Force with stations in Germany, 
                        Korea, and multiple US states.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};