import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Sample project data
const projects = [
  {
    id: 1,
    title: "AI Speech Recognition",
    description: "A neural network-based speech recognition system with high accuracy across multiple languages.",
    fullDescription: "This project implements a state-of-the-art speech recognition system using deep learning techniques. The system is trained on a diverse dataset of audio samples across multiple languages to ensure high accuracy and robustness. It can transcribe speech in real-time and handle various accents and speech patterns.\n\nThe model architecture is based on a combination of convolutional neural networks (CNNs) for feature extraction and recurrent neural networks (RNNs) with attention mechanisms for sequence modeling. The system achieves a word error rate (WER) of less than 5% on benchmark datasets.",
    image: "/placeholder.jpg",
    tags: ["TensorFlow", "Python", "NLP"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Multi-language support (English, Spanish, French, German, Chinese)",
      "Real-time transcription with low latency",
      "Noise-robust recognition in challenging environments",
      "Easy integration via REST API",
      "Customizable vocabulary for domain-specific applications"
    ],
    technologies: [
      "TensorFlow for model development and training",
      "Python for backend processing",
      "WebRTC for audio capture",
      "Docker for containerization",
      "AWS for deployment"
    ]
  },
  {
    id: 2,
    title: "Smart Recommendation Engine",
    description: "Content recommendation system using collaborative filtering and deep learning techniques.",
    fullDescription: "This recommendation engine combines collaborative filtering with deep learning approaches to deliver highly personalized content recommendations. The system analyzes user behavior patterns and content metadata to suggest items that match users' interests and preferences.\n\nThe engine employs a hybrid approach, using both memory-based and model-based collaborative filtering techniques. It also incorporates content-based features to address the cold-start problem for new users and items. The system has been extensively tested and shows significant improvement in user engagement metrics.",
    image: "/placeholder.jpg",
    tags: ["PyTorch", "FastAPI", "React"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Personalized recommendations based on user behavior",
      "Real-time recommendation updates",
      "A/B testing framework for recommendation strategies",
      "Integration with analytics dashboard",
      "Scalable architecture handling millions of users"
    ],
    technologies: [
      "PyTorch for deep learning models",
      "FastAPI for backend API development",
      "React for frontend user interface",
      "PostgreSQL for data storage",
      "Redis for caching"
    ]
  },
  {
    id: 3,
    title: "Computer Vision App",
    description: "Real-time object detection and tracking using computer vision techniques.",
    fullDescription: "This computer vision application provides real-time object detection and tracking capabilities. It can identify and track multiple objects simultaneously, even in challenging lighting and occlusion scenarios. The system is optimized for performance and can run efficiently on various hardware platforms, from high-end GPUs to mobile devices.\n\nThe core of the application uses a combination of deep learning-based object detection (YOLO) and classical computer vision algorithms for tracking. The system achieves high accuracy with minimal computational resources, making it suitable for a wide range of applications from security and surveillance to augmented reality.",
    image: "/placeholder.jpg",
    tags: ["OpenCV", "Python", "YOLO"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Real-time object detection with 80+ object classes",
      "Multi-object tracking with occlusion handling",
      "Camera integration (webcam, IP cameras, video files)",
      "Customizable detection sensitivity",
      "Event triggering based on detected objects"
    ],
    technologies: [
      "OpenCV for image processing",
      "YOLO (You Only Look Once) for object detection",
      "Python for application logic",
      "CUDA for GPU acceleration",
      "Flask for web interface"
    ]
  },
  {
    id: 4,
    title: "Generative AI Art Tool",
    description: "A tool that uses GANs to create unique artistic images based on user input.",
    fullDescription: "This creative tool utilizes Generative Adversarial Networks (GANs) to produce unique artistic images based on text descriptions or reference images provided by users. The system combines the power of deep learning with artistic principles to generate high-quality, visually appealing artwork in various styles.\n\nThe tool implements multiple GAN architectures, including StyleGAN and BigGAN, and allows users to control various aspects of the generation process through an intuitive interface. The generated images can be further customized and refined using a set of post-processing tools.",
    image: "/placeholder.jpg",
    tags: ["PyTorch", "React", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Text-to-image generation",
      "Style transfer capabilities",
      "Multiple artistic styles (oil painting, watercolor, sketch, etc.)",
      "High-resolution output (up to 1024x1024)",
      "Batch processing for multiple generations"
    ],
    technologies: [
      "PyTorch for GAN implementation",
      "React for frontend interface",
      "Node.js for backend services",
      "WebGL for image manipulation",
      "AWS S3 for storage"
    ]
  },
  {
    id: 5,
    title: "NLP Text Summarizer",
    description: "An application that automatically summarizes long texts while preserving key information.",
    fullDescription: "This Natural Language Processing application automatically condenses long documents into concise summaries while preserving the essential information and main points. The system uses advanced NLP techniques to understand document structure, identify key sentences, and generate coherent summaries.\n\nThe summarizer employs both extractive and abstractive summarization methods. For extractive summarization, it uses sentence scoring algorithms based on linguistic features and graph-based ranking. For abstractive summarization, it leverages transformer-based language models to generate human-like summaries. Users can control the summary length and style according to their preferences.",
    image: "/placeholder.jpg",
    tags: ["Hugging Face", "Python", "Flask"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Support for multiple document formats (PDF, DOCX, TXT, HTML)",
      "Adjustable summary length",
      "Keyword extraction and highlighting",
      "Multi-language support",
      "Batch processing for multiple documents"
    ],
    technologies: [
      "Hugging Face Transformers for language models",
      "Python for core processing",
      "Flask for web API",
      "SpaCy for NLP preprocessing",
      "MongoDB for document storage"
    ]
  },
  {
    id: 6,
    title: "AI Music Composer",
    description: "An AI system that can compose original music in different styles and genres.",
    fullDescription: "This AI music composition system creates original musical pieces in various styles and genres. By analyzing patterns in existing music and learning the rules of music theory, the system can generate harmonically rich and structurally coherent compositions that sound as if they were created by human composers.\n\nThe core of the system is a deep learning model trained on a large corpus of MIDI files spanning classical, jazz, rock, and electronic music. The model learns to predict musical events (notes, chords, rhythms) based on context, allowing it to generate new musical sequences that follow stylistic conventions. Users can influence the composition by setting parameters like genre, tempo, mood, and instrumentation.",
    image: "/placeholder.jpg",
    tags: ["TensorFlow", "Python", "Web Audio API"],
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Multiple genre support (classical, jazz, rock, electronic)",
      "Customizable parameters (tempo, mood, complexity)",
      "MIDI export for DAW integration",
      "Real-time composition and playback",
      "Collaborative features for human-AI co-creation"
    ],
    technologies: [
      "TensorFlow for neural network models",
      "Python for backend logic",
      "Web Audio API for browser-based playback",
      "Tone.js for audio synthesis",
      "WebRTC for collaborative features"
    ]
  },
];

interface Props {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    return {
      title: "Project Not Found | Pats",
    };
  }
  
  return {
    title: `${project.title} | Pats`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id.toString() === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <Button 
        asChild 
        variant="ghost" 
        className="mb-8 pl-0 font-bold hover:bg-transparent hover:text-primary"
      >
        <Link href="/projects">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="relative">
          <div className="neobrutalist-box h-full w-full overflow-hidden">
            <div className="relative aspect-video h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Accent box */}
          <div 
            className="absolute -bottom-6 -right-6 h-1/3 w-1/3 -z-10 bg-primary"
            aria-hidden="true"
          />
        </div>
        
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block bg-primary/20 border border-black px-3 py-1 text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-lg mb-8">
            {project.description}
          </p>
          
          <div className="flex gap-4">
            <Button 
              asChild 
              className="neobrutalist-button"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                View Live Demo
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-black hover:bg-primary hover:text-primary-foreground"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                View Source
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <Separator className="bg-black h-0.5 mb-12" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">About this Project</h2>
          
          <div className="prose prose-lg max-w-none">
            {project.fullDescription.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div>
          <div className="neobrutalist-box p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="neobrutalist-box p-6">
            <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
            <ul className="space-y-2">
              {project.technologies.map((tech, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 