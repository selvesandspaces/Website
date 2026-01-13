import { motion } from "framer-motion";

const GalleryEvent = ({ event, index, onOpen }) => {
  const previewImages = event.images.slice(0, 5);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-lavender-50 rounded-3xl px-8 py-12 md:px-12 md:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8">
        {/* EVENT NUMBER */}
        <div className="text-lavender-500 text-4xl font-light">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* EVENT CONTENT */}
        <div className="space-y-8">
          {/* Header */}
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-blacksoft">
              {event.title}
            </h3>

            {event.description && (
              <p className="mt-3 text-black/70 leading-relaxed">
                {event.description}
              </p>
            )}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* First image larger */}
            {previewImages.slice(0, 1).map((img, i) => (
              <button
                key={i}
                onClick={() => onOpen(event)}
                className="col-span-2 md:col-span-2 focus:outline-none"
              >
                <img
                  src={img}
                  alt={event.title}
                  className="w-full h-64 md:h-80 object-contain rounded-2xl"
                />
              </button>
            ))}

            {/* Remaining images */}
            {previewImages.slice(1).map((img, i) => (
              <button
                key={i}
                onClick={() => onOpen(event)}
                className="focus:outline-none"
              >
                <img
                  src={img}
                  alt={event.title}
                  className="w-full h-40 md:h-48 object-contain rounded-2xl hover:opacity-90 transition"
                />
              </button>
            ))}

            {/* View more */}
            {event.images.length > 5 && (
              <button
                onClick={() => onOpen(event)}
                className="flex items-center justify-center rounded-2xl border border-black/10 text-sm text-black/60 hover:text-black"
              >
                +{event.images.length - 5} more
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GalleryEvent;
