import { getInstance } from "@/services";
import { Employee } from "@/interfaces";

const request = async (): Promise<Employee | null> => {
  let response = null;
  response = await getInstance().get(`/employee`);
  if (!response) {
    return null;
  }
  return response.data;
};

export default request;
