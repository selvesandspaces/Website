import { useState } from "react";
import GalleryEvent from "../components/Gallery/GalleryEvent";
import GalleryLightbox from "../components/Gallery/GalleryLightbox";
import { motion } from "framer-motion";

const events = [
  {
    title: "Mirror mirror what do you see: reflective worship for therapists",
    description: "",
    images: [
      "/Gallery/Mirror/1.jpeg",
      "/Gallery/Mirror/2.jpeg",
      "/Gallery/Mirror/3.jpeg",
      "/Gallery/Mirror/4.jpeg",
      "/Gallery/Mirror/5.jpeg",
      "/Gallery/Mirror/6.jpeg",
    ],
  },
  {
    title: "Document Screening",
    description: "",
    images: [
      "/Gallery/DocumentaryScreening/1.jpeg",
      "/Gallery/DocumentaryScreening/2.jpeg",
      "/Gallery/DocumentaryScreening/3.jpeg",
      "/Gallery/DocumentaryScreening/4.jpeg",
      "/Gallery/DocumentaryScreening/5.jpeg",
      "/Gallery/DocumentaryScreening/6.jpeg",
      "/Gallery/DocumentaryScreening/7.jpeg",
      "/Gallery/DocumentaryScreening/8.jpeg",
      "/Gallery/DocumentaryScreening/9.jpeg",
    ],
  },
  {
    title: "Book Reading",
    description: "",
    images: [
      "/Gallery/BookReading/1.jpeg",
      "/Gallery/BookReading/2.jpeg",
      "/Gallery/BookReading/3.jpeg",
      "/Gallery/BookReading/4.jpeg",
    ],
  },
  {
    title: "Open House",
    description: "",
    images: [
      "/Gallery/OpenHouse/1.jpeg",
      "/Gallery/OpenHouse/2.jpeg",
      "/Gallery/OpenHouse/3.jpeg",
      "/Gallery/OpenHouse/4.jpeg",
      "/Gallery/OpenHouse/5.jpeg",
      "/Gallery/OpenHouse/6.jpeg",
    ],
  },
];

const Gallery = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <section className="bg-white mt-20 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold text-blacksoft"
          >
            Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-8 text-lg md:text-xl text-black/70 leading-relaxed"
          >
            Moments, spaces, and shared experiences that reflect our work, our
            community, and the environments we create together at Selves &
            Spaces.
          </motion.p>
        </div>

        {events.map((event, index) => (
          <GalleryEvent
            key={index}
            event={event}
            index={index}
            onOpen={setActiveEvent}
          />
        ))}
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        open={Boolean(activeEvent)}
        event={activeEvent}
        onClose={() => setActiveEvent(null)}
      />
    </section>
  );
};

export default Gallery;
