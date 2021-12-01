import { State } from "./state";
import { GetterTree } from "vuex";

const getters: GetterTree<State, State> = {
  getEmployees(state: State) {
    return state.employeeList;
  },
};

export default getters;
