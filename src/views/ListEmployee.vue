<template>
  <div id="app">
    <v-container>
      <h1>My employees</h1>
      <v-data-table
        :headers="headers"
        :items="employeeList"
        :items-per-page="5"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editEmployee(item._id)">mdi-pencil</v-icon>
          <v-icon small @click="deleteEmployee(item._id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/composition-api";
import { Employee } from "../interfaces";
import { useStore } from "../store";

export default defineComponent({
  name: "ListEmployee",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      console.log("onMounted");
      store.dispatch("fetchEmployees");
    });

    const headers = [
      {
        text: 'Id',
        value: '_id',
        align: 'left',
        sortable: false
      },
      {
        text: 'First Name',
        value: 'firstName',
        align: 'left',
        sortable: false
      },
      {
        text: 'Last Name',
        value: 'lastName',
        align: 'left',
        sortable: false
      },
      {
        text: 'Gender',
        value: 'gender',
        align: 'left',
        sortable: false
      },
      {
        text: 'Birthdate',
        value: 'birthDate',
        align: 'left',
        sortable: false
      },
      { text: "Actions", value: "actions", sortable: false },];

    const employeeList = computed<Employee[]>(() => store.getters.getEmployees);

    const deleteEmployee = (id: string) => {
      store.dispatch("deleteEmployeeById", id);
    };

    return {
      employeeList,
      headers,
      deleteEmployee,
    };
  },
});
</script>
