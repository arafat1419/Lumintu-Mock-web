<template>
    <nav class="flex items-center justify-between py-4 px-9 font-sans">
        <div class="flex items-center text-blue-700 text-2xl font-bold">
            My Logo
        </div>
        <div class="flex space-x-6 hidden md:block">
            <a href="#" class="hover:text-blue-600">Home</a>
            <a href="#" class="hover:text-blue-600">Project</a>
            <a href="#" class="hover:text-blue-600">Galery</a>
            <a href="#" class="hover:text-blue-600">Contact</a>
        </div>

        <button @click="sidebar != sidebar" class="md:hidden">
            <span class="iconify text-2xl" data-icon="icon-park-outline:hamburger-button"></span>
        </button>

        <section class="md:hidden fixed right-0 top-0 z-20 px-24 bg-white shadow">
            <button @click="sidebar != sidebar" class="absolute right-12 group mt-9 flex justify-center">
                <span class="iconify text-xl group-hover:text-blue-600" data-icon="akar-icons:circle-x"></span>
            </button>
            
            <div class="mt-20 h-screen flex flex-col">
                <a href="#" class="py-5 hover:text-blue-600">Home</a>
                <a href="#" class="py-5 hover:text-blue-600">Project</a>
                <a href="#" class="py-5 hover:text-blue-600">Galery</a>
                <a href="#" class="py-5 hover:text-blue-600">Contact</a>
            </div>
        </section>
    </nav>
    <hr>
</template>

<script>
import { ref } from 'vue'
import SideBar from './SideBar.vue';

export default {
    components: {
        SideBar
    },
    setup() {
        let sidebar = ref(false);

        return { sidebar }
    },
}
</script>