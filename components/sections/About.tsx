import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Brain, Code, Database, Download, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { 
      name: "Machine Learning", 
      icon: <Brain size={24} />,
      description: "Deep learning, neural networks, and traditional ML algorithms" 
    },
    { 
      name: "Software Development", 
      icon: <Code size={24} />,
      description: "Full-stack development with modern frameworks and languages" 
    },
    { 
      name: "Data Engineering", 
      icon: <Database size={24} />,
      description: "Data processing, ETL pipelines, and database management" 
    },
    { 
      name: "AI Applications", 
      icon: <Zap size={24} />,
      description: "Building practical AI solutions for real-world problems" 
    },
  ];

  return (
    <section className="section" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Image */}
          <div className="relative">
            <div className="neobrutalist-box h-full w-full overflow-hidden">
              <div className="relative aspect-square h-full w-full">
                <Image
                  src="/placeholder.jpg"
                  alt="Portrait of AI Engineer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Accent box */}
            <div 
              className="absolute -bottom-6 -right-6 h-2/3 w-1/2 -z-10 bg-primary"
              aria-hidden="true"
            />
          </div>

          {/* Right column - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              ABOUT <span className="text-primary">ME</span>
            </h2>
            
            <p className="text-lg mb-6">
              I&apos;m an AI Engineer passionate about building intelligent systems that solve real-world problems. With expertise in machine learning, computer vision, and natural language processing, I create solutions that push the boundaries of what&apos;s possible with AI.
            </p>
            
            <p className="text-lg mb-8">
              My journey in technology began with a fascination for how computers could learn from data. Now, I focus on developing AI applications that are not just technically impressive but also ethically sound and user-friendly.
            </p>
            
            <Separator className="bg-black h-0.5 mb-8" />
            
            <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex flex-col border-2 border-black p-4 hover:bg-primary/10 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold">{skill.name}</h4>
                  </div>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
            
            <Button 
              asChild 
              className="neobrutalist-button w-full sm:w-auto self-start"
            >
              <Link href="/resume.pdf" target="_blank">
                <Download size={16} className="mr-2" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 