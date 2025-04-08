import { Link } from "react-router-dom";
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/#about",
      },
      {
        title: "Services",
        path: "/#services",
      },
      {
        title: "Contact",
        path: "/#contact",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms of Service",
        path: "/terms",
      },
      {
        title: "Privacy Policy",
        path: "/privacy",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "Lani Express",
        path: "/",
      },
      {
        title: "Lani Eats",
        path: "/",
      },
      {
        title: "Lani Store",
        path: "/",
      },
    ],
  },
];
const Footer = () => {
  return (
    <>
      <div className="my-10 space-y-10 bg-secondary py-10">
        <div className="main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo-orange.png" alt="logo" width={30} height={30} />
                <h3 className="text-xl font-sora font-bold">Lani Logistics</h3>
              </Link>

              <p className="text-muted text-sm">
                We are dedicated to providing the best delivery service for your
                needs. Our team is committed to ensuring your packages arrive
                safely and on time.
              </p>
            </div>
            {footerLinks.map((link, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-sora font-bold">{link.title}</h3>
                <ul className="space-y-2">
                  {link.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.path} className="text-muted text-sm">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="main pb-10">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Lani Logistics. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
