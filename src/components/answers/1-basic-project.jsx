import { useState } from "react"

export function SidebarClass1(){
    const [displaySidebar, setDisplaySidebar] = useState(true);
    return <div className="flex h-screen">
        <div className="bg-red-200 flex  md:w-1/6 w-8 h-screen transition-all delay-1000 ease-in-out">
            Sidebar
            {/* <button className="bg-yellow-500 hover:bg-pink-500 transition-all duration-1000">Hello</button> */}
        </div>
        <div className="bg-green-800 w-full h-screen">
            Content
        </div>


    </div>
}