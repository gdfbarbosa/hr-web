import { getInstance } from "@/services";
import { Employee } from "@/interfaces";

const request = async (id: string): Promise<Employee | null> => {
  let response = null;
  response = await getInstance().delete(`/employee/` + id);
  if (!response) {
    return null;
  }
  return response.data;
};

export default request;
