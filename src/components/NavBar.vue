<template>
  <div class="flex flex-row justify-between">
    <rbm-logo-title class="h-32 w-32 ml-6 -mt-4 cursor-pointer"
                    @click="$emit('change-view', 'main')"/>
    <!--  Mobile navigation  -->
    <div v-if="!hideNav" class="p-5 xl:hidden">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="fill-current text-white h-8 w-8 hover:text-rbm-red cursor-pointer"
           @click="toggleBurger"
           viewBox="0 0 20 20"
      >
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
      </svg>
    </div>
    <div class="flex flex-col w-3/12 h-64 xl:hidden bg-primary rounded-xl" v-if="hideNav">
      <ul class="flex flex-col justify-end pl-4 py-4 pr-2">
        <li class="flex flex-row justify-end" @click="toggleBurger">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="fill-current text-white h-8 w-8 hover:text-rbm-red cursor-pointer"
               viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071
                       1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </li>
        <li @click="$emit('change-view', 'WebDev')"
            class="text-white text-2xl border-b-4 border-white text-right select-none
                     hover:text-rbm-red hover:border-rbm-red mx-2 cursor-pointer my-2 self-end"
        >
          Web Development
        </li>
        <li @click="$emit('change-view', 'Freelancing')"
            class="text-white text-2xl border-b-4 border-white text-right select-none
                     hover:text-rbm-red hover:border-rbm-red mx-2 cursor-pointer w-6/12 my-2 self-end"
        >
          Freelancing
        </li>
        <li class="text-white text-2xl border-b-4 border-white text-right select-none
                     hover:text-rbm-red hover:border-rbm-red mx-2 cursor-pointer w-6/12 my-2 self-end"
            @click="toggleContact"
        >
          Contact Us
        </li>
      </ul>
      <div class="flex flex-row justify-end self-end w-6/12 mx-5" v-if="hideContact">
        <EnvelopeIcon class="mx-1 h-6 w-6"/>
        <TwitterIcon class="mx-1 h-6 w-6"/>
        <LinkedinIcon class="mx-1 h-6 w-6"/>
        <GithubIcon class="mx-1 h-6 w-6"/>
      </div>
    </div>
    <!--  Desktop navigation  -->
    <div class="xl:flex flex-col hidden">
      <ul class="flex xl:flex-row pl-4 py-4 pr-2">
        <li @click="$emit('change-view', 'WebDev')"
            class="text-white text-2xl border-b-4 border-white text-center self-center select-none
                     hover:text-rbm-red hover:border-rbm-red mx-2 cursor-pointer my-2 w-52 self-end"
        >
          Web Development
        </li>
        <li @click="$emit('change-view', 'Freelancing')"
            class="text-white text-2xl border-b-4 border-white text-center self-center select-none
                     hover:text-rbm-red hover:border-rbm-red mx-2 cursor-pointer w-32 my-2 self-end"
        >
          Freelancing
        </li>
        <li @click="toggleContact"
            class="text-white text-2xl border-b-4 border-white text-center self-center select-none
                     hover:text-rbm-red hover:border-rbm-red mx-2 cursor-pointer w-32 my-2 self-end"
        >
          Contact Us
        </li>
      </ul>
      <div class="flex flex-row justify-end self-end mx-5" v-if="hideContact">
        <EnvelopeIcon class="mx-1 h-6 w-6"/>
        <TwitterIcon class="mx-1 h-6 w-6"/>
        <LinkedinIcon class="mx-1 h-6 w-6"/>
        <GithubIcon class="mx-1 h-6 w-6"/>
      </div>
    </div>
  </div>
</template>

<script>

import RbmLogoTitle from '@/components/icons/RbmLogoTitle';
import EnvelopeIcon from '@/components/icons/EnvelopeIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import GithubIcon from '@/components/icons/GithubIcon';

export default {
  name: "NavBar",
  components: {
    RbmLogoTitle,
    EnvelopeIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon
  },
  data() {
    return {
      hideNav: false,
      hideContact: false
    }
  },
  methods: {
    toggleBurger() {
      this.hideNav = !this.hideNav;
    },
    toggleContact() {
      this.hideContact = !this.hideContact;
    }
  }
}
</script>

<style scoped>

</style>