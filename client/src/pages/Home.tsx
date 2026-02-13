import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Code2, 
  Database, 
  BrainCircuit, 
  Terminal, 
  Server,
  Cpu,
  Globe,
  ArrowRight,
  ChevronDown,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
                Available for Enterprise Architecture Consulting
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                Solution Architect <br />
                <span className="text-gradient">& Tech Innovator</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                I design and build scalable, secure, cloud-native systems for large enterprises. 
                Expert in AWS, Azure, Microservices, and AI-driven innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-14 px-8 text-base rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                  asChild
                >
                  <a href="/resume.docx" download>
                    Download Resume
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Summary" 
            subtitle="Seasoned Solution Architect with 18+ years of experience transforming complex business problems into elegant technical solutions."
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center p-8">
                 <div className="text-center p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl">
                    <p className="text-7xl font-display font-bold text-white mb-2">18+</p>
                    <p className="text-xl text-primary font-medium">Years Experience</p>
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 -z-10 rounded-3xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                My expertise lies in designing cloud-native, microservices-based enterprise applications across AWS and Azure. 
                I have a proven track record of building scalable, secure, and high-performance systems for domains ranging from 
                retail and healthcare to high-tech.
              </p>
              <p>
                I specialize in system modernization, event-driven architecture, API integration, and DevOps automation, 
                blending strategic oversight with hands-on coding in .NET Core, Python, and Node.js.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {['Cloud-Native Systems', 'Microservices', 'AI Innovation', 'DevOps Automation'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-padding bg-slate-900/50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeader title="Technical Arsenal" subtitle="A comprehensive toolkit built over two decades of engineering excellence." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              category="Core Technologies"
              icon={Code2}
              skills={[".NET Core", "ASP.NET MVC", "REST API", "ReactJS", "Node.js", "Microservices", "Redis"]}
              delay={0}
            />
            <SkillCard 
              category="Languages"
              icon={Terminal}
              skills={["C#", "Python", "Java", "TypeScript", "SQL"]}
              delay={0.1}
            />
            <SkillCard 
              category="Cloud Platforms"
              icon={Cloud}
              skills={["AWS (Solutions Architect)", "Azure (Expert)", "Appian"]}
              delay={0.2}
            />
            <SkillCard 
              category="Databases"
              icon={Database}
              skills={["SQL Server", "Oracle", "MySQL", "DynamoDB", "Vector DB"]}
              delay={0.3}
            />
            <SkillCard 
              category="AI & Automation"
              icon={BrainCircuit}
              skills={["LangChain", "Hugging Face", "Semantic Search", "Generative AI"]}
              delay={0.4}
            />
            <SkillCard 
              category="DevOps & Infrastructure"
              icon={Server}
              skills={["GitHub Actions", "Jenkins", "Terraform", "Docker", "Kubernetes"]}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title="Professional Journey" />
          
          <div className="max-w-4xl mx-auto">
            <ExperienceItem 
              role="Solution Architect"
              company="Nagarro Software"
              period="Sep 2021 – Present"
              description={[
                "Architected cloud-native microservices on AWS for a Commerce and Marketplace Platform.",
                "Designed multi-tenant architecture handling millions in transactions.",
                "Implemented secure and scalable API integrations.",
                "Led architectural decisions and code quality governance."
              ]}
              index={0}
            />
            <ExperienceItem 
              role="Principal Engineer / Solution Architect"
              company="UnitedHealth Group (Optum)"
              period="Aug 2017 – Sep 2021"
              description={[
                "Led end-to-end design of microservices for Provider Health Analytics Platform.",
                "Migrated monolithic systems to event-driven microservices architecture.",
                "Optimized data processing pipelines for large healthcare datasets.",
                "Mentored engineering teams on cloud best practices."
              ]}
              index={1}
            />
            <ExperienceItem 
              role="Technical Architect"
              company="Tesco"
              period="Mar 2014 – Aug 2017"
              description={[
                "Architected SOA-based RESTful enterprise services for Customer Profile Service.",
                "Managed system handling 300M+ customer profiles.",
                "Improved system reliability and performance during peak retail traffic."
              ]}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="section-padding bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title="Key Achievements" subtitle="Impactful solutions delivered at scale." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Cloud Commerce Platform",
                desc: "Architected a multi-tenant platform handling millions in transactions on AWS."
              },
              {
                icon: Cpu,
                title: "Monolith Modernization",
                desc: "Spearheaded transformation of a healthcare analytics system into microservices."
              },
              {
                icon: Database,
                title: "Real-time Pricing Engine",
                desc: "Designed a price configuration and contract engine enabling real-time quotations."
              },
              {
                icon: Globe,
                title: "Unified Marketplace",
                desc: "Integrated multiple hyperscalers (Microsoft, Google, Cisco, Oracle) into one marketplace."
              },
              {
                icon: BrainCircuit,
                title: "AI Database Assistant",
                desc: "Built an AI-powered assistant using LangChain, Hugging Face, and Vector Databases."
              },
              {
                icon: CheckCircle2,
                title: "Engineering Excellence",
                desc: "Led architecture forums, established code quality governance, and automated CI/CD."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
