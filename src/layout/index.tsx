import SideBar from "@/components/sideBar";
import PageHeader from "@/components/pageHeader";
import useEquipmentType from "@/hooks/useEquipmentType";
import { Outlet } from "react-router-dom";

function PCLayout() {
  return (
    <>
      <div className="flex h-full">
        <div className="border m-8 rounded-[0.1rem] border-[#e2e8f0]">
          <SideBar />
        </div>
        <div className="flex-1">
          <PageHeader />
        </div>
        <Outlet />
      </div>
    </>
  );
}

function MobileLayout() {
  return (
    <>
      <div>MobileLayout</div>
    </>
  );
}

export default function LayoutPage() {
  const equipmentType = useEquipmentType();
  return <>{equipmentType === "Mobile" ? <MobileLayout /> : <PCLayout />}</>;
}
