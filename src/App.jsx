import './App.css';
import Contact from './sections/Contact/Contact';
import Experiences from './sections/Experiences/Experiences';
import Educations from './sections/Educations/Educations';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Experiences />
      <Educations />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
