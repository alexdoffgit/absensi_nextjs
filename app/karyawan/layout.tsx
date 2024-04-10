import SidenavCenterLayout from "@/components/layouts/sidenav-center";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function KaryawanLayout({ children }: Props) {
  return <SidenavCenterLayout tipe="karyawan">{children}</SidenavCenterLayout>;
}
