"use client"

import Link from "next/link"
import { useState } from "react"
import Logout from "@/components/icons/logout"
import User from "@/components/icons/user"

export default function SidenavKaryawan() {
  const [ dropdown, setDropdown ] = useState(false)

  const izinSubStyle = dropdown ? "flex flex-col" : "hidden"

  return (
    <div className="flex bg-slate-950 h-full flex-col justify-between">
      <div id="beginning" className="flex flex-col">
        <div 
          id="logo" 
          className={`
            text-red-600 text-center py-5 
            lg:text-4xl text-5xl border-b-2 
            font-bold mx-3
          `}
        >
          Wonokoyo
        </div>
        <nav>
          <ul className="flex flex-col">
            <li className="mt-1 py-1 hover:bg-slate-600">
              <Link 
               href={"/karyawan/absensi"} 
               className="text-gray-200 block pl-4"
              >
                Absensi
              </Link>
            </li>
            <li className="mt-1">
              <div className="flex flex-col">
                <p 
                 className="text-gray-200 py-1 cursor-pointer pl-4 hover:bg-slate-600"
                 onClick={() => setDropdown(s => !s)}
                >
                  Izin
                </p>
                <div id="izin-submenu" className={izinSubStyle}>
                  <Link 
                    href={"/karyawan/izin/pengajuan-izin"}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600"
                  >
                    Pengajuan Izin
                  </Link>
                  <Link
                    href={`/karyawan/izin/tracking-izin`}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600"
                  >
                    Tracking Izin
                  </Link>
                </div>
              </div>
            </li>
            <li className="my-1">
              <Link href={`/karyawan/jadwal`} className="text-gray-200 block py-1 pl-4 hover:bg-slate-600">Jadwal</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="end" className="flex flex-col">
        <div className="border mx-3"></div>
        <div id="logout-group" className="my-5 flex items-center pl-2 py-1 hover:bg-slate-600 gap-2">
          <Logout className="text-slate-200 w-8"/>
          <span className="text-slate-200">Logout</span>
        </div>
        <div className="border mx-3"></div>
        <div id="profile-group" className="my-5 flex items-center pl-2 py-1 hover:bg-slate-600 gap-2">
          <User className="text-slate-200 w-8" />
          <span className="text-slate-200">Nama Karyawan</span>
        </div>
      </div>
    </div>
  )
}