import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Hero from "./sections/Hero";
import MaterialStrip from "./sections/MaterialStrip";
import Categories from "./sections/Categories";
import FeaturedProducts from "./sections/FeaturedProducts";
import Inspiration from "./sections/Inspiration";
import Showroom from "./sections/Showroom";
import StoreInfo from "./sections/StoreInfo";
import Brand from "./sections/Brand";
import InstagramSection from "./sections/InstagramSection";
import FinalCta from "./sections/FinalCta";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MaterialStrip />
        <Categories />
        <FeaturedProducts />
        <Inspiration />
        <Showroom />
        <Brand />
        <InstagramSection />
        <StoreInfo />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
