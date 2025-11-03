import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100K+ users",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams on feature planning",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Optimized database queries improving response time by 40%",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development processes and sprint planning",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: [
        "Built responsive web interfaces using React and modern CSS",
        "Assisted in backend development using Node.js and Express",
        "Wrote unit tests achieving 80%+ code coverage",
        "Contributed to open-source projects and internal tools",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key contributions in the software development field
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary/80">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
