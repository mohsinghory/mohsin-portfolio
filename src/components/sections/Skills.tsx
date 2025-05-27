"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

const frontendSkills: SkillProps[] = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Redux", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Material UI", level: 87 },
];

const backendSkills: SkillProps[] = [
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 92 },
  { name: "MongoDB", level: 88 },
  { name: "Mongoose", level: 85 },
  { name: "REST API", level: 95 },
  { name: "GraphQL", level: 80 },
  { name: "JWT", level: 85 },
  { name: "Firebase", level: 82 },
];

const pythonSkills: SkillProps[] = [
  { name: "Python", level: 95 },
  { name: "Django", level: 85 },
  { name: "Flask", level: 88 },
  { name: "FastAPI", level: 80 },
  { name: "SQLAlchemy", level: 83 },
  { name: "Pandas", level: 90 },
  { name: "NumPy", level: 88 },
  { name: "Matplotlib", level: 85 },
];

const mlSkills: SkillProps[] = [
  { name: "Machine Learning", level: 90 },
  { name: "Deep Learning", level: 85 },
  { name: "TensorFlow", level: 88 },
  { name: "PyTorch", level: 83 },
  { name: "Scikit-learn", level: 92 },
  { name: "Natural Language Processing", level: 82 },
  { name: "Computer Vision", level: 80 },
  { name: "Data Visualization", level: 85 },
];

const SkillBar: React.FC<SkillProps> = ({ name, level }) => {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-foreground/50">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            A showcase of my technical expertise and proficiency across various technologies.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl futuristic-border overflow-hidden">
          <CardContent className="p-6">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8 bg-transparent gap-4">
                <TabsTrigger value="frontend" className="data-[state=active]:bg-primary data-[state=active]:text-white font-medium">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="data-[state=active]:bg-primary data-[state=active]:text-white font-medium">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="python" className="data-[state=active]:bg-primary data-[state=active]:text-white font-medium">
                  Python
                </TabsTrigger>
                <TabsTrigger value="ml" className="data-[state=active]:bg-primary data-[state=active]:text-white font-medium">
                  ML/AI
                </TabsTrigger>
              </TabsList>

              <TabsContent value="frontend" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {frontendSkills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="backend" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {backendSkills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="python" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {pythonSkills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ml" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {mlSkills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Additional Technical Skills */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Other Technical Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Git & GitHub", "Docker", "AWS", "CI/CD",
              "RESTful APIs", "Socket.IO", "Redis", "Microservices",
              "Responsive Design", "Webpack", "Jest", "Cypress",
              "PostgreSQL", "Agile/Scrum", "Linux", "Serverless"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-card/50 backdrop-blur-sm rounded-lg py-3 px-4 border border-border text-center hover:border-primary hover:text-primary transition-colors"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
