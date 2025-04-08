import { Hero, Track, Wrapper, Services, Offer, FAQ, Contacts } from "@/Components/Landing";
import { MainLayout } from "@/Layouts";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Track />
      <div id="about">
        <Wrapper
        title="Affordable Logistics Solutions Connecting Businesses and People Seamlessly. 🚚"
        description="At Lani Logistics, we specialize in providing fast, reliable, and affordable logistics solutions. Whether you're a small business or a large enterprise, our technology-driven approach ensures your deliveries are always on time and in perfect condition. Our mission is to bridge distances and connect people through seamless logistics services."
        image="/about.svg"
        buttonPath="/role"
        buttonText="Ship Now"
        />
        <Services />
        <Offer />
        <FAQ />
        <Contacts />
      </div>
    </MainLayout>
  );
};

export default Home