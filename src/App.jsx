import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SidebarLinkButton } from './components/sidebar_navigation_links'
import { Sidebar } from './components/sidebar'
import { SidebarHeader } from './components/sidebar_header_link'
import { MainOuter } from './components/main_outer'
import { MainCentral } from './components/main_central'
import { MainDateNavigation } from './components/main_center_date_head'
import { MainCenterEvents } from './components/main_center_events'

function App() {
  return (
    <div className='flex flex-row h-screen w-screen'> 
      <Sidebar> 
        <SidebarHeader/>
        <SidebarLinkButton text={"Home"} image={"https://static-00.iconduck.com/assets.00/home-icon-512x510-7enk0ake.png"}/>
        <SidebarLinkButton text={"Webinars"} image={"https://png.pngtree.com/png-clipart/20230421/original/pngtree-webinar-line-icon-png-image_9073323.png"}/>
        <SidebarLinkButton text={"Billings"} image={"https://static.thenounproject.com/png/921694-200.png"}/>
        <SidebarLinkButton text={"Settings"} image={"https://icons.veryicon.com/png/o/miscellaneous/user-center/account-settings-11.png"}/>
        <SidebarLinkButton text={"Recordings"} image={"https://static.vecteezy.com/system/resources/thumbnails/047/798/473/small_2x/retro-vintage-microphone-on-white-background-logo-mic-silhouette-sign-music-voice-record-icon-recording-studio-symbol-vector.jpg"}/>
      </Sidebar>

      
        <MainOuter>
          <p className='font-medium p-4 text-base'>Sun Mar 23 2025</p>
          <p className='font-semibold text-3xl p-4'>Good Afternoon, Rohit Jangid!</p>
          {/* <div className='flex flex-row justify-between'> */}
            <MainCentral>
              <MainDateNavigation/>
              <MainCenterEvents/>
            </MainCentral>
          {/* </div> */}
        </MainOuter>

          {/* <div className='w-1/3 bg-blue-300'></div>
          <div className='w-2/3 bg-green-300'></div> */}
       
    </div>
  )
  
}

export default App
