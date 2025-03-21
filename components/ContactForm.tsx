"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! This is a static demo, so the form doesn't actually submit.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const inputClasses = "border-2 border-black p-2 focus:ring-2 focus:ring-primary outline-none bg-white neobrutalist-box hover:translate-y-[-2px] transition-transform";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-bold">
          Subject <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="What's this about?"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-bold">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={8}
          className={`${inputClasses} resize-none`}
          placeholder="Tell me about your project..."
        />
      </div>
      
      <Button 
        type="submit" 
        className="neobrutalist-button mt-4 self-start text-lg px-8 py-6 flex items-center gap-2"
      >
        <Send size={20} />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm; 