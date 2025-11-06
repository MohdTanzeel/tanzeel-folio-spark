import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "City, Country",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohd-tanzeel-860899221",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{info.label}</h3>
                {info.href ? (
                  <a 
                    href={info.href} 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{info.value}</p>
                )}
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-8 border-border bg-gradient-to-br from-card to-card/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Whether you have a project in mind or just want to chat about tech, feel free to reach out. 
                I typically respond within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:your.email@example.com">
                    <Mail className="mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center pt-6 border-t border-border">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors border border-border group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
