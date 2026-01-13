import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChatWithUs = () => {
    const { firstName, lastName, email, description } = formData;

    if (!firstName || !email || !description) {
      setError(
        "Please share your name, email, and a brief note so we can support you better."
      );
      return;
    }

    const message = `
Hello, my name is ${firstName} ${lastName}.
Email: ${email}

I would like to reach out regarding:
${description}
    `;

    window.open(
      `https://wa.me/919962502316?text=${encodeURIComponent(message.trim())}`,
      "_blank"
    );
  };

  return (
    <section className="bg-white mt-20 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-blacksoft mb-3">
                Contact us
              </h1>
              <p className="text-black/70 text-base md:text-lg leading-relaxed">
                You are welcome to visit us in person or reach out online. We
                will respond with care and confidentiality.
              </p>
            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-3xl overflow-hidden h-[420px]"
            >
              <iframe
                title="Selves & Spaces Location"
                src="https://www.google.com/maps?q=Selves%26Spaces%20by%20Kanaga%20Lakshmi%2C%20Chennai%2C%20Tamil%20Nadu&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN — CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-lavender-50 rounded-3xl p-10 space-y-10"
          >
            {/* VISIT INFO */}
            <div>
              <h2 className="text-lg font-medium text-blacksoft mb-3 flex items-center gap-2">
                <MapPin size={18} />
                Visit us
              </h2>
              <p className="text-black/80 leading-relaxed">
                Selves & Spaces, 7/22, Gandhi Nagar 1st Main Rd Kasturba Nagar
                <br />
                Adyar, Chennai, Tamil Nadu 600020. <br />
                Mobile: +91 96771 75894
              </p>
            </div>

            <div className="h-px bg-black/10" />

            {/* FORM */}
            <div>
              <h2 className="text-lg font-medium text-blacksoft mb-6">
                Reach out to us
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-black/10 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-lavender-300 outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-black/10 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-lavender-300 outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-black/10 rounded-lg px-4 py-3 mb-5 bg-white focus:ring-2 focus:ring-lavender-300 outline-none"
              />

              <textarea
                name="description"
                placeholder="Briefly tell us what brings you here"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full border border-black/10 rounded-lg px-4 py-3 mb-4 bg-white focus:ring-2 focus:ring-lavender-300 outline-none"
              />

              {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

              {/* ACTIONS */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col">
                  <button
                    onClick={handleChatWithUs}
                    className="inline-flex items-center justify-center px-8 py-4 bg-lavender-500 text-white rounded-full hover:bg-lavender-400 transition"
                  >
                    Chat with us on WhatsApp
                  </button>
                  <p className="mt-2 text-xs text-black/60">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-black/60">Find us on</span>

                  <a
                    href="https://www.instagram.com/selvesandspaces/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-black/10 hover:text-lavender-500 transition"
                  >
                    <Instagram size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/selvesandspaces/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-black/10 hover:text-lavender-500 transition"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
