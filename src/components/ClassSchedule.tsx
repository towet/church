import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Globe, Users, BookOpen, GraduationCap } from 'lucide-react';

export const ClassSchedule = () => {
  const fallClasses = [
    {
      id: 1,
      title: "Apologetics for an Ever-Changing Culture",
      type: "1st Class",
      dates: ["September 6th", "13th", "20th", "27th", "October 4th", "11th", "18th"],
      usaTime: "Saturday 10:00AM - 12:15PM USA Eastern Time",
      instructors: ["Dr. Nedenia P. Barber", "Pastor Simon Macharia"],
      internationalTimes: [
        { region: "Liberia Africa", time: "2:00PM - 4:15PM" },
        { region: "Malawi Africa", time: "4:00PM - 6:15PM" },
        { region: "Uganda/Kenya", time: "5:00PM - 7:15PM" }
      ]
    },
    {
      id: 2,
      title: "Future Focus Church: Engaging the Next Generation",
      type: "2nd Class",
      dates: ["October 25th", "November 1st", "8th", "15th", "22nd", "29th", "December 6th"],
      usaTime: "Saturday 10:00AM - 12:15PM USA Eastern Time",
      instructors: [
        "Teacher Tamara Green, M.S.",
        "Minister Peter Maima, M.S.",
        "Pastor Simon Macharia, M.S.",
        "Dr. Bobby Jennings Sr, PhD"
      ],
      internationalTimes: [
        { region: "Liberia Africa", time: "2:00PM - 4:15PM" },
        { region: "Malawi Africa", time: "4:00PM - 6:15PM" },
        { region: "Uganda/Kenya", time: "5:00PM - 7:15PM" }
      ]
    }
  ];

  const chaplaincy = {
    title: "Chaplaincy Certification Program",
    topic: "Foundations of Chaplaincy You Need to Know",
    schedule: "1st & 3rd Fridays Each Month",
    usaTime: "Friday 12:00PM - 2:00PM USA Eastern Time",
    instructors: [
      "Presiding Bishop Nedenia P. Barber, B.S., M.Div., D.Ed. (Apprentice)",
      "Pastor Simon Macharia, M.S.",
      "Pastor Philip Zantoe, B.S."
    ],
    internationalTimes: [
      { region: "Liberia", time: "Friday 4:00PM - 6:00PM" },
      { region: "Malawi", time: "Friday 6:00PM - 8:00PM" },
      { region: "Kenya/Uganda", time: "Friday 7:00PM - 9:00PM" }
    ]
  };

  const semesterSchedule = [
    { season: "Fall", months: "September - December", status: "Current" },
    { season: "Winter", months: "January - March", status: "Upcoming" },
    { season: "Spring", months: "April - June", status: "Future" },
    { season: "Summer", months: "July - August", status: "Future" }
  ];

  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-emerald border-emerald/30">
            Academic Calendar
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Class Schedule &
            <span className="text-gradient-emerald block mt-2">Academic Calendar</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our online Zoom classes from anywhere in the world. Classes are scheduled 
            to accommodate students across different time zones.
          </p>
        </div>

        {/* Fall Semester Classes */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
              Fall Semester Classes
            </h3>
            <Badge variant="secondary" className="text-emerald bg-emerald/10 border-emerald/30 font-semibold">
              Currently Enrolling
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {fallClasses.map((course) => (
              <Card key={course.id} className="professional-shadow border-0 bg-card animate-scale-in hover-lift">
                <CardHeader className="text-center pb-6 bg-gradient-emerald text-white rounded-t-lg">
                  <CardTitle className="flex items-center justify-center text-xl font-playfair">
                    <BookOpen className="h-5 w-5 mr-3" />
                    {course.type}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-playfair font-bold text-primary mb-2">
                      {course.title}
                    </h4>
                  </div>

                  {/* Instructors */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-primary mb-3 flex items-center">
                      <Users className="h-4 w-4 text-emerald mr-2" />
                      Instructors
                    </h5>
                    <div className="space-y-2">
                      {course.instructors.map((instructor, index) => (
                        <div key={index} className="bg-muted/50 p-2 rounded text-sm font-medium text-primary">
                          {instructor}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Class Dates */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-primary mb-3 flex items-center">
                      <Calendar className="h-4 w-4 text-emerald mr-2" />
                      Class Dates
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {course.dates.map((date, index) => (
                        <div key={index} className="bg-gold/10 border border-gold/20 p-2 rounded text-center">
                          <p className="text-xs font-medium text-primary">{date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Zones */}
                  <div className="grid gap-4">
                    {/* USA Time */}
                    <Card className="border border-gold/20 bg-gold/5">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Clock className="h-4 w-4 text-gold mr-2" />
                          <h6 className="font-semibold text-primary text-sm">USA Eastern Time</h6>
                        </div>
                        <p className="text-sm font-bold text-gold mb-1">Saturday</p>
                        <p className="text-lg font-bold text-primary">10:00AM - 12:15PM</p>
                      </CardContent>
                    </Card>

                    {/* International Times */}
                    <Card className="border border-emerald/20 bg-emerald/5">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <Globe className="h-4 w-4 text-emerald mr-2" />
                          <h6 className="font-semibold text-primary text-sm">International Times</h6>
                        </div>
                        <div className="space-y-2">
                          {course.internationalTimes.map((timeZone, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground font-medium">{timeZone.region}</span>
                              <span className="text-primary font-bold">{timeZone.time}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chaplaincy Certification Program */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="professional-shadow border-0 bg-card animate-fade-in-up">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-primary to-primary/80 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-center text-2xl font-playfair">
                <GraduationCap className="h-6 w-6 mr-3" />
                {chaplaincy.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-playfair font-bold text-primary mb-2">
                  {chaplaincy.topic}
                </h4>
                <Badge variant="secondary" className="text-primary bg-primary/10 border-primary/30 font-semibold">
                  {chaplaincy.schedule}
                </Badge>
              </div>

              {/* Instructors */}
              <div className="mb-8">
                <h5 className="font-semibold text-primary mb-4 flex items-center text-lg">
                  <Users className="h-5 w-5 text-emerald mr-2" />
                  Chaplaincy Class Instructors
                </h5>
                <div className="grid md:grid-cols-3 gap-4">
                  {chaplaincy.instructors.map((instructor, index) => (
                    <Card key={index} className="border border-emerald/20 bg-emerald/5 hover-lift transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <p className="text-sm font-semibold text-primary leading-relaxed">{instructor}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Time Zones */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* USA Time */}
                <Card className="border border-gold/20 bg-gold/5">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-gold mr-2" />
                      <h6 className="font-semibold text-primary">USA Eastern Time</h6>
                    </div>
                    <p className="text-lg font-bold text-gold mb-2">Friday</p>
                    <p className="text-2xl font-bold text-primary">12:00PM - 2:00PM</p>
                  </CardContent>
                </Card>

                {/* International Times */}
                <Card className="border border-emerald/20 bg-emerald/5">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="h-6 w-6 text-emerald mr-2" />
                      <h6 className="font-semibold text-primary">International Times</h6>
                    </div>
                    <div className="space-y-3">
                      {chaplaincy.internationalTimes.map((timeZone, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground font-medium">{timeZone.region}</span>
                          <span className="text-primary font-bold">{timeZone.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Semester Overview */}
        <div className="max-w-4xl mx-auto">
          <Card className="professional-shadow border-0 bg-card animate-fade-in-up">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center text-xl font-playfair text-primary">
                <Users className="h-5 w-5 text-gold mr-2" />
                Academic Year Schedule
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {semesterSchedule.map((semester, index) => (
                  <Card 
                    key={index} 
                    className={`border-2 transition-all duration-300 hover-lift ${
                      semester.status === 'Current' 
                        ? 'border-emerald bg-emerald/5' 
                        : 'border-border bg-muted/50'
                    }`}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="mb-2">
                        <Badge 
                          variant={semester.status === 'Current' ? 'default' : 'secondary'}
                          className={semester.status === 'Current' ? 'bg-emerald' : ''}
                        >
                          {semester.status}
                        </Badge>
                      </div>
                      <h4 className="font-playfair font-bold text-primary text-lg mb-1">
                        {semester.season}
                      </h4>
                      <p className="text-sm text-muted-foreground">{semester.months}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-primary">Class Format:</strong> All classes are conducted via Zoom, 
                    allowing global participation. Each session includes interactive lectures, Q&A periods, 
                    and practical application discussions. Recordings are available for students who cannot 
                    attend live sessions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};