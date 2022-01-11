<template>
  <section class="relative w-9/12 mx-auto">
    <transition name="slide-fade">
      <HeroContent v-if="current === 'main'"/>
    </transition>
    <transition name="slide-fade">
      <WebDev class="z-50 top-0 absolute" v-if="current === 'WebDev'"/>
    </transition>
    <transition name="slide-fade">
      <Freelancing class="z-50 top-0 absolute" v-if="current === 'Freelancing'"/>
    </transition>
  </section>
</template>

<script>
import HeroContent from '@/components/views/HeroContent';
import WebDev from '@/components/views/WebDev';
import Freelancing from '@/components/views/Freelancing';

export default {
  name: "MainContent",
  components: {
    Freelancing,
    HeroContent,
    WebDev
  },
  props: ['current'],
  mounted() {
    console.log(this.current);
  }
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
