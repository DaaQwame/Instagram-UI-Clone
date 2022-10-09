import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueAuthenticate from "vue-authenticate-2";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

let top = window.screen.height - 300;
top = top > 0 ? top / 2 : 0;

let left = window.screen.width - 400;
left = left > 0 ? left / 2 : 0;

createApp(App)
  .use(VueAxios, axios)
  .use(VueAuthenticate, {
    baseUrl: "http://localhost:3000", // Your API domain
    providers: {
      instagram: {
        clientId: "880402616271921",
        // clientSecret: "b617c27b7eccc86ba6d0e44169829a48",
        redirectUri: window.location.href, // Your client app URL
        popupOptions: { width: 452, height: 633, top: top, left: left },
      },
    },
  })
  .use()
  .use(router)
  .mount("#app");
