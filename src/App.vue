<template>
  <div class="min-h-screen overflow-x-hidden bg-gradient-to-b from-primary-darker via-primary to-primary-light">
    <NavBar/>
    <HeroContent/>
    <WebDev/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import HeroContent from '@/components/views/HeroContent';
import WebDev from '@/components/views/WebDev';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroContent,
    WebDev
  }
}
</script>

<style></style>
