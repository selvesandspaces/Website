import { motion, AnimatePresence } from "framer-motion";
import { Lock, FileText, CalendarX, ChevronDown } from "lucide-react";
import { useState } from "react";

const policies = [
  {
    title: "Confidentiality",
    icon: Lock,
    content: (
      <>
        <p>
          With the exception of certain specifics described below, you have the
          absolute right to the confidentiality of your therapy. We cannot and
          will not tell anyone else what you have told us, or even that you are
          in therapy with us without your prior written permission unless the
          situation is an emergency. On that account any kind of social
          interaction will be avoided.
        </p>

        <p className="mt-4">
          <strong>Emergency:</strong> If there is good reason to believe that
          you will harm another person or yourself concerned authorities will be
          informed
        </p>
      </>
    ),
  },
  {
    title: "Record keeping",
    icon: FileText,
    content: (
      <p>
        We keep brief records, noting only that you have been here, what
        interventions happened in session, and the topics that were discussed.
      </p>
    ),
  },
  {
    title: "Cancellation policy",
    icon: CalendarX,
    content: (
      <p>Please note that a session fee will be charged for cancellations.</p>
    ),
  },
];

const HowWeWork = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-lavender-50 py-40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:sticky md:top-32"
        >
          <img
            src="/Howwework.png"
            alt="Calm and ethical therapy space"
            className="w-full h-[420px] object-contain rounded-3xl"
          />

          {/* soft depth */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-lavender-300/40 blur-3xl -z-10" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-blacksoft mb-4">
              How we work
            </h2>
            <p className="text-lavender-500 text-base md:text-lg">
              Our policies and guidelines are designed to ensure safety,
              transparency, and a respectful therapeutic space.
            </p>
          </motion.div>

          {/* ACCORDION */}
          <div className="space-y-5">
            {policies.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-120px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-3xl shadow-sm overflow-hidden"
                >
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-lavender-100 flex items-center justify-center">
                        <Icon size={22} className="text-lavender-700" />
                      </div>
                      <h3 className="text-lg font-medium text-blacksoft">
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* CONTENT — SMOOTH OPEN/CLOSE */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="px-6 pb-6 text-black/80 leading-relaxed"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
