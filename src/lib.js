import { createApp } from "vue";
import LibraryApp from "./LibraryApp.vue";

export const mountLibraryApp = (element) => {
    createApp(LibraryApp).mount(element);
};
