import { Github, Linkedin, Mail } from "lucide-react";
import { FaMedium } from "react-icons/fa6"; // Using react-icons for Medium as lucide might lack it
import { SiMedium } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-display text-white mb-2">
              Jaswant Singh<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Architecting the future with cloud-native solutions.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jaswant-singh-3045ba17/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://medium.com/@jaswant.vision"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all"
              aria-label="Medium"
            >
              <SiMedium className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@jaswantsingh.com" // Placeholder email, can be updated
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jaswant Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
