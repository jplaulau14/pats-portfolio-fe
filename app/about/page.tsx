import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Download, Github, Linkedin, Mail, Twitter, Brain, Code, Database, Zap } from "lucide-react";

export const metadata = {
  title: "About | Pats",
  description: "Learn more about my background, skills, and experience as an AI Engineer",
};

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

  const experience = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI",
      period: "2021 - Present",
      description: "Leading the development of machine learning models for natural language processing and computer vision applications. Managing a team of 3 engineers and collaborating with cross-functional teams to deliver AI solutions."
    },
    {
      title: "Machine Learning Engineer",
      company: "DataSense Technologies",
      period: "2018 - 2021",
      description: "Designed and implemented recommendation systems and predictive analytics solutions. Improved model performance by 45% and reduced inference time by 30%."
    },
    {
      title: "Software Developer",
      company: "InnovateTech",
      period: "2016 - 2018",
      description: "Developed full-stack applications using React and Node.js. Implemented RESTful APIs and database systems for data-intensive applications."
    }
  ];

  const education = [
    {
      degree: "MSc in Artificial Intelligence",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in deep learning and computer vision. Thesis on 'Efficient Neural Network Architectures for Edge Devices'."
    },
    {
      degree: "BSc in Computer Science",
      institution: "MIT",
      period: "2010 - 2014",
      description: "Graduated with honors. Focus on algorithms, data structures, and machine learning fundamentals."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
        ABOUT <span className="text-primary">ME</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
        {/* Left column - Image and contact */}
        <div className="lg:col-span-2">
          <div className="relative mb-8">
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
              className="absolute -bottom-6 -right-6 h-1/2 w-1/2 -z-10 bg-primary"
              aria-hidden="true"
            />
          </div>
          
          <div className="neobrutalist-box p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <span>your.email@example.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Github className="text-primary" size={20} />
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/yourusername
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="text-primary" size={20} />
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/yourusername
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Twitter className="text-primary" size={20} />
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @yourusername
                </a>
              </li>
            </ul>
          </div>
          
          <Button 
            asChild 
            className="neobrutalist-button w-full"
          >
            <Link href="/resume.pdf" target="_blank">
              <Download size={16} className="mr-2" />
              Download Resume
            </Link>
          </Button>
        </div>
        
        {/* Right column - Bio and skills */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Bio</h2>
          <div className="space-y-4 mb-12">
            <p>
              I&apos;m an AI Engineer with over 7 years of experience in machine learning and software development. My expertise spans across natural language processing, computer vision, and recommendation systems. I&apos;m passionate about creating AI solutions that are not just technically sound but also practical and user-friendly.
            </p>
            <p>
              Throughout my career, I&apos;ve worked on projects ranging from speech recognition systems to predictive analytics platforms. I enjoy tackling complex problems and translating cutting-edge research into real-world applications. My approach combines technical expertise with a deep understanding of business needs and user requirements.
            </p>
            <p>
              When I&apos;m not coding or training models, I contribute to open-source AI projects and write technical articles. I&apos;m also an active member of several AI communities and regularly speak at tech conferences about emerging trends in artificial intelligence and machine learning.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Core Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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
        </div>
      </div>
      
      <Separator className="bg-black h-0.5 mb-16" />
      
      {/* Experience and Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="neobrutalist-box p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-medium">{item.company}</p>
                  <p className="bg-primary px-3 py-1 text-sm font-semibold">{item.period}</p>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((item, idx) => (
              <div key={idx} className="neobrutalist-box p-6">
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-medium">{item.institution}</p>
                  <p className="bg-primary px-3 py-1 text-sm font-semibold">{item.period}</p>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 