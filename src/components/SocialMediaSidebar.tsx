import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialMediaSidebar = () => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-lg transition-all duration-200"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-lg transition-all duration-200"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-lg transition-all duration-200"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-lg transition-all duration-200"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialMediaSidebar;
