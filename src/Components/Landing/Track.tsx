import { Package, Utensils } from "lucide-react";
import { Title } from ".";
import { useState } from "react";
import clsx from "clsx";

const Track = () => {
  const tabs = [
    {
      label: "Package",
      icon: <Package size={20} />,
    },
    {
      label: "Food",
      icon: <Utensils size={20} />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const selectActiveTab = (tab: (typeof tabs)[0]) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="my-10 space-y-10 py-10">
        <Title
          title="Track Your Delivery"
          description="Effortlessly monitor your shipments from start to finish with our advanced tracking system."
        />

        <main className="main space-y-6">
          <div data-aos="fade-up" className="flex items-center gap-2 shadow-lg bg-secondary p-2 rounded-xl md:w-[468px] mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={clsx(
                  "flex items-center flex-1 gap-2 px-4 py-2 rounded-lg",
                  activeTab.label === tab.label && "bg-background text-primary"
                )}
                onClick={() => selectActiveTab(tab)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <form data-aos="zoom-in" className="space-y-4 bg-secondary p-4 rounded-xl shadow-lg md:w-[700px] mx-auto">
            <input type="text" placeholder="Enter your tracking number" className="input input-bordered w-full" />
            <button className="btn-primary w-full h-10 rounded-full">Track {activeTab.label}</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Track;
