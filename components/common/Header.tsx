"use client";

import React from 'react'
import { TbBell, TbSearch } from 'react-icons/tb'
import { useAutoFocusOnClick } from '@/hooks/useAutoFocusOnClick';

export default function Header() {
  const { inputRef, containerProps } = useAutoFocusOnClick<HTMLInputElement>();

  return (
    <header className="border-b border-b-neutral-800 text-white">
      <nav className="px-4 py-4">
        <ul className="flex items-center gap-4 text-sm font-normal">
          <li>
            <div
              {...containerProps}
              className="w-96 flex items-center relative bg-neutral-900 rounded-full border-2 border-neutral-800 focus-within:border-orange-600 cursor-text"
            >
              <TbSearch className="size-6 ms-3.5" />
              <input
                ref={inputRef}
                type="search"
                name="search"
                id="search"
                placeholder="Search here"
                className="ps-2.5 pe-1 py-2 focus:outline-0 w-full placeholder-shown:text-neutral-200 bg-transparent text-white"
              />
            </div>
          </li>

          <li>
            <button className="cursor-pointer ps-3.5 pe-1 py-1 flex items-center gap-2.5 bg-neutral-900 rounded-full border-2 border-neutral-800">
              <div className="relative">
                <div className="size-1.5 rounded-full bg-orange-600 absolute top-0 -right-1"></div>
                <TbBell className="size-5" />
              </div>
              <div className="bg-neutral-800 px-3.5 py-1 rounded-full">
                {"2 new"}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
