import { Footer, Header } from "@/Components/Landing";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(var(--color-line),transparent_1px)] [background-size:16px_16px]"></div>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
