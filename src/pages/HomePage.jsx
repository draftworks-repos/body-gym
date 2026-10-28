import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Programs from "../components/Programs.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import Gallery from "../components/Gallery.jsx";
import Staff from "../components/Staff.jsx";
import Reviews from "../components/Reviews.jsx";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <WhyChoose />
      <Gallery />
      <Staff />
      <Reviews />
    </main>
  );
}
