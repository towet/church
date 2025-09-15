import { useState } from 'react';
import { sendDirectEmail, type RegistrationData } from '@/lib/emailService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  FileText, 
  Calendar, 
  User, 
  Mail, 
  Smartphone, 
  Home, 
  Building, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Phone, 
  Facebook 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    facebookPage: '',
    cellNumber: '',
    whatsappNumber: '',
    address: '',
    churchAffiliation: '',
    ministryTitle: '',
    highSchoolDiploma: '',
    degrees: '',
    semesters: {
      fall: false,
      winter: false,
      spring: false,
      summer: false
    },
    programType: {
      degree: false,
      certificate: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.cellNumber || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Check if at least one semester is selected
    const hasSemester = Object.values(formData.semesters).some(Boolean);
    if (!hasSemester) {
      toast({
        title: "Program Selection Required",
        description: "Please select at least one semester.",
        variant: "destructive",
      });
      return;
    }

    // Check if at least one program type is selected
    const hasProgram = Object.values(formData.programType).some(Boolean);
    if (!hasProgram) {
      toast({
        title: "Program Type Required",
        description: "Please select degree program, certificate program, or both.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email with form data
      const emailSent = await sendDirectEmail(formData as RegistrationData);
      
      if (emailSent) {
        toast({
          title: "Registration Submitted!",
          description: "Your registration has been sent. We will contact you soon.",
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          gender: '',
          email: '',
          facebookPage: '',
          cellNumber: '',
          whatsappNumber: '',
          address: '',
          churchAffiliation: '',
          ministryTitle: '',
          highSchoolDiploma: '',
          degrees: '',
          semesters: {
            fall: false,
            winter: false,
            spring: false,
            summer: false,
          },
          programType: {
            degree: false,
            certificate: false,
          },
        });
      } else {
        toast({
          title: "Submission Error",
          description: "There was an issue sending your registration. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue sending your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (category: 'semesters' | 'programType', field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: checked
      }
    }));
  };

  return (
    <section id="registration" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold/30">
            Enrollment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Begin Your
            <span className="text-gradient-gold block mt-2">Educational Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-emerald mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete your registration to join our global community of learners. 
            Submit this form to our College Administrator for processing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-lg shadow-emerald-500/10">
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center text-2xl font-playfair text-primary">
                <FileText className="h-6 w-6 text-emerald mr-3" />
                Registration Form
              </CardTitle>
              <p className="text-muted-foreground">
                Please fill out all required fields to complete your enrollment
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Semester Selection */}
                <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <Calendar className="h-6 w-6 mr-3 text-blue-500 drop-shadow-lg" />
                    Program Details
                  </h3>
                  <div className="space-y-4">
                    <Label className="font-medium text-foreground">Registering For (Select All That Apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                      {Object.entries(formData.semesters).map(([semester, checked]) => (
                        <div key={semester} className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
                          <Checkbox
                            id={semester}
                            checked={checked}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('semesters', semester, checked as boolean)
                            }
                            className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                          />
                          <Label htmlFor={semester} className="capitalize font-medium cursor-pointer">
                            {semester}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Program Type */}
                <div className="space-y-4">
                    <Label className="font-medium text-foreground">Enrolling In (Select One or Both)</Label>
                    <div className="flex flex-wrap gap-6 pt-2">
                      <div className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
                        <Checkbox
                          id="degree"
                          checked={formData.programType.degree}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange('programType', 'degree', checked as boolean)
                          }
                          className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                        />
                        <Label htmlFor="degree" className="font-medium cursor-pointer">Degree Program</Label>
                      </div>
                      <div className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
                        <Checkbox
                          id="certificate"
                          checked={formData.programType.certificate}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange('programType', 'certificate', checked as boolean)
                          }
                          className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                        />
                        <Label htmlFor="certificate" className="font-medium cursor-pointer">Certificate Program</Label>
                      </div>
                    </div>
                  </div>

                {/* Personal Information */}
                <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                  <h3 className="text-lg font-semibold text-primary mb-6 flex items-center">
                    <User className="h-6 w-6 mr-3 text-purple-500 drop-shadow-lg" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium">Full Name (As on ID) *</Label>
                      <div className="relative flex items-center">
                        <User className="absolute left-3 h-5 w-5 text-blue-400" />
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full legal name"
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="font-medium">Gender *</Label>
                      <div className="flex gap-6 pt-2">
                        <div className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
                          <Checkbox
                            id="male"
                            checked={formData.gender === 'male'}
                            onCheckedChange={(checked) => 
                              handleInputChange('gender', checked ? 'male' : '')
                            }
                            className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                          />
                          <Label htmlFor="male" className="cursor-pointer">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
                          <Checkbox
                            id="female"
                            checked={formData.gender === 'female'}
                            onCheckedChange={(checked) => 
                              handleInputChange('gender', checked ? 'female' : '')
                            }
                            className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                          />
                          <Label htmlFor="female" className="cursor-pointer">Female</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                  <h3 className="text-lg font-semibold text-primary mb-6 flex items-center">
                    <Phone className="h-6 w-6 mr-3 text-green-500 drop-shadow-lg" />
                    Contact Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">Email Address *</Label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3 h-5 w-5 text-red-400" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="facebook" className="font-medium">Facebook Page for Messenger</Label>
                      <div className="relative flex items-center">
                        <Facebook className="absolute left-3 h-5 w-5 text-blue-500" />
                        <Input
                          id="facebook"
                          value={formData.facebookPage}
                          onChange={(e) => handleInputChange('facebookPage', e.target.value)}
                          placeholder="Your Facebook page name"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cell" className="font-medium">Cell Number *</Label>
                      <div className="relative flex items-center">
                        <Smartphone className="absolute left-3 h-5 w-5 text-green-400" />
                        <Input
                          id="cell"
                          value={formData.cellNumber}
                          onChange={(e) => handleInputChange('cellNumber', e.target.value)}
                          placeholder="Your cell phone number"
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="font-medium">WhatsApp Number</Label>
                      <div className="relative flex items-center">
                        <Smartphone className="absolute left-3 h-5 w-5 text-green-400" />
                        <Input
                          id="whatsapp"
                          value={formData.whatsappNumber}
                          onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                          placeholder="WhatsApp number (if different)"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="address" className="font-medium">Address (Include Country & State/City) *</Label>
                    <div className="relative flex items-center">
                      <Home className="absolute left-3 top-3 h-5 w-5 text-yellow-400" />
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Full address with country and state/city"
                        required
                        rows={3}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                  <h3 className="text-lg font-semibold text-primary mb-6 flex items-center">
                    <GraduationCap className="h-6 w-6 mr-3 text-orange-500 drop-shadow-lg" />
                    Professional & Educational Background
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="church" className="font-medium">Church Affiliation</Label>
                      <div className="relative flex items-center">
                        <Building className="absolute left-3 h-5 w-5 text-purple-400" />
                        <Input
                          id="church"
                          value={formData.churchAffiliation}
                          onChange={(e) => handleInputChange('churchAffiliation', e.target.value)}
                          placeholder="Your church or denomination"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ministry" className="font-medium">Ministry Title and Leadership Role</Label>
                      <div className="relative flex items-center">
                        <Briefcase className="absolute left-3 h-5 w-5 text-indigo-400" />
                        <Input
                          id="ministry"
                          value={formData.ministryTitle}
                          onChange={(e) => handleInputChange('ministryTitle', e.target.value)}
                          placeholder="Pastor, Minister, Evangelist, etc."
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <Label className="font-medium">High School Diploma</Label>
                    <div className="flex gap-6 pt-2">
                      <div className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
                        <Checkbox
                          id="diploma-yes"
                          checked={formData.highSchoolDiploma === 'yes'}
                          onCheckedChange={(checked) => 
                            handleInputChange('highSchoolDiploma', checked ? 'yes' : '')
                          }
                          className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                        />
                        <Label htmlFor="diploma-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
                        <Checkbox
                          id="diploma-no"
                          checked={formData.highSchoolDiploma === 'no'}
                          onCheckedChange={(checked) => 
                            handleInputChange('highSchoolDiploma', checked ? 'no' : '')
                          }
                          className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                        />
                        <Label htmlFor="diploma-no" className="cursor-pointer">No</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="degrees" className="font-medium">List Type of Degrees Completed</Label>
                    <div className="relative flex items-center">
                      <BookOpen className="absolute left-3 top-3 h-5 w-5 text-pink-400" />
                      <Textarea
                        id="degrees"
                        value={formData.degrees}
                        onChange={(e) => handleInputChange('degrees', e.target.value)}
                        placeholder="List any previous degrees or certifications you have earned"
                        rows={3}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-gold text-primary font-semibold py-3 text-lg hover:shadow-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className={`h-5 w-5 mr-2 ${isSubmitting ? 'animate-spin' : ''}`} />
                    {isSubmitting ? 'Sending...' : 'Submit Registration'}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    After submission, email or WhatsApp this form to College Administrator: 
                    <span className="font-medium text-emerald"> anmasha3@gmail.com</span> or 
                    <span className="font-medium text-emerald"> +(254)722114313</span>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};