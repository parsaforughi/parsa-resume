import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Search, Settings, ArrowDown } from "lucide-react";

const phases = [
  {
    phase: "فاز ۱",
    title: "موتور محتوای AI",
    icon: FileText,
    steps: [
      "دریافت داده از Google Sheet",
      "تولید مقاله سئو شده با LLM",
      "ایجاد متا دیتا",
      "ارسال برای تایید در تلگرام",
      "انتشار خودکار در وردپرس",
    ],
  },
  {
    phase: "فاز ۲",
    title: "اتوماسیون سئو",
    icon: Search,
    steps: [
      "اتصال به Google Search Console API",
      "مانیتورینگ ایمپرشن و CTR",
      "گزارش‌گیری خودکار",
      "تشخیص افت رتبه",
    ],
  },
  {
    phase: "فاز ۳",
    title: "زیرساخت",
    icon: Settings,
    steps: [
      "n8n روی VPS با Docker",
      "معماری ماژولار",
      "قابلیت توسعه فازهای بعدی",
    ],
  },
];

const Solutions = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">راهکارهای پیشنهادی برای شما</h2>
          <p className="section-subtitle">
            سیستم اتوماسیون محتوا و سئو
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {phases.map((phase, pi) => (
            <div key={phase.phase}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + pi * 0.15 }}
                className="pipeline-step"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <phase.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">{phase.phase}</span>
                    <h3 className="font-bold text-foreground text-lg">{phase.title}</h3>
                  </div>
                </div>

                <div className="space-y-2 mr-14">
                  {phase.steps.map((step, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + pi * 0.15 + si * 0.05 }}
                      className="flex items-center gap-3 text-sm text-foreground/75"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {step}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {pi < phases.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="text-primary/30" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
