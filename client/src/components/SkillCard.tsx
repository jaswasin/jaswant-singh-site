import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: LucideIcon;
  delay?: number;
}

export function SkillCard({ category, skills, icon: Icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-white/5"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
