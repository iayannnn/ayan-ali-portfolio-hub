
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-primary-500" />,
    label: "Email",
    value: "farazayanali@gmail.com",
    href: "mailto:farazayanali@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-primary-500" />,
    label: "Phone",
    value: "9666046776",
    href: "tel:9666046776",
  },
  {
    icon: <Linkedin className="h-5 w-5 text-primary-500" />,
    label: "LinkedIn",
    value: "iayannnn",
    href: "https://linkedin.com/in/iayannnn",
  },
  {
    icon: <Github className="h-5 w-5 text-primary-500" />,
    label: "GitHub",
    value: "iayannnn",
    href: "https://github.com/iayannnn",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-on-scroll">
            <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 hover:text-primary-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-10 w-10 flex items-center justify-center shrink-0 bg-primary-50 border-none">
                    <CardContent className="p-0 flex items-center justify-center h-full w-full">
                      {item.icon}
                    </CardContent>
                  </Card>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-on-scroll">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-semibold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message"
                        rows={5}
                      />
                    </div>
                    <div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
