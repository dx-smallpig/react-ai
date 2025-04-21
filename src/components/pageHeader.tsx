import { useSystemStore } from "@/stores/systemStore";
import { Button } from "antd";

export default function PageHeader() {
  const { sideOpenToggle } = useSystemStore();

  return (
    <div className="flex items-center pt-8 pb-8">
      <Button className="pl-7! pr-7!" onClick={sideOpenToggle}>
        <i className="iconfont icon-sidebarcebianlan" />
      </Button>
    </div>
  );
}
