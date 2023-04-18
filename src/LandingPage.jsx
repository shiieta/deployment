import "./css/main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function LandingPage() {

  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Contact />
      <Footer/>
    </>
  );
}
