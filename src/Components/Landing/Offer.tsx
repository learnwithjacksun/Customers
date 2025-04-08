import { Link } from "react-router-dom";
import { offers } from "@/Constants/data";
import { Title } from ".";
const Offer = () => {
  return (
    <>
    <div id="offer" className="my-10 space-y-10 py-10">
        <Title title="What We Offer" description="We offer a wide range of services to meet your logistics needs." />

        <main className="main">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                {offers.map(x => (
                    <li data-aos="fade-up" key={x.title} className="min-h-[400px] relative overflow-hidden rounded-2xl">
                        <img src={x.image} alt={x.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b z-50 from-transparent to-black/98 rounded-2xl"/>
                        <div style={{backgroundColor: x.color}} className="h-10 w-10 absolute top-5 left-5 center rounded-lg">
                            <x.icon className="text-white" />
                        </div>
                        <div className="absolute bottom-5 left-5 z-50 space-y-2">
                            <h3 style={{color: x.color}} className="text-2xl font-sora font-bold text-white">{x.title}</h3>
                            <p className="text-sm text-white">{x.content}</p>
                            <Link to="/register" style={{backgroundColor: x.color}} className="btn max-w-[200px] w-full py-2 rounded-lg text-sm text-white">Explore</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    </div>
    </>
  )
}

export default Offer