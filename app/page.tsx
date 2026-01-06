import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <Banner />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
