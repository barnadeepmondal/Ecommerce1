import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Portfolio";
import Philosophy from "./pages/Philosophy";
import Inquiry from "./pages/Inquiry";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Services from "./pages/Services";
import Consultation from "./pages/Consultation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/philosophy"
          element={<Philosophy />}
        />

        <Route
          path="/inquiry"
          element={<Inquiry />}
        />

        <Route path="/services" element={<Services />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
