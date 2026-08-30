import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

// The portfolio page is the site's home page.
import Home from "./pages/Portfolio";
import Philosophy from "./pages/Philosophy";
import Inquiry from "./pages/Inquiry";
import Consultation from "./pages/Consultation";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/philosophy"
          element={<Philosophy />}
        />

        <Route path="/services" element={<Services />} />

        <Route
          path="/inquiry"
          element={<Inquiry />}
        />

        <Route
          path="/consultation"
          element={<Consultation />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
