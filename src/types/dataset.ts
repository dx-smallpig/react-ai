export type DatasetFormProps = {
  name: string;
  description?: string;
};

export type DatasetItem = {
  id: string;
  chroma_name: string;
  name: string;
  description: string;
  create_time: string;
  update_time: string;
};
