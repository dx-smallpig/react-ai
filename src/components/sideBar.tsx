import { useSystemStore } from "@/stores/systemStore";
import useEquipmentType from "@/hooks/useEquipmentType";
import type { sideMenuItem } from "@/types/index";
import { useLocation, useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = "2.56rem";
const SIDEBAR_WIDTH_CLOSE = "0.64rem";
const SIDEBAR_WIDTH_MOBILE = "2.88rem";

export default function SideBar() {
  const { sideOpen, getSideMenu } = useSystemStore();
  const equipmentType = useEquipmentType();
  const location = useLocation();
  const navigate = useNavigate();

  const sideBarStyle = {
    width: SIDEBAR_WIDTH,
    transition: "width 0.2s ease-in-out",
  };
  if (equipmentType === "Mobile") {
    sideBarStyle.width = SIDEBAR_WIDTH_MOBILE;
  } else {
    sideBarStyle.width = sideOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_CLOSE;
  }

  const goToRoute = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col" style={sideBarStyle}>
      <div className="flex items-center p-8">
        <div className="bg-black min-w-[0.48rem] rounded-[0.1rem] flex justify-center items-center h-[0.48rem] mr-[0.08rem]">
          <i className="iconfont icon-gengduo text-white text-[0.26rem]!" />
        </div>
        <div className="text-[0.18rem] overflow-hidden truncate">
          <div className="font-bold">React AI</div>
          <div className="text-[0.16rem]">react + vite</div>
        </div>
      </div>
      {getSideMenu().map((item) => {
        return (
          <div key={item.belongs} className="p-8 flex flex-col gap-[0.04rem]">
            {sideOpen && (
              <div className="h-[0.32rem] px-[0.08rem] text-[0.16rem] flex items-center text-[#020618b3]">
                {item.belongs}
              </div>
            )}
            {item.children.map((child: sideMenuItem) => {
              return (
                <div
                  className={`p-8 flex items-center cursor-pointer rounded-[0.1rem] hover:bg-[#F1F5F9] ${
                    location.pathname === child.path && "bg-[#F1F5F9]"
                  }`}
                  key={child.path}
                  style={{ gap: "0.08rem" }}
                  onClick={() => goToRoute(child.path)}
                >
                  <i className={`iconfont ${child.icon} text-[0.32rem]!`}></i>
                  <span className="truncate text-[0.18rem]">{child.title}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
