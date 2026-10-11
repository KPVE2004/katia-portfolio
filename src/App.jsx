import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stack from './sections/Stack';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
      </main>
    </div>
  );
}

export default App;