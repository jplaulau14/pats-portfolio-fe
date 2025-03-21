import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

// Sample project data (expanded version of the one in the Projects component)
const projects = [
  {
    id: 1,
    title: "AI Speech Recognition",
    description: "A neural network-based speech recognition system with high accuracy across multiple languages.",
    image: "/placeholder.jpg",
    tags: ["TensorFlow", "Python", "NLP"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Smart Recommendation Engine",
    description: "Content recommendation system using collaborative filtering and deep learning techniques.",
    image: "/placeholder.jpg",
    tags: ["PyTorch", "FastAPI", "React"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Computer Vision App",
    description: "Real-time object detection and tracking using computer vision techniques.",
    image: "/placeholder.jpg",
    tags: ["OpenCV", "Python", "YOLO"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Generative AI Art Tool",
    description: "A tool that uses GANs to create unique artistic images based on user input.",
    image: "/placeholder.jpg",
    tags: ["PyTorch", "React", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "NLP Text Summarizer",
    description: "An application that automatically summarizes long texts while preserving key information.",
    image: "/placeholder.jpg",
    tags: ["Hugging Face", "Python", "Flask"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "AI Music Composer",
    description: "An AI system that can compose original music in different styles and genres.",
    image: "/placeholder.jpg",
    tags: ["TensorFlow", "Python", "Web Audio API"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const metadata = {
  title: "Projects | Pats",
  description: "Explore my AI and machine learning projects",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
          MY <span className="text-primary">PROJECTS</span>
        </h1>
        <p className="max-w-2xl text-lg">
          Here&apos;s a comprehensive collection of my work in AI and machine learning, showcasing various techniques and applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="group neobrutalist-box overflow-hidden transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <CardHeader className="p-4">
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="p-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block bg-primary/20 border border-black px-2 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between p-4 pt-0">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-2 border-black h-8 w-8 hover:bg-primary"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Github repository">
                    <Github size={16} />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-2 border-black h-8 w-8 hover:bg-primary"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
              
              <Button 
                asChild 
                variant="link" 
                className="p-0 font-bold text-black hover:text-primary"
              >
                <Link href={`/projects/${project.id}`}>
                  View details
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 