
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Java", level: 90 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "MERN Stack", level: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Arduino UNO", level: 80 },
      { name: "Cisco Packet Tracer", level: 75 },
      { name: "Visual Studio Code", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, index) => (
            <Card key={index} className="bg-white shadow-md animate-on-scroll">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 text-primary-600">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {["Arduino", "Java", "MERN", "DSA"].map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center animate-on-scroll"
            >
              <span className="text-lg font-medium text-center">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
