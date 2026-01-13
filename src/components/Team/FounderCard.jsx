import { motion } from "framer-motion";
import { useState } from "react";
import TeamModal from "./TeamModal";

const FounderCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-lavender-500 mb-4">
            Founder & Clinical Director
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-blacksoft mb-6">
            Kanaga Lakshmi
          </h2>

          <p className="text-black/80 text-base md:text-lg leading-relaxed mb-6">
            I'm Ms. Kanaga Lakshmi, a Clinical Psychologist and Psychotherapist, with years of experience helping children, adolescents, and families navigate their emotional challenges. I hold an MA in Human Resources, an MA in Applied Psychology (Clinical specialization) from TISS, and an MPhil in Clinical Psychology from IMH. I'm also a licensed professional with the Rehabilitation Council of India (RCI) and specialize in trauma-focused care. Currently, I'm deepening my approach by training in Somatic Experiencing to better support my clients' healing journeys.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="text-sm font-medium text-lavender-500 hover:underline"
          >
            Read more
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[420px] rounded-3xl flex items-center justify-center">
          <img src="/Team/Kanaga.jpg" alt="" className="max-w-full max-h-full object-contain"/>
        </div>
      </motion.div>

      {/* MODAL */}
      <TeamModal
        open={open}
        onClose={() => setOpen(false)}
        title="Dr. Kanaga — Founder & Clinical Director"
        content={
          <>
            <p>
              I'm Ms. Kanaga Lakshmi, a Clinical Psychologist and Psychotherapist, with years of experience helping children, adolescents, and families navigate their emotional challenges. I hold an MA in Human Resources, an MA in Applied Psychology (Clinical specialization) from TISS, and an MPhil in Clinical Psychology from IMH. I'm also a licensed professional with the Rehabilitation Council of India (RCI) and specialize in trauma-focused care. Currently, I'm deepening my approach by training in Somatic Experiencing to better support my clients' healing journeys.
            </p>
            <p>
              As a single mother and a caregiver for a parent with mental illness, my personal experiences have profoundly shaped how I approach mental health. I understand the importance of safety, support, and community in the healing process. This journey inspired me to create Selves and Spaces, a mental health clinic where every part of the "self" is acknowledged, embraced, and empowered. This is more than just a clinic-it's a space where people can feel seen, understood, and supported on their emotional journey.
            </p>
            <p>
                In addition to my clinical training, I hold a Diploma in Transactional Analysis and Psychodynamic Psychotherapy. I specialize in child and adolescent psychotherapy and have had the privilege of serving as a Senior Mentor at Nishta Neurodev Centre and heading the Yaavarum project, an NGO dedicated to improving school mental health. Through these experiences, I've worked to create safe and nurturing environments for emotional growth, both within schools and the wider community.
            </p>
            <p>
                My therapeutic approach is relational and systems-oriented, which means I focus on understanding the dynamics of relationships and the broader contexts in which individuals live. I work to create a space where clients can explore and heal through the connections they have with others and the systems that shape their lives. My approach is deeply rooted in both my professional training and lived experience. I believe in the power of understanding trauma and its long-term impact, and I bring that empathy into every interaction.
            </p>
          </>
        }
      />
    </>
  );
};

export default FounderCard;
