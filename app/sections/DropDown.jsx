"use client"
import { useState } from 'react'

export default function DropDown() {
  const [isDropdownActive, setIsDropdownActive] = useState(false)

  return (
    <section className="h-[300px] w-full p-8">
      {/* the relative container keeps the absolute dropdown positioned right below the button */}
      <div className="relative inline-block">
        
        <button 
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          className="bg-blue-400 text-white px-4 py-2"
        >
          Toggle Menu
        </button>

        {isDropdownActive ? (
          <div className="absolute left-0 mt-2 w-40 flex flex-col bg-gray-200 shadow-lg overflow-hidden">
            <button className="p-2 hover:bg-gray-300 text-black">Option 1</button>
            <button className="p-2 hover:bg-gray-300 text-black">Option 2</button>
            <button className="p-2 hover:bg-gray-300 text-black">Option 3</button>
          </div>
        ) : (
          <>
            {/* Renders nothing when false */}
          </>
        )}

      </div>
    </section>
  )
}