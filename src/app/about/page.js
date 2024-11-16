import Navbar from "../../components/Navbar";
import Abouts from "../../components/Abouts";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="px-8 py-4 mx-auto">
        <Abouts /> 
      </div>
      <Footer/>
    </main>
  );
}

