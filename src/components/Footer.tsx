import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="gradient-text font-bold text-lg mb-2">پارسا فروغی</p>
          <p className="text-sm text-muted-foreground">
            توسعه‌دهنده فول‌استک · متخصص AI و اتوماسیون
          </p>
          <div className="mt-6 text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
