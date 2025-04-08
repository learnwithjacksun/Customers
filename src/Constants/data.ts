import {
  Home,
  Globe,
  Briefcase,
  PhoneCall,
  Truck,
  Warehouse,
  Ship,
  PackageOpen,
  Utensils,
  Satellite,
  Building2,
  Bike,
  UserRound,
} from "lucide-react";

export const menuItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: Globe,
  },
  {
    label: "Services",
    href: "#services",
    icon: Briefcase,
  },

  {
    label: "Contact",
    href: "#contact",
    icon: PhoneCall,
  },
];

export const services = [
  {
    title: "Express Delivery",
    description: "Fast, same-day deliveries to meet your urgent needs.",
    icon: Truck,
  },
  {
    title: "Inter-state Delivery",
    description: "Efficient and secure delivery services across state borders.",
    icon: Globe,
  },
  {
    title: "Business Logistics Solutions",
    description: "End-to-end logistics support to help businesses streamline operations and scale efficiently.",
    icon: Briefcase,
  },
  {
    title: "E-commerce Logistics",
    description: "Tailored solutions for online businesses, from warehouse management to last-mile delivery.",
    icon: Warehouse,
  },
  {
    title: "Freight Forwarding",
    description: "Comprehensive freight solutions for smooth international and domestic shipping.",
    icon: Ship,
  },
  {
    title: "Real-Time Tracking",
    description: "Stay updated with live tracking and real-time delivery status for complete transparency.",
    icon: Satellite,
  },
];


export const offers = [
  {
    icon: PackageOpen,
    image: "/img6.jpg",
    title: "Lani Express",
    color: "#FF9500",
    content:
      "Simplify your interstate logistics with Lani Express. Whether sending or receiving, we ensure swift and secure package delivery across Nigeria.",
  },
  {
    icon: Utensils,
    image: "/img4.jpg",
    title: "Lani Eats",
    color: "#22c55e",
    content:
      "Savor the flavors you love with Lani Eats. Enjoy freshly prepared meals delivered straight to your doorstep, hassle-free.",
  },
  {
    icon: Utensils,
    image: "/about2.jpg",
    title: "Lani Stores",
    color: "#ff0040",
    content:
      "Shop for all your needs with Lani Stores. Browse and purchase a wide range of products conveniently, delivered right to your door.",
  },
];


export const faqs = [
  {
    showAnswer: false,
    question: "What does Lani do?",
    answer:
      "At Lani, we make it easy for business owners to get their products into the hands of customers quickly. Our fast and reliable delivery service takes the hassle out of logistics, so you can focus on growing your business.",
  },
  {
    showAnswer: false,
    question: "Where does Lani Operate?",
    answer:
      "Right now, we're proudly serving Uyo and Port Harcourt. But we're just getting started - Lani is expanding fast, and soon, we'll be delivering across most states in Nigeria.",
  },
  {
    showAnswer: false,
    question: "What makes Lani unique?",
    answer:
      "Lani works just like your favourite ride-hailing service providers, such as Bolt and Uber. We connect you to a dispatch rider closest to you, who'll arrive under 15 minutes. In addition, you can track the rider in real-time from pick-up to drop-off, giving you peace of mind every step of the way.",
  },
  {
    showAnswer: false,
    question: "Does Lani have other services?",
    answer:
      "Yes, we have Lani Express to handle all your within and interstate package deliveries, then Lani Eats to get delicious meal, and Lani Stores to get all your needs delivered right to your doorsteps",
  },
];

export const ROLES = [
  {
    id: 1,
    title: "Personal",
    description:
      "Start receiving and making orders",
    path: "/register/personal",
    icon: UserRound,
    colorbg: "bg-primary/10",
    color: "text-primary",
  },
  {
    id: 2,
    title: "Rider",
    description: "As a rider, start taking and delivering orders",
    path: "/register/rider",
    icon: Bike,
    colorbg: "bg-blue-500/10",
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Delivery Company",
    description: "Optimize and power your delivery company with us",
    path: "/register/company",
    icon: Building2,
    colorbg: "bg-purple-500/10",
    color: "text-purple-500",
  },
  {
    id: 4,
    title: "Restaurant",
    description:
      "Supply users with your best meals. We will handle the rest",
    path: "/register/restaurant",
    icon: Utensils,
    colorbg: "bg-green-500/10",
    color: "text-green-500",
  },
];
