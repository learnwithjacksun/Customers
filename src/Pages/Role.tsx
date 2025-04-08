import { ROLES } from "@/Constants/data"
import { MainLayout } from "@/Layouts"
import clsx from "clsx"

const Role = () => {
  return (
    <>
    <MainLayout>

    <div className=" mt-10 pb-10">
        <div className="flex flex-col gap-4 text-center md:w-[480px] w-[90%] mx-auto">
           <div className="center gap-1">
            <h3 className="text-2xl font-sora font-bold">Select a Role</h3>
           </div>
            <p className="text-muted">Please select the role that best describes the way you would want Lani to serve you</p>
        </div>

    <div className="mt-10 grid md:grid-cols-2 gap-4 layout">
        {ROLES.map(role => (
            <a href={role.path} key={role.id} className="flex flex-col gap-4 bg-secondary p-2 rounded-xl border border-line">
                <div className={clsx(role.colorbg, role.color, "w-10 h-10 rounded-lg center")}>
                    <role.icon size={20} />
                </div>
                    <div>
                        <h4 className="font-sora font-bold ">{role.title}</h4>
                        <p className="text-muted text-sm">{role.description}</p>
                    </div>
                    {/* <ChevronRight size={20} className="text-muted" /> */}
            </a>
        ))}
    </div>
    </div>
    </MainLayout>
    </>
  )
}

export default Role