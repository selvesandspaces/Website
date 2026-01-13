import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-lavender-300/3"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* LOGO + BRAND */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Selves & Spaces logo"
            className="h-6 w-auto rounded-3xl"
          />
          <span className="text-sm font-medium text-blacksoft">
            Selves & Spaces
          </span>
        </div>

        {/* EMOTIONAL LINE */}
        <p className="text-xs text-black/60 italic">
          A space to feel safe, seen, and supported.
        </p>

        {/* COPYRIGHT */}
        <p className="text-xs text-black/50">© {new Date().getFullYear()}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
