import { PropsWithChildren } from "react";
import SidenavKaryawan from "@/components/sidenav/karyawan";

type Props = {
  tipe: SidenavOptions;
};

type SidenavOptions = "karyawan" | "atasan" | "hrd";

function UsedSidenav(props: Props) {
  if (props.tipe === "karyawan") {
    return <SidenavKaryawan />;
  }

  return <div className="bg-slate-950"></div>;
}

export default function SidenavCenterLayout(props: PropsWithChildren<Props>) {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="lg:col-span-2 col-span-5">
        <UsedSidenav tipe={props.tipe} />
      </div>
      <div className="lg:col-span-10 col-span-7">{props.children}</div>
    </div>
  );
}
