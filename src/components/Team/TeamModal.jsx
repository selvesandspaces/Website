import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const TeamModal = ({ open, onClose, title, role, content }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-xl relative flex flex-col"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-black/50 hover:text-black"
            >
              <X />
            </button>

            {/* Header */}
            <div className="px-8 pt-10 pb-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-blacksoft">
                {title}
              </h3>

              {role && (
                <p className="mt-2 text-sm tracking-wide uppercase text-lavender-500">
                  {role}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="mx-8 h-px bg-black/10" />

            {/* Scrollable Content */}
            <div className="px-8 py-8 overflow-y-auto">
              <div className="space-y-5 text-black/80 text-base leading-relaxed">
                {content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
