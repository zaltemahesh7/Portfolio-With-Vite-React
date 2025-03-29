import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import { Link, Element } from 'react-scroll';

function App() {

  return (
    <>
      <Navbar />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="portfolio"><Portfolio /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="testimonial"><Testimonial /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
      <SocialLinks />
    </>
  )
}

export default App
