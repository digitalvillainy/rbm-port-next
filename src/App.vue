<template>

<!-- TODO: Implement Vue router -->
  <div class="min-h-screen overflow-x-hidden bg-gradient-to-b from-primary-darker via-primary to-primary-light">
    <NavBar @change-view="changePage"/>
    <MainContent :current="page"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import MainContent from '@/MainContent';

export default {
  name: 'App',
  components: {
    NavBar,
    MainContent
  },
  data() {
    return {
      page: 'main'
    }
  },
  methods: {
    changePage(view) {
      console.log(view);
      if (view !== 'main') {
        window.location.pathname = view;
        this.page = view;
      } else {
        this.page = view;
      }
    }
  }
}
</script>
