import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and design patterns.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical approach to complex challenges with creative and efficient solutions.",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication and project management skills.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto" />
          </div>

          {/* Bio */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with expertise in building robust web applications 
              from concept to deployment. With a strong foundation in both frontend and backend technologies, 
              I create seamless digital experiences that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development has equipped me with a diverse skill set and the ability 
              to work across the entire development stack. I'm constantly learning and staying updated with 
              the latest industry trends to deliver cutting-edge solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
