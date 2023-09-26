<template>
  <v-container>
    <PageHeader title="Registered Users" />
    <v-row class="mb-3">
      <div class="v-col-12">
        <v-card :loading="users.loading">
          <v-card-title class="text-primary text-capitalize">Users</v-card-title>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left text-capitalize">First Name</th>
                <th class="text-left text-capitalize">Last Name</th>
                <th class="text-left text-capitalize">Email</th>
                <th class="text-left text-capitalize">Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users.data" :key="item.id">
                <td>{{ item.first_name }}</td>
                <td>{{ item.last_name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone_no }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet v-if="users.data.length == 0" class="pa-3 text-center w-100"
            >No records found</v-sheet
          >
        </v-card>
        <v-pagination
          v-if="totalPageCount > 1"
          v-model="currentPage"
          class="my-4"
          :length="totalPageCount"
          :total-visible="8"
          variant="elevated"
          active-color="primary"
          density="comfortable"
        ></v-pagination>
      </div>
    </v-row>
    <v-row>
      <div class="v-col-12">
        <!-- content -->
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";
import PageHeader from "@/components/PageHeader.vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
// users
const users = ref({
  loading: false,
  data: [],
});
const totalPageCount = ref(0);
const totalResult = ref(0);
const currentPage = ref(route.params && route.params.page ? route.params.page : 1);
const getAllUsers = async (page) => {
  users.value.loading = true;
  await axios
    .get("/admin/user/registered?page=" + page)
    .then((res) => {
      console.log("res", res);
      totalPageCount.value = res.data.last_page;
      currentPage.value = res.data.current_page;
      totalResult.value = res.data.total;
      users.value.data = res.data.data;
      users.value.loading = false;
    })
    .catch((err) => {
      users.value.loading = false;
      console.log(err);
    });
};
getAllUsers(currentPage.value);
watch(currentPage, (newValue, oldValue) => {
  if (newValue != oldValue) {
    router
      .push({
        name: "PaginatedRegisteredUsers",
        params: {
          page: currentPage.value,
        },
      })
      .catch((err) => {});
    getAllUsers(currentPage.value);
  }
});
</script>
