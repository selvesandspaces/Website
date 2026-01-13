import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "919962502316";

const FloatingWhatsApp = ({ message }) => {
  const defaultMessage = "Hello, I would like to book a therapy session.";

  const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-lavender-500 text-white px-5 py-4 rounded-full shadow-lg shadow-black/20"
    >
      <MessageCircle size={20} />
      <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
