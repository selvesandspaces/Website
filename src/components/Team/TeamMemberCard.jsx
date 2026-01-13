import { motion } from "framer-motion";

const TeamMemberCard = ({ name, role, image, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white border border-black/10 rounded-2xl overflow-hidden text-center"
    >
      <div className="h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain pt-3"
        />
      </div>

      <div className="p-4">
        <h4 className="text-blacksoft font-medium">{name}</h4>
        <p className="text-sm text-lavender-500 mt-1">{role}</p>
        <p className="text-sm text-black/60 mt-1">{content}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
