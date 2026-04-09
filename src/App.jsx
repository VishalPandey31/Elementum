import Navbar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';
import About from './assets/Components/About/About';
import Progress from './assets/Components/Progress/Progress';
import Services from './assets/Components/Services/Services';
import Testimonials from './assets/Components/Testimonials/Testimonials';
import Newsletter from './assets/Components/Newsletter/Newsletter';
import Footer from './assets/Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="pink-glow" style={{ top: '100px', right: '-200px' }}></div>
      <div className="pink-glow" style={{ top: '1500px', left: '-200px' }}></div>
      
      <Navbar />
      <Hero />
      <About />
      <Progress />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
