"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { TbAnalyze, TbArrowLeftBar, TbArrowRightBar, TbCalendarBolt, TbNotification, TbReport, TbSettings, TbSmartHome, TbSubtask, TbTimeline } from 'react-icons/tb'

export default function Sidebar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const mainData = [
    { title: "Dashboard", link: "/", icon: <TbSmartHome className="size-6" /> },
    { title: "Tasks", link: "/d", icon: <TbSubtask className="size-6" /> },
    { title: "Tracking", link: "/e", icon: <TbTimeline className="size-6" /> },
    { title: "Calender", link: "/q", icon: <TbCalendarBolt className="size-6" /> },
    { title: "Reports", link: "/w", icon: <TbReport className="size-6" /> },
    { title: "Notifications", link: "/s", icon: <TbNotification className="size-6" /> },
  ];

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <aside className={`bg-black ${isSidebarOpen ? "min-w-56" : "w-fit"} border-r border-r-neutral-800`}>
      <nav className="text-neutral-500 text-base font-normal grid content-between min-h-dvh px-4 py-4">
        <ul>
          <li className="flex flex-col gap-8">
            <Link href="/" className="text-white px-0.5 py-0 w-fit -mt-0"><TbAnalyze className="size-10" /></Link>
            <ul className="flex flex-col gap-2">
              {mainData.map((data) => (
                <li key={data.title}>
                  <Link href={data.link} className={`flex items-center w-full gap-2 ${isActive(data.link) ? "text-white bg-neutral-800" : "bg-transparent"} hover:text-white hover:bg-neutral-800 px-2.5 py-2 rounded-xl`}>
                    {data.icon}
                    {isSidebarOpen && data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="settings" className={`flex items-center w-full gap-2 ${isActive("/settings") ? "text-white bg-neutral-900" : "bg-transparent"} hover:text-white hover:bg-neutral-900 px-2.5 py-2 rounded-xl`}>
              <TbSettings className="size-6" />
              {isSidebarOpen && "Settings"}
            </Link>
          </li>
          <li>
            <button onClick={toggleSidebar} className="cursor-pointer px-2.5 py-2 text-neutral-500 hover:text-white font-normal flex gap-2 items-center w-full hover:bg-neutral-800 rounded-xl">
              {isSidebarOpen ? <TbArrowLeftBar className="size-6" /> : <TbArrowRightBar className="size-6" />}
              {isSidebarOpen && <span>Close Bar</span>}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
