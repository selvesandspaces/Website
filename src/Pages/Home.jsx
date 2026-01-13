import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-[50vh] pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-blacksoft leading-tight">
              A safe space for healing, <br />
              <span className="text-lavender-500">
                growth, and self-discovery
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-black/70 max-w-xl">
              Professional, compassionate therapy designed to support your
              mental and emotional well-being in a warm, confidential
              environment.
            </p>

            <div className="mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 rounded-full bg-lavender-500 text-white text-sm font-medium hover:bg-lavender-400 transition-colors"
              >
                Book a Session
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <img
              src="/herosectionImage.png"
              alt="Calm therapy space"
              className="w-full h-[420px] object-cover rounded-3xl"
            />

            {/* Decorative lavender blur */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lavender-300/40 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>
      {/* ABOUT US SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-blacksoft mb-16 text-center"
          >
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="logo.png"
                alt="A calm and welcoming therapy space"
                className="w-full h-[380px] object-contain"
              />
            </motion.div>

            {/* Content - RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-sm tracking-widest uppercase text-lavender-500">
                Accessible and Inclusive Mental Healthcare
              </p>

              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                Selves and Spaces is a mental health care organization founded
                with a deep commitment to providing accessible, inclusive, and
                high-quality mental health support. Our mission is to create
                environments that foster healing, safety, and growth, where
                every individual feels seen, heard, and valued.
              </p>

              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                We believe in the power of relational spaces — places where
                connection, understanding, and acceptance are not just
                encouraged but embedded in the way we interact with each other.
              </p>

              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                At Selves and Spaces, we strive to build communities that go
                beyond therapy. Our aim is to empower individuals to carry a
                sense of
                <span className="font-medium text-lavender-500">
                  {" "}
                  “okay-ness”
                </span>{" "}
                into their personal lives and shared spaces, creating a ripple
                effect of healing, resilience, and support in the communities
                around us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
