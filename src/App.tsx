import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LineUp } from './components/LineUp';
import { Access } from './components/Access';
import { About } from './components/About';
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <LineUp />
      <Access />
      <Footer />
    </div>
  );
}

export default App;