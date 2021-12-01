import { Employee } from "@/interfaces";

interface StateInterface {
  employeeList: Employee[];
  employee: Employee;
}

const state: StateInterface = {
  employeeList: [],
  employee: {
    _id: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
  },
};

export type State = typeof state;
export const initialState = { ...state };
export default state;
