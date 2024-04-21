import SidenavCenterLayout from "@/components/layouts/sidenav-center";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HRLayout({ children }: Props) {
  return <SidenavCenterLayout tipe="hrd">{children}</SidenavCenterLayout>;
}
