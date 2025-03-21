"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { ArrowDown, Code, Brain, Rocket } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Array of phrases to cycle through
  const phrases = useMemo(() => [
    "Software Engineer",
    "AI Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ], []);
  
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const typeChar = () => {
      if (!isDeleting && displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        setTypingSpeed(150);
      } else if (!isDeleting && displayText.length === currentPhrase.length) {
        setIsDeleting(true);
        setTypingSpeed(1500);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        setTypingSpeed(75);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingSpeed(150);
      }
    };
    
    const timer = setTimeout(typeChar, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background accent shapes */}
      <div className="accent-shape w-[500px] h-[500px] left-[-200px] top-[-200px]" />
      <div className="accent-shape w-[300px] h-[300px] right-[100px] bottom-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="retro-heading">
              <div className="mb-4">Hi! I&apos;m Pats,</div>
              <div className="mb-2">I am a</div>
              <div className="text-primary h-[1.2em] flex items-center">
                <span className="relative whitespace-nowrap">
                  {displayText}
                  <span 
                    className="inline-block w-[3px] md:w-[4px] h-[52px] sm:h-[60px] md:h-[70px] lg:h-[86px] bg-black absolute top-1/2 -translate-y-1/2 -right-[8px] animate-blink"
                  />
                </span>
              </div>
            </h1>
            
            <div className="mt-8">
              <p className="text-xl mb-8 max-w-2xl">
                Building intelligent systems and solutions that push the boundaries of what&apos;s possible with modern technology.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="neobrutalist-button text-lg px-8 h-14">
                  <Link href="/projects">
                    View Projects
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-black text-lg px-8 h-14 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors neobrutalist-box"
                >
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative lg:mt-20">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="neobrutalist-box p-6 bg-white">
                  <Brain className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold">AI Development</h3>
                </div>
                <div className="neobrutalist-box p-6 bg-primary/10">
                  <Code className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold">Clean Code</h3>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="neobrutalist-box p-6 bg-primary/10">
                  <Rocket className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold">Innovation</h3>
                </div>
                <div className="relative aspect-square neobrutalist-box overflow-hidden">
                  <Image
                    src="/placeholder.jpg"
                    alt="Tech illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-black" />
      </div>
    </section>
  );
};

export default Hero; 