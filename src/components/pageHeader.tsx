import { useSystemStore } from "@/stores/systemStore";
import { Button } from "antd";

export default function PageHeader() {
  const { sideOpenToggle } = useSystemStore();

  return (
    <div className="flex items-center">
      <Button onClick={sideOpenToggle}>
        <i className="iconfont icon-sidebarcebianlan" />
      </Button>
    </div>
  );
}
