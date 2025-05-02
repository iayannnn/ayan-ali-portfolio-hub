
import { Github, Linkedin, Mail, Phone } from "lucide-react";
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
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-300" />
              <a href="mailto:farazayanali@gmail.com" className="text-sm hover:text-primary-300 transition-colors">
                farazayanali@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-300" />
              <a href="tel:9666046776" className="text-sm hover:text-primary-300 transition-colors">
                9666046776
              </a>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0 md:ml-4">
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
            </div>
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
