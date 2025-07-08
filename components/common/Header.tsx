import React from 'react'
import { TbBell } from 'react-icons/tb'

export default function Header() {
  return (
    <header className="border-b border-b-neutral-800 text-white">
      <nav className="px-4 py-4 text-sm font-normal">
        <ul className="flex items-center gap-4">
          <li>
            <input type="search" name="search" id="search" placeholder="Search here" className="px-3.5 py-2 bg-neutral-900 rounded-full border border-neutral-800" />
          </li>
          <li>
            <button className="cursor-pointer group ps-2.5 pe-1 py-1 flex items-center gap-2.5 bg-neutral-900 rounded-full border border-neutral-800">
              <div className="relative">
                <div className="size-1.5 rounded-full bg-orange-600 absolute top-0 -right-1"></div>
                <TbBell className="size-5" />
              </div>
              <div className="bg-neutral-800 group-hover:bg-orange-600 px-3.5 py-1 rounded-full">
                {"2 new"}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
