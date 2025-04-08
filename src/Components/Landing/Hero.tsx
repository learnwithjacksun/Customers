import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const services = [ 
  {
    title: "Same State Delivery",
    value: "95% on time",
  },
  {
    title: "Interstate Delivery",
    value: "6 States",
  },
  {
    title: "Same Day Delivery",
    value: "Within 12 hours",
  },
];

const Hero = () => {
 
  return (
    <>
      <div className="center flex-col w-full border-line border-b bg-gradient-to-t md:h-[90vh] from-secondary to-transparent py-10 pb-14">
        <div data-aos="fade-up" className="md:text-center text-left flex flex-col gap-4 w-[90%] md:max-w-3xl mx-auto">
          <h2 className="sm:text-4xl text-3xl md:text-6xl font-sora font-bold">
            Effortless Logistics, <br /> Seamless{" "}
            <span className="text-primary">Deliveries </span>
          </h2>
          <p className="text-muted">
          Experience a new era of logistics solutions tailored to your business needs. From pickup to drop-off, we've got you covered
          </p>

          <div className="flex items-center md:justify-center gap-2 border-b border-line pb-10">
            <Link
              to="/role"
              className="btn btn-primary min-w-[150px] font-semibold md:h-12 h-10 px-4 md:px-6 rounded-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/#about"
              className="bg-foreground btn min-w-[150px] font-semibold flex-center border-line border md:h-12 h-10 px-4 rounded-lg"
            >
              Learn More
            </a>
          </div>

          <ul data-aos="fade-right" className="grid md:grid-cols-3 grid-cols-2 gap-6 mt-6 ">
            {services.map((item) => (
              <li key={item.title} className="flex flex-col gap-2">
                <span className="text-muted text-sm">{item.title}</span>
                <span className="text-main md:text-2xl text-xl font-sora font-bold">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
