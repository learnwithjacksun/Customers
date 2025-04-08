import { Title } from ".";
import { services } from "@/Constants/data";
const Services = () => {
  return (
    <>
    <div id="services" className="my-10 space-y-10 bg-secondary py-10">

        <Title title="Our Services & Solutions" description="We offer a wide range of services to meet your logistics needs." />

        <main className="main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <div data-aos="zoom-in" key={index} className="space-y-4">
                        <div className="h-10 w-10 center bg-primary/10 text-primary rounded-lg">
                            <service.icon size={20} />
                        </div>
                        <h3 className="text-lg font-sora font-bold">{service.title}</h3>
                        <p className="text-sm text-muted">{service.description}</p>
                    </div>
                ))}
            </div>
        </main>
    </div>
    </>
  )
}

export default Services