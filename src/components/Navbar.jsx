import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About Us", path: "/" },
  { name: "Our Team", path: "/team" },
  { name: "Our Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 pointer-events-none">
      {/* Floating Container */}
      <nav className="pointer-events-auto mx-auto max-w-6xl bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 rounded-2xl px-6 py-4 flex items-center justify-between border border-black/5">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-lg font-semibold text-blacksoft tracking-wide"
        >
          Selves & Spaces
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-lavender-500"
                      : "text-blacksoft hover:text-lavender-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute -bottom-1 left-0 h-[2px] w-full bg-lavender-500 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-blacksoft"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Floating Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto mx-auto mt-3 max-w-6xl bg-white rounded-2xl shadow-lg border border-black/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive ? "text-lavender-500" : "text-blacksoft"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
