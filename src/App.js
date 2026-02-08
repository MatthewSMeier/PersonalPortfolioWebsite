import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import SubRequestFinder from "./components/SubRequestFinder/subrequestfinder";
import ScrollToTop from "./components/Scroll/scrolltotop";

function AppContent() {
  const location = useLocation();

  // Hide navbar only on subrequestfinder page
  const hideNavbar = location.pathname === "/subrequestfinder";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Skills />
              <Works />
              <Contact />
            </>
          }
        />

        <Route path="/subrequestfinder" element={<SubRequestFinder />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
