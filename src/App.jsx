import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/WhatsappComponent";
import Team from "./Pages/Team";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Footer from "./components/Footer";
import Contact from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      {/* <main className="pt-36"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </main> */}

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

export default App;
