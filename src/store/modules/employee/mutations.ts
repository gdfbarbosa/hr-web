import { State } from "./state";
import { MutationTree } from "vuex";
import { Employee } from "@/interfaces";

const mutations: MutationTree<State> = {
  updateEmployees(state: State, employeeList: Employee[]) {
    console.log("updateActivity", employeeList);
    state.employeeList = employeeList;
  },
  removeEmployeeById(state: State, id) {
    state.employeeList = state.employeeList.reduce(
      (previous: Employee[], current: Employee) => {
        if (current._id === id) {
          return previous;
        }
        return [...previous, current];
      },
      []
    );
  },
};

export default mutations;
