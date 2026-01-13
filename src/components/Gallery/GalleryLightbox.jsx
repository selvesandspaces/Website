import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const GalleryLightbox = ({ open, onClose, event }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!event) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden relative mt-10 flex flex-col"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-black/60 hover:text-black"
            >
              <X />
            </button>

            {/* Header */}
            <div className="px-8 pt-10 pb-6">
              <h3 className="text-2xl font-semibold text-blacksoft">
                {event.title}
              </h3>
              {event.description && (
                <p className="mt-2 text-black/70">{event.description}</p>
              )}
            </div>

            {/* Scrollable images */}
            <div className="px-6 pb-10 overflow-y-auto space-y-8">
              {event.images.map((img, i) => (
                <div key={i} className="max-w-3xl mx-auto">
                  <div className="w-full h-[240px] md:h-[360px] rounded-xl overflow-hidden bg-black/5">
                    <img
                      src={img}
                      alt={event.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
