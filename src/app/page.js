import HeroSection from "../components/HeroSection";
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';  // Import Footer component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      
      <section className="px-8 py-4 mx-auto">
        <HeroSection />
      </section>

     

      <Footer />
    </main>
  );
}
