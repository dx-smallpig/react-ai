import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// function DatasetItem() {
//   return (
//     <div className='flex flex-col items-center justify-center h-[10rem] w-[10rem] bg-[#f5f5f5] rounded-[0.05rem]'>
//       <div className='flex items-center justify-center h-[5rem] w-[5rem] bg-[#f5f5f5] rounded-[0.05rem]'>
//         <PlusOutlined />
//       </div>
//     </div>
//   )
// }

export default function LayoutPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="font-bold text-[0.2rem]">我的知识库</div>
        <Button type="primary" icon={<PlusOutlined />}>
          新建
        </Button>
      </div>
      <div className="flex-1 py-16 overflow-scroll"></div>
    </div>
  );
}
