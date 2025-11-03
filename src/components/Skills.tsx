import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Redux"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL", "Microservices"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Nginx", "Webpack"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies I work with to build modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <span className="text-primary">//</span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-sm py-2 px-4 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
