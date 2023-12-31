<template>
  <div>
    <v-navigation-drawer
      :rail="temporary == true ? false : rail"
      v-model="drawer"
      :temporary="temporary"
      :permanent="!temporary"
      class="pt-4"
      color="primary"
    >
      <div class="d-flex flex-column h-100">
        <v-list-item
          nav
          :prepend-avatar="logo"
          :title="appName"
          class="mb-3"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list nav>
          <div v-for="item in sideNavigation" :key="item.title" :value="item.title">
            <v-list-group v-if="item.subs" :value="item.title">
              <template v-slot:activator="{ props }">
                <v-list-item
                  nav
                  v-bind="props"
                  :prepend-icon="item.icon"
                  :title="item.title"
                ></v-list-item>
              </template>
              <div class="bg-grey-darken-4" style="border-radius: 4px">
                <v-list-item
                  density="compact"
                  style="padding-left: 12px !important"
                  v-for="(sub, i) in item.subs"
                  :key="i"
                  :title="sub.title"
                  :value="sub.title"
                  @click="() => openPage(sub.path)"
                >
                  <template v-slot:title>
                    <div style="font-size: 12px">{{ sub.title }}</div>
                  </template>
                  <template v-slot:prepend>
                    <v-icon size="16" :icon="sub.icon"></v-icon>
                  </template>
                </v-list-item>
              </div>
            </v-list-group>
            <v-list-item
              v-else
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.title"
              @click="() => openPage(item.path)"
            ></v-list-item>
          </div>
        </v-list>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item
            :prepend-icon="rail == false ? mdiChevronLeft : mdiChevronRight"
            title="Collapse"
            @click="rail = !rail"
          ></v-list-item>
        </v-list>
        <!-- <v-btn
            v-if="mobile == false"
            icon
            color="transparent"
            @click="navStore.toggleDrawer"
            class="mr-1 mb-3"
          >
            <v-icon
              color="white"
              :icon="navStore.railState == false ? mdiChevronLeft : mdiChevronRight"
            ></v-icon>
          </v-btn> -->
      </div>
    </v-navigation-drawer>
    <v-app-bar density="compact" color="white" elevation="0">
      <template v-slot:prepend>
        <div class="d-flex align-center">
          <v-app-bar-nav-icon
            v-if="mobile == true"
            @click="drawer = !drawer"
            size="small"
          ></v-app-bar-nav-icon>
          <div class="ml-1 text-body-1 text-primary">
            {{ appName + " - Admin Panel" }}
          </div>
        </div>
      </template>
      <v-spacer></v-spacer>
      <v-btn size="36" class="mx-2" icon variant="flat">
        <v-icon color="grey-darken-1" :icon="mdiBellOutline"></v-icon>
      </v-btn>
      <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
        <template v-slot:activator="{ props }">
          <v-avatar
            color="grey-lighten-3"
            :size="36"
            class="d-flex align-center justify-center mr-3"
            v-bind="props"
            style="cursor: pointer"
          >
            <div>{{ printInitials(authStore.user.username) }}</div>
          </v-avatar>
        </template>
        <v-card min-width="300" class="rounded-lg mt-1">
          <div class="d-flex align-center pa-3">
            <v-avatar
              color="grey-lighten-3"
              :size="36"
              class="d-flex align-center justify-center mr-3"
              style="cursor: pointer"
            >
              <div>{{ printInitials(authStore.user.username) }}</div>
            </v-avatar>
            <div>
              <div class="text-body-1">{{ authStore.user.username }}</div>
              <div class="text-caption">{{ authStore.user.email }}</div>
            </div>
          </div>
          <v-divider></v-divider>
          <v-list nav density="compact" class="d-flex flex-column">
            <v-list-item
              :prepend-icon="mdiAccount"
              title="Account Settings"
              @click="() => openPage('Account')"
            ></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <div class="pa-3">
            <v-btn @click="logout" width="100%" color="primary"> Logout </v-btn>
          </div>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useDisplay } from "vuetify";
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiHomeOutline,
  mdiBellOutline,
  mdiAccountGroup,
  mdiAccount,
  mdiCog,
  mdiPlaylistEdit,
  mdiDomain,
  mdiOfficeBuilding,
} from "@mdi/js";
import { useAuthStore } from "@/stores/auth";
import { printInitials } from "@/composables/printInitials";
import { useRouter } from "vue-router";
const router = useRouter();
const { mobile } = useDisplay();
const appName = ref(import.meta.env.VITE_APP_NAME);
const logo = ref(window.location.origin + "/assets/images/fav.png");
const menu = ref(false);
const rail = ref(true);
const drawer = ref(true);
const temporary = ref(false);
const authStore = useAuthStore();

const prop = defineProps({
  auth: {
    type: Object,
    default: null,
  },
});

const sideNavigation = ref([
  {
    title: "Dashboard",
    icon: mdiHomeOutline,
    path: "/admin",
  },
  {
    title: "Users",
    icon: mdiAccountGroup,
    path: "/admin/users",
  },
  {
    title: "Logs",
    icon: mdiPlaylistEdit,
    path: "/admin/logs",
  },
  {
    title: "Settings",
    icon: mdiCog,
    subs: [
      {
        title: "Companies",
        icon: mdiDomain,
        path: "/admin/companies",
      },
      {
        title: "Departments",
        icon: mdiOfficeBuilding,
        path: "/admin/departments",
      },
    ],
  },
]);
const openPage = (path) => {
  router.push(path).catch((err) => {
    console.log(err);
  });
};
const logout = () => {
  console.log("/logout");
};

// set auth in pinia js
authStore.setUser(prop.auth);

// watch for changes
watch(prop, () => {
  authStore.setUser(prop.auth);
});

// check orientation
watch(mobile, async (newMobileValue, oldMobileValue) => {
  if (newMobileValue == true) {
    drawer.value = false;
    temporary.value = true;
  } else {
    drawer.value = true;
    temporary.value = false;
  }
});
onMounted(() => {
  if (mobile.value == true) {
    drawer.value = false;
    temporary.value = true;
  } else {
    drawer.value = true;
    temporary.value = false;
  }
});
</script>
