import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "@/Constants/data";
import clsx from "clsx";
import { MobileMenu } from ".";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../UI";
const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
    <header className="border-b border-line sticky top-0 backdrop-blur-sm z-100">
      <nav className="flex items-center justify-between h-[70px] main ">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-orange.png" alt="logo" className="w-10 h-10" />
          <h3 className="text-xl font-sora font-bold hidden lg:block">
            Lani Logistics
          </h3>
        </Link>

        <div className="flex items-center md:gap-8 gap-4">
          <ul className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={clsx(
                    "text-base text-muted hover:text-main",
                    location.pathname === item.href && "text-primary font-sora"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-[40px] w-[1px] bg-line hidden md:block" />
          <ThemeToggle />
          <Link to="/login" className="btn btn-primary px-6 py-2 rounded-md">
            Get Started
          </Link>
          <div className="h-[40px] w-[1px] bg-line block md:hidden" />
            <Menu  onClick={toggleMenu} className="md:hidden w-6 h-6 cursor-pointer" />
        </div>
      </nav>
    </header>

<AnimatePresence>
   {isOpen && <MobileMenu isOpen={isOpen} onClose={toggleMenu}/>}
</AnimatePresence>
    </>

  );
};

export default Header;
