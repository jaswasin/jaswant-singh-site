import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

export function ExperienceItem({ role, company, period, description, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="hidden md:block absolute left-[50%] top-0 w-px h-full bg-border -translate-x-1/2" />
      <div className="hidden md:block absolute left-[50%] top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background" />
      
      <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        <div className="flex-1 md:w-1/2" />
        
        <div className="flex-1 md:w-1/2 relative">
           {/* Mobile Timeline dot and line */}
          <div className="md:hidden absolute left-[-2rem] top-0 w-px h-full bg-border" />
          <div className="md:hidden absolute left-[-2.35rem] top-2 w-3 h-3 rounded-full bg-primary" />

          <div className="glass-card p-6 rounded-2xl mb-8 border border-white/5 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-primary" />
                {company}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {period}
              </span>
            </div>
            <ul className="space-y-2">
              {description.map((item, i) => (
                <li key={i} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
