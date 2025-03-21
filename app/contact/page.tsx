import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Pats",
  description: "Get in touch with me for collaboration, projects, or any inquiries",
}; 

const Contact = () => {
  return (
    <div className="relative">
      {/* Background accent shapes */}
      <div className="accent-shape w-[500px] h-[500px] left-[-200px] top-[-200px]" />
      <div className="accent-shape w-[300px] h-[300px] right-[100px] bottom-[100px]" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <h1 className="retro-heading mb-8">Let&apos;s Connect</h1>
        
        <div className="tilted-section py-12 mb-12">
          <p className="text-lg max-w-2xl">
            I&apos;m always interested in hearing about new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <Card className="neobrutalist-box p-6 bg-white">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </Card>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <Card className="neobrutalist-box p-6 bg-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary shrink-0 neobrutalist-box">
                    <Mail size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email</p>
                    <p className="text-lg">your.email@example.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Feel free to email me anytime. I typically respond within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary shrink-0 neobrutalist-box">
                    <Phone size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <p className="text-lg">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground mt-1">Available for calls Monday through Friday, 9 AM to 5 PM (PST).</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary shrink-0 neobrutalist-box">
                    <MapPin size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Location</p>
                    <p className="text-lg">San Francisco, CA</p>
                    <p className="text-sm text-muted-foreground mt-1">Available for remote work and occasional on-site projects.</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="neobrutalist-box p-6 bg-white">
              <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neobrutalist-box p-4 flex items-center gap-3 hover:bg-primary/10 hover:-translate-y-1 transition-all"
                >
                  <Github size={24} className="text-primary" />
                  <span className="font-bold">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neobrutalist-box p-4 flex items-center gap-3 hover:bg-primary/10 hover:-translate-y-1 transition-all"
                >
                  <Linkedin size={24} className="text-primary" />
                  <span className="font-bold">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 