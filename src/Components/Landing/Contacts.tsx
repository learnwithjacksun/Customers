import { PhoneCall, Mail, MessageCircle } from "lucide-react";
import { Title } from ".";
const Contacts = () => {
  const services = [
    {
      title: "Email Support",
      text: "support@lani.com",
      subtext: "24/7 email support for all your needs",
      icon: Mail,
    },
    {
      title: "Phone Support",
      text: "+234 810 000 0000",
      subtext: "Call us anytime for urgent assistance",
      icon: PhoneCall,
    },
    {
      title: "Live Chat",
      text: "On WhatsApp - +234 810 000 0000",
      subtext: "Get instant help and support via WhatsApp",
      icon: MessageCircle,
    },
  ];
  return (
    <div id="contact" className="my-10 space-y-10 py-10">
      <Title
        title="Get in touch with us"
        description="If you have any questions, please don't hesitate to contact us."
      />

      <main className="main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div data-aos="fade-up" key={index} className="flex gap-6 shadow-lg border border-line p-4 rounded-lg bg-secondary">
                <div className="bg-primary/10 text-primary rounded-lg h-10 w-10 center">
                  <service.icon size={20} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-sora font-bold">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.text}</p>
                  <p className="text-sm text-muted">{service.subtext}</p>
                </div>
              </div>
            ))}
          </div>

          <form data-aos="fade-up" className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col gap-4">
            <input type="text" placeholder="Name" className="input w-full" />
            <input type="email" placeholder="Email" className="input w-full" />
            <textarea placeholder="Message" rows={5} className="message w-full" />
            <button className="btn-primary h-10 w-full rounded-full ms-0 mt-auto">Send Message</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
