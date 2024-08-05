import "./App.css";
import Header from "./components/partials/header/Header";
import Home from "./components/pages/home/Home";
import Resumes from "./components/pages/resume/Resumes";
import Projects from "./components/pages/project/Projects";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/partials/footer/Footer";
import ScrollUP from "./components/partials/scroll-up/ScrollUP";
import SideSocial from "./components/partials/side-social/SideSocial";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Resumes />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUP />
      <SideSocial />
    </>
  );
}

export default App;
