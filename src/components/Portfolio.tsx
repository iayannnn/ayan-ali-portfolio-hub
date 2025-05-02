
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gesture Controlled Mouse",
    description: "A mouse operated purely through hand gestures, enabling users to control their computer without physical contact.",
    image: "/placeholder.svg",
    tags: ["Arduino", "Computer Vision", "Python"],
    github: "#",
  },
  {
    id: 2,
    title: "TERMInator",
    description: "A smart device using humidity and temperature sensors with Arduino IDE to detect termites and prevent wooden furniture damage.",
    image: "/placeholder.svg",
    tags: ["Arduino IDE", "IoT", "Sensors"],
    github: "#",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Here are a few projects I've worked on recently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-on-scroll">
              <div className="h-64 bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="gap-2">
                  <Github size={16} />
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
