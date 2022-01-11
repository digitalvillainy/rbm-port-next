<template>
  <section class="flex flex-row justify-between">
    <div class="bg-white rounded-xl bg-opacity-20 px-5 pb-5 pt-10 m-4 w-2/6 flex flex-col justify-between">
      <div>
        <h4 class="text-2xl text-rbm-red font-bold">
          Full Stack Freelancing
        </h4>
        <p class="text-white mt-7">
          Looking to augment your currently existing project/team quickly?
          Hire us to jump in and work for you.
        </p>
        <p class="text-white mt-4">
          These are the open-source technologies, that we use for all of our projects. Don't see something that you're
          company uses?
        </p>
        <p class="text-white mt-4">Feel free to contact us as we are learning new technologies everyday and maybe able to
          help.
        </p>
      </div>
      <FreeStackFreelancing class="h-64 w-64 self-center"/>
    </div>


    <div class="flex flex-col mx-10">
      <div class="bg-white rounded-xl bg-opacity-20 p-5 my-4 w-full flex flex-row justify-between">
        <div class="w-5/6">
          <h4 class="text-2xl text-rbm-red font-bold">
            Front-End Development
          </h4>
          <FrontEndDev class="h-52 w-52"/>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-row m-2 justify-between place-items-end">
            <HtmlIcon/>
            <JavaScriptIcon/>
            <CssIcon/>
          </div>
          <div class="flex flex-row m-2 justify-between place-items-end">
            <VueIcon/>
            <TailwindIcon class="-mb-1"/>
            <BootstrapIcon class="-mb-1"/>
          </div>
          <div class="flex flex-row m-2 justify-between place-items-end">
            <AlpineIcon class="h-20 w-20 -mb-4"/>
            <SassIcon class="h-16 w-16"/>
            <JqueryIcon class="h-16 w-16 -mb-2"/>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl bg-opacity-20 p-5 my-4 w-full flex flex-row justify-between">
        <div class="w-5/6">
          <h4 class="text-2xl text-rbm-red font-bold">
            Software & Tools
          </h4>
          <SoftwareTools class="h-52 w-52 -ml-4"/>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex flex-row m-2 justify-between place-items-end">
            <GithubTitleIcon/>
            <GitIcon/>
            <Vagrant/>
          </div>
          <div class="flex flex-row place-items-end">
            <ApacheIcon/>
            <DockerIcon/>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl bg-opacity-20 px-5 pb-5 pt-10 m-4 w-2/6 flex flex-col justify-between">
      <div class="flex flex-col justify-start">
        <h4 class="text-2xl text-rbm-red text-center font-bold">
          Back-End Development
        </h4>
        <BackEndDev class="h-64 w-64 self-center align-top"/>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between place-items-center">
          <php-icon class="h-20 w-20"/>
          <MysqlIcon class="h-20 w-20"/>
          <NodeIcon class="h-20 w-20"/>
        </div>
        <div class="flex flex-row justify-between place-items-end my-4">
          <LaravelIcon class="h-20 w-20"/>
          <ExpressIcon class="h-20 w-20"/>
          <BashIcon class="h-20 w-20"/>
        </div>


      </div>


    </div>
  </section>
</template>

<script>
import FreeStackFreelancing from '@/components/illustrations/FreeStackFreelancing';
import FrontEndDev from '@/components/illustrations/FrontEndDev';
import SoftwareTools from '@/components/illustrations/SoftwareTools';
import BackEndDev from '@/components/illustrations/BackEndDev';
import HtmlIcon from '@/components/icons/HtmlIcon';
import JavaScriptIcon from '@/components/icons/JavaScriptIcon';
import CssIcon from '@/components/icons/CssIcon';
import VueIcon from '@/components/icons/VueIcon';
import TailwindIcon from '@/components/icons/TailwindIcon';
import BootstrapIcon from '@/components/icons/BootstrapIcon';
import AlpineIcon from '@/components/icons/AlpineIcon';
import SassIcon from '@/components/icons/SassIcon';
import JqueryIcon from '@/components/icons/JqueryIcon';
import GitIcon from '@/components/icons/GitIcon';
import Vagrant from '@/components/icons/Vagrant';
import ApacheIcon from '@/components/icons/ApacheIcon';
import DockerIcon from '@/components/icons/DockerIcon';
import GithubTitleIcon from '@/components/icons/GithubTitleIcon';
import PhpIcon from '@/components/icons/PhpIcon';
import MysqlIcon from '@/components/icons/MysqlIcon';
import NodeIcon from '@/components/icons/NodeIcon';
import LaravelIcon from '@/components/icons/LaravelIcon';
import ExpressIcon from '@/components/icons/ExpressIcon';
import BashIcon from '@/components/icons/BashIcon';

export default {
  name: "Freelancing",
  components: {
    BackEndDev,
    SoftwareTools,
    FreeStackFreelancing,
    FrontEndDev,
    HtmlIcon,
    JavaScriptIcon,
    CssIcon,
    VueIcon,
    TailwindIcon,
    BootstrapIcon,
    AlpineIcon,
    SassIcon,
    JqueryIcon,
    GithubTitleIcon,
    GitIcon,
    Vagrant,
    ApacheIcon,
    DockerIcon,
    BashIcon,
    ExpressIcon,
    LaravelIcon,
    NodeIcon,
    MysqlIcon,
    PhpIcon
  }
}
</script>

<style scoped>

</style>