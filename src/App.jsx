import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import OngoingProjects from "./pages/OngoingProjects";
import OngoingProjectDetails from "./pages/OngoingProjectDetails";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/" ||
    location.pathname === "/about";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/ongoing-projects" element={<OngoingProjects />} />
        <Route path="/ongoing-projects/:id" element={<OngoingProjectDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;