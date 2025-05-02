
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Get to know me better
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md animate-on-scroll">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary-600">My Story</h3>
              <p className="mb-4">
                A Full-stack developer driven by a passion for web designing and problem-solving. I love building beautiful, functional websites that deliver real value to users.
              </p>
              <p>
                My journey in technology has led me to explore various facets of development, from frontend design to backend implementation, always with an eye for creating exceptional user experiences.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md animate-on-scroll">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary-600">Education</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Calendar className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Bachelor's Degree</h4>
                    <p className="text-sm text-muted-foreground">2022 - 2026</p>
                    <p className="text-sm">Gayatri Vidya Parishad College of Engineering</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Calendar className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Intermediate Education</h4>
                    <p className="text-sm text-muted-foreground">2020 - 2022</p>
                    <p className="text-sm">Sri Chaitanya Junior College</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md animate-on-scroll">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary-600">Experience</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Calendar className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Internship</h4>
                    <p className="text-sm text-muted-foreground">Airport Authority of India (Vizag)</p>
                    <p className="text-sm">Gained exposure to communication, navigation, and surveillance systems like RADARs, DME, and DVOR</p>
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

export default About;
