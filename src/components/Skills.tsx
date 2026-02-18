import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "هوش مصنوعی و اتوماسیون",
    skills: ["OpenAI API", "Gemini", "تولید محتوا با AI", "Apify", "n8n"],
  },
  {
    title: "بک‌اند و زیرساخت",
    skills: ["Node.js", "Express", "BullMQ", "Supabase", "Docker", "VPS"],
  },
  {
    title: "داده و استخراج",
    skills: ["Web Scraping", "Data Pipeline", "API Integration", "Google Sheets API"],
  },
  {
    title: "پلتفرم و ابزار",
    skills: ["Telegram Bot", "Instagram Bot", "WordPress API", "Google Search Console"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">مهارت‌ها و تخصص‌ها</h2>
          <p className="section-subtitle">ابزارها و تکنولوژی‌هایی که استفاده می‌کنم</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + gi * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-semibold text-primary mb-4 text-lg">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
