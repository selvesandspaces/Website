import { useState } from "react";
import { motion } from "framer-motion";
import TeamModal from "./TeamModal";

const SupervisorCard = ({ name, title, image, intro, fullBio }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white border border-black/10 rounded-2xl overflow-hidden"
      >
        {/* Image */}
        <div className="h-56 w-full pt-5">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-4xl"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-lavender-500 mb-2">
            {title}
          </p>

          <h4 className="text-lg font-medium text-blacksoft mb-3">{name}</h4>

          <p className="text-sm text-black/70 mb-4">{intro}</p>

          <button
            onClick={() => setOpen(true)}
            className="text-sm font-medium text-lavender-500 hover:underline"
          >
            Read more
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <TeamModal
        open={open}
        onClose={() => setOpen(false)}
        title={name}
        content={fullBio}
      />
    </>
  );
};

export default SupervisorCard;
