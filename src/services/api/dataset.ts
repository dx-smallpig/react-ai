import requests from "../index";
import type { DatasetFormProps } from "@/types/dataset";

export const createDataset = (data: DatasetFormProps) =>
  requests.post("/dataset/index/createDataset", data);

export const getDatasetList = () =>
  requests.get("/dataset/index/getDatasetList");
