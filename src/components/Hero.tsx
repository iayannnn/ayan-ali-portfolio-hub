import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center relative pb-10 pt-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center animate-fade-in">
          <h2 className="text-xl font-medium text-primary-600 mb-4">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Munshi Faraz<br />
            <span className="text-primary-600">Ayan Ali</span>
          </h1>
          <p className="text-xl mb-8 max-w-lg text-muted-foreground">
            Full-Stack Developer | Problem Solver | Web Design Enthusiast
          </p>
          <div className="flex gap-4">
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}>
              Contact Me
            </Button>
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => {
        const element = document.getElementById('about');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }}>
          <ArrowDown className="h-6 w-6 text-primary-600" />
        </Button>
      </div>
    </section>;
};
export default Hero;