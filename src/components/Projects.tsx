import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Search, Image, Cpu, ArrowLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Telegram Viral Bot",
    subtitle: "جستجوی محتوای وایرال",
    icon: Search,
    color: "primary",
    goal: "جستجوی محتوای وایرال از Instagram و YouTube با Apify",
    tech: "Node + Telegraf + Express",
    usage: "استخراج الگوهای وایرال برای تولید محتوا",
    note: "اسکریپت TikTok فعلاً فعال نیست",
    link: "https://t.me/seylane_bot",
  },
  {
    id: 2,
    title: "Collamin Shelftalker",
    subtitle: "تولید تصاویر پروموشنال با AI",
    icon: Image,
    color: "accent",
    goal: "تولید خودکار تصاویر پروموشنال محصول با AI",
    tech: "Supabase Edge Function → Gateway → Gemini",
    usage: "معماری Serverless و مقیاس‌پذیر",
    note: null,
    link: "https://collamin-shelftalker.up.railway.app",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative section-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">پروژه‌های مرتبط با شما</h2>
          <p className="section-subtitle">نمونه‌کارهای برجسته</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="project-card group"
              onClick={() =>
                setActiveProject(activeProject === project.id ? null : project.id)
              }
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <motion.div
                  animate={{ rotate: activeProject === project.id ? 90 : 0 }}
                  className="text-muted-foreground"
                >
                  <ArrowLeft size={18} />
                </motion.div>
              </div>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{
                  height: activeProject === project.id ? "auto" : 0,
                  opacity: activeProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-2 border-t border-border/50">
                  <div className="pt-4">
                    <span className="text-xs text-primary font-medium">هدف</span>
                    <p className="text-sm text-foreground/80">{project.goal}</p>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">تکنولوژی</span>
                    <p className="text-sm text-foreground/80 font-mono" dir="ltr">
                      {project.tech}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">کاربرد</span>
                    <p className="text-sm text-foreground/80">{project.usage}</p>
                  </div>
                  {project.note && (
                    <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                      ⚠️ {project.note}
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      مشاهده پروژه
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
