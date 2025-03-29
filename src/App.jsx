import { useEffect, useState } from "react"
// import { useMediaQuery } from '@mui/material';
import { SidebarToggleBtn } from "./components/SidebarToggleBtn";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    if(media.matches != matches)
      setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => {
      media.removeEventListener('change', listener);
    }
  }, [matches, query]);


  return matches;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect( () => {
    console.error("IsDesktop : ", isDesktop);
    if(!isDesktop)
      setSidebarOpen(false);
    else
      setSidebarOpen(true);
  }, [isDesktop]);


  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <MainContent sidebarOpen={sidebarOpen}/>
    </div>
  )
  
}

function Sidebar({sidebarOpen, setSidebarOpen}){

  if(sidebarOpen){
    return <div className="w-96 h-screen bg-blue-100 m-2 fixed top-0 left-0 md:relative">
      <div>
        <div className="cursor-pointer hover:bg-slate-300" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <SidebarToggleBtn/>
        </div>
      </div>
    </div>
  }

  return <div className="fixed top-0 left-0 m-2 bg-blue-100">
    <div>
      <div className="cursor-pointer hover:bg-slate-300" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <SidebarToggleBtn/>
      </div>
    </div>
</div>


}

function MainContent(){
  return <div className="w-full m-2">
    <div className="h-72 bg-black md:block hidden rounded-xl"></div>
    <div className="grid grid-cols-11 gap-4 p-4">
      <div className="h-96 bg-red-200 rounded-2xl shadow col-span-11 md:col-span-2 -translate-y-24 hidden md:block">

      </div>

      <div className="h-96 bg-green-200 rounded-2xl shadow col-span-11 md:col-span-6">
        
      </div>

      <div className="h-96 bg-yellow-200 rounded-2xl shadow col-span-11 md:col-span-3">
        
      </div>

    </div>
  </div>
}

export default App
