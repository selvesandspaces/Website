import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Baby } from "lucide-react";
import ChildAdolescentSection from "../components/Services/Child";
import WhatWeOffer from "../components/Services/WhatWeOffer";
import HowWeWork from "../components/Services/HowWeWork";

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
  hidden: { opacity: 0, y: 80, scale: 0.94 },
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

const fadeImage = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Services = () => {
  return (
    <>
      {/* ======================================================
          SECTION 1 — HERO / INVITATION
      ====================================================== */}
      <section className="bg-lavender-50 pt-32 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
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
              <Sparkles size={26} className="text-lavender-500" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold text-blacksoft leading-tight"
            >
              Say hello to the parts of yourself you haven&apos;t met yet!
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="uppercase tracking-widest text-sm text-lavender-500"
            >
              Taking your first step to mental health
            </motion.p>

            <motion.div
              variants={container}
              className="space-y-6 text-black/80 text-base md:text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                Taking the first step towards your mental health is a courageous
                move-kudos to you! The World Health Organization defines health
                as &quot;a state of complete physical, mental, and social
                well-being and not merely the absence of disease or
                infirmity.&quot; With that in mind, it is clear that mental
                health is an integral component of overall health, making our
                mind&apos;s well-being essential.
              </motion.p>

              <motion.p variants={fadeUp}>
                Many of my clients often ask, &quot;Why can&apos;t I handle
                stress like my parents did?&quot; or say things like, &quot;When
                I was growing up, this wasn&apos;t the norm.&quot; The truth is,
                emotions have always been a part of us. Even animals experience
                emotions. As humans evolved, we developed logical thinking and
                learned to suppress our emotions, but they have always been
                there.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeImage}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-120px" }}
            className="relative"
          >
            <img
              src="/FirstStep.png"
              alt="Calm therapy space"
              className="w-full h-[440px] object-cover rounded-3xl"
            />

            {/* DEPTH ELEMENT */}
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-lavender-300/40 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          SECTION 2 — EMOTIONAL CONTINUATION
      ====================================================== */}
      <section className="bg-white py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="max-w-4xl mx-auto px-6 space-y-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-black/80 text-base md:text-lg leading-relaxed"
          >
            Haven&apos;t we seen our grandparents anxiously worrying?
            Haven&apos;t we witnessed our parents experiencing sleeplessness,
            irritation, and agitation? As children, didn&apos;t we feel sadness,
            anger, shame, and fear? Haven&apos;t we all longed for safety at
            some point? Many of us have wished for some kind of magic or
            superhero to rescue us. All of these experiences reveal that the
            elephant in the room was our mental health.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-black/80 text-base md:text-lg leading-relaxed"
          >
            Now that you&apos;re here, why not give us a call and meet with us?
            Therapy isn&apos;t just about addressing your problems-it&apos;s
            also about discovering parts of yourself you haven&apos;t yet met,
            all within the safest and most non-judgmental space possible.
          </motion.p>
        </motion.div>
      </section>

      <ChildAdolescentSection />
      <WhatWeOffer />
      <HowWeWork />
    </>
  );
};

export default Services;
