"use client";

import { useReducer } from "react";
import Link from "next/link";
import { produce } from "immer";
import Logout from "@/components/icons/logout";
import User from "@/components/icons/user";

const links = {
  absensi: {
    absensiPribadi: "/hr/absensi/absensi-pribadi",
    absensiSeluruh: "/hr/absensi/absensi-seluruh",
  },
  izin: {
    izinPribadi: "/hr/izin/izin-pribadi",
    persetujuanIzin: "hr/izin/persetujuan-izin",
  },
  jadwal: {
    karyawan: "/hr/jadwal/karyawan",
    shift: "/hr/jadwal/shift",
  },
};

const initialDropdownState = {
  absensi: false,
  izin: false,
  jadwal: false,
};

type DropdownState = {
  absensi: boolean;
  izin: boolean;
  jadwal: boolean;
};

const ACTION_TYPE = {
  ABSENSI: "absensi",
  IZIN: "izin",
  JADWAL: "jadwal",
};

type DropdownAction = {
  type: string;
};

function reducer(state: DropdownState, action: DropdownAction) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_TYPE.ABSENSI:
        draft.absensi = !draft.absensi;
        break;
      case ACTION_TYPE.IZIN:
        draft.izin = !draft.izin;
        break;
      case ACTION_TYPE.JADWAL:
        draft.jadwal = !draft.jadwal;
        break;
      default:
        throw new Error("undefined action");
    }
  });
}

export default function SidenavHR() {
  const [state, dispatch] = useReducer(reducer, initialDropdownState);

  const absensiDropdownStyle = state.absensi ? "flex flex-col" : "hidden";
  const izinDropdownStyle = state.izin ? "flex flex-col" : "hidden";
  const jadwalDropdownStyle = state.jadwal ? "flex flex-col" : "hidden";

  return (
    <div className="flex bg-slate-950 h-full flex-col justify-between">
      <div id="beginning">
        <div
          id="logo"
          className={`
            text-red-600 text-center py-5 
            lg:text-4xl text-5xl border-b-2 
            font-bold mx-3
          `}>
          Wonokoyo
        </div>
        <nav>
          <ul className="flex flex-col">
            <li className="mt-1">
              <div className="flex flex-col">
                <p
                  className="text-gray-200 pl-4 py-1 cursor-pointer hover:bg-slate-600"
                  onClick={() => dispatch({ type: ACTION_TYPE.ABSENSI })}>
                  Absensi
                </p>
                <div className={absensiDropdownStyle}>
                  <Link
                    href={links.absensi.absensiPribadi}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600">
                    Absen Pribadi
                  </Link>
                  <Link
                    href={links.absensi.absensiSeluruh}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600">
                    <p>Absensi Seluruh</p>
                    <p>Karyawan</p>
                  </Link>
                </div>
              </div>
            </li>
            <li className="mt-1">
              <div className="flex flex-col">
                <p
                  className="text-gray-200 pl-4 py-1 cursor-pointer hover:bg-slate-600"
                  onClick={() => dispatch({ type: ACTION_TYPE.IZIN })}>
                  Izin
                </p>
                <div className={izinDropdownStyle}>
                  <Link
                    href={links.izin.izinPribadi}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600">
                    Izin Pribadi
                  </Link>
                  <Link
                    href={links.izin.persetujuanIzin}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600">
                    Review Izin
                  </Link>
                </div>
              </div>
            </li>
            <li className="mt-1">
              <div className="flex flex-col">
                <p
                  className="text-gray-200 pl-4 py-1 cursor-pointer hover:bg-slate-600"
                  onClick={() => dispatch({ type: ACTION_TYPE.JADWAL })}>
                  Jadwal
                </p>
                <div className={jadwalDropdownStyle}>
                  <Link
                    href={links.jadwal.karyawan}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600">
                    Karyawan Tetap
                  </Link>
                  <Link
                    href={links.jadwal.shift}
                    className="text-gray-200 pl-8 py-1 hover:bg-slate-600">
                    Shift
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div id="end">
        <div className="border mx-3"></div>
        <div
          id="logout-group"
          className="my-5 flex items-center pl-2 py-1 hover:bg-slate-600 gap-2">
          <Logout className="text-slate-200 w-8" />
          <span className="text-slate-200">Logout</span>
        </div>
        <div className="border mx-3"></div>
        <div
          id="profile-group"
          className="my-5 flex items-center pl-2 py-1 hover:bg-slate-600 gap-2">
          <User className="text-slate-200 w-8" />
          <span className="text-slate-200">Nama Karyawan</span>
        </div>
      </div>
    </div>
  );
}
