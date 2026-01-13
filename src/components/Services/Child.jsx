import { motion } from "framer-motion";
import { Baby } from "lucide-react";

/* =====================
   ANIMATION VARIANTS
===================== */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 70, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeSide = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -90 : 90,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const ChildAdolescentSection = () => {
  return (
    <section className="bg-lavender-50 py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* TEXT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="space-y-10"
        >
          {/* ICON */}
          <motion.div
            variants={fadeUp}
            className="w-14 h-14 rounded-full bg-lavender-100 flex items-center justify-center"
          >
            <Baby size={26} className="text-lavender-500" />
          </motion.div>

          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold text-blacksoft leading-snug"
          >
            The young person <br />
            <span className="text-lavender-500 text-xl font-normal">
              (Child and adolescent)
            </span>
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-sm text-lavender-500"
          >
            Why a young person mental health should be taken seriously?
          </motion.p>

          {/* CONTENT */}
          <motion.p
            variants={fadeUp}
            className="text-black/80 text-base md:text-lg leading-relaxed"
          >
            Now that we are here, let us talk about the young person&apos;s
            mental health. We all know childhood plays such a crucial role in
            one&apos;s mental health. If you are looking at this, you are
            probably a parent or a caregiver of a young person and you are
            wondering what is happening to their mental health. They probably
            have started the conversation about emotions, their mental health or
            you are seeing them struggle. Witnessing their struggle and building
            mental health conversations can be hard. At Selves and Spaces we aim
            to create a space for the conversation to begin. See you here as a
            family
          </motion.p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          variants={fadeSide("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="relative"
        >
          <img
            src="/child.png"
            alt="Child and adolescent mental health"
            className="w-full h-[420px] object-contain rounded-3xl"
          />

          {/* SOFT DEPTH */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-lavender-300/40 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default ChildAdolescentSection;
