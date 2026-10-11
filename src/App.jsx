import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stack from './sections/Stack';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
      </main>
    </div>
  );
}

export default App;