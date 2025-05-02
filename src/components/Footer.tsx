
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold mb-2">
              <span className="text-primary-300">Ayan</span> Ali
            </h2>
            <p className="text-sm text-muted">Full-stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary-300 hover:bg-transparent"
              asChild
            >
              <a href="https://github.com/iayannnn" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary-300 hover:bg-transparent"
              asChild
            >
              <a href="https://linkedin.com/in/iayannnn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary-300 hover:bg-transparent"
              asChild
            >
              <a href="mailto:farazayanali@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-muted">
          <p>&copy; {year} Munshi Faraz Ayan Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
