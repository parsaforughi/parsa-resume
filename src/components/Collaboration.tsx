import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Rocket, Wrench } from "lucide-react";

const plans = [
  {
    icon: Zap,
    title: "MVP کامل (فاز ۱)",
    price: "۸۵ میلیون تومان",
    features: [
      "موتور تولید محتوای AI",
      "اتصال به Google Sheet",
      "انتشار خودکار وردپرس",
      "بات تایید تلگرام",
    ],
    highlight: false,
  },
  {
    icon: Rocket,
    title: "نسخه کامل",
    price: "۱۳۵ میلیون تومان",
    features: [
      "تمام امکانات فاز ۱",
      "مانیتورینگ پیشرفته سئو",
      "گزارش اتوماتیک",
      "زیرساخت Docker + n8n",
    ],
    highlight: true,
  },
  {
    icon: Wrench,
    title: "پشتیبانی ماهانه",
    price: "۱۵ تا ۳۰ میلیون تومان",
    features: [
      "توسعه و بهبود مستمر",
      "پشتیبانی فنی",
      "بروزرسانی‌های امنیتی",
      "اضافه کردن فیچر جدید",
    ],
    highlight: false,
  },
];

const Collaboration = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collaboration" className="py-24 relative section-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">پیشنهاد همکاری</h2>
          <p className="section-subtitle">پلن‌های سفارشی برای نیاز شما</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`glass rounded-xl p-6 flex flex-col relative overflow-hidden ${
                plan.highlight ? "glow-box border-primary/30" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-l from-transparent via-primary to-transparent" />
              )}

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <plan.icon className="text-primary" size={24} />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">{plan.title}</h3>
              <p className="text-primary font-bold text-xl mb-6">{plan.price}</p>

              <div className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground/75">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
