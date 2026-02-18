import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Video, BarChart3, Server } from "lucide-react";

const highlights = [
  { icon: Bot, label: "تولید محتوای AI", desc: "تصویر + ویدیو + متن" },
  { icon: Video, label: "بات‌های اتوماسیون", desc: "اینستاگرام و تلگرام" },
  { icon: BarChart3, label: "تحلیل محتوای وایرال", desc: "استخراج و تحلیل الگوها" },
  { icon: Server, label: "سیستم‌های مقیاس‌پذیر", desc: "بک‌اند و صف‌های پردازش" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative section-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">درباره من</h2>
          <p className="section-subtitle">آنچه انجام می‌دهم</p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/80 text-lg leading-loose text-center"
          >
            پارسا توسعه‌دهنده فول‌استک است که روی ساخت ابزارهای اتوماسیون و AI
            برای برندهای حوزه زیبایی و FMCG کار کرده است. تمرکز اصلی بر ساخت
            سیستم‌های هوشمند، مقیاس‌پذیر و قابل اعتماد است.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:glow-box transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
