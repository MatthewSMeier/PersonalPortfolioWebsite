import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import SubRequestFinder from "./components/SubRequestFinder/subrequestfinder";


function App() {
  return (
    <BrowserRouter>   {/* 👈 Must wrap everything */}
      <Navbar />

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
    </BrowserRouter>
  );
}

export default App;
