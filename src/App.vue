<template>
  <div class="h-screen bg-gradient-to-b from-primary-darker via-primary to-primary-light">
    <NavBar/>
    <MainContent/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import MainContent from '@/components/views/MainContent';

export default {
  name: 'App',
  components: {
    NavBar,
    MainContent
  }
}
</script>

<style></style>
