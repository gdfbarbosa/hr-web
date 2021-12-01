import { State } from "./state";
import { ActionTree, ActionContext } from "vuex";
import { getEmployees, deleteEmployee } from "@/services";

const actions: ActionTree<State, State> = {
  async fetchEmployees(context: ActionContext<State, State>) {
    const employees = await getEmployees();
    context.commit("updateEmployees", employees);
  },
  async deleteEmployeeById(context: ActionContext<State, State>, id: string) {
    const result = await deleteEmployee(id);
    if (result) {
      context.commit("removeEmployeeById", id);
    }
  },
};

export default actions;
