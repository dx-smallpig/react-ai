import { Button, Modal, Form, Input, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import type { DatasetFormProps, DatasetItem } from "@/types/dataset";
import { createDataset, getDatasetList } from "@/services/api/dataset";
import datasetSvg from "@/assets/images/dataset.svg";

interface FormModalProps {
  visible: boolean; // 控制模态框是否显示
  onClose: () => void; // 关闭模态框的回调函数
  onRefresh: () => void;
}

function FormModal({ visible, onClose, onRefresh }: FormModalProps) {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.validateFields().then(() => {
      const formData = form.getFieldsValue();
      createDataset(formData).then(() => {
        message.success("新建成功");
        onClose();
        onRefresh();
        form.resetFields();
      });
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="新建知识库"
      open={visible}
      onOk={onSubmit}
      onCancel={handleCancel}
      okText="确认"
      cancelText="取消"
    >
      <Form
        form={form}
        labelCol={{ span: 3 }}
        initialValues={{
          name: "",
          description: "",
        }}
      >
        <Form.Item<DatasetFormProps>
          label="名称"
          name="name"
          rules={[{ required: true, message: "请输入名称!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<DatasetFormProps> label="描述" name="description">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

function DatasetItem({ item }: { item: DatasetItem }) {
  return (
    <div className="border border-[#DFE2EA] rounded-[0.1rem] h-140 max-w-520 flex-1 bg-white shadow-[0px 4px 4px 0px rgba(19, 51, 107, 0.05),0px 0px 1px 0px rgba(19, 51, 107, 0.08)] hover:shadow-[0px 1px 2px 0px rgba(19, 51, 107, 0.10),0px 0px 1px 0px rgba(19, 51, 107, 0.15)] hover:border-[#94B5FF] cursor-pointer p-20">
      <div className="flex items-center gap-[0.08rem]">
        <img src={datasetSvg} alt="" className="w-28 rounded-[0.06rem]" />
        {item.name}
      </div>
      <div className="py-[0.12rem] text-[0.12rem] text-[#667085]">
        {item.description}
      </div>
    </div>
  );
}

export default function DatasetPage() {
  useEffect(() => {
    fetchDatasetList();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datasetList, setDatasetList] = useState<DatasetItem[]>([]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const fetchDatasetList = async () => {
    getDatasetList().then((res) => {
      setDatasetList(res.data);
    });
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="font-bold text-[0.2rem]">我的知识库</div>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          新建
        </Button>
      </div>
      <div className="flex-1 py-16 overflow-y-auto flex flex-wrap gap-[0.2rem]">
        {datasetList.map((item) => (
          <DatasetItem item={item} key={item.id} />
        ))}
      </div>

      <FormModal
        visible={isModalOpen}
        onClose={handleClose}
        onRefresh={fetchDatasetList}
      />
    </div>
  );
}
