import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/yourusername", 
      icon: <Github size={20} /> 
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/yourusername", 
      icon: <Linkedin size={20} /> 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/yourusername", 
      icon: <Twitter size={20} /> 
    },
    { 
      name: "Email", 
      url: "mailto:your.email@example.com", 
      icon: <Mail size={20} /> 
    },
  ];

  return (
    <footer className="w-full border-t border-black/20 bg-[#e8f6ea] py-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-2">
              <h2 className="text-xl font-black tracking-tight text-black">
                PATS<span className="text-primary">.DEV</span>
              </h2>
            </Link>
            <p className="text-sm text-black/70">
              &copy; {currentYear} | All rights reserved
            </p>
          </div>

          {/* Social links */}
          <div>
            <ul className="flex gap-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-black bg-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 