<template>
  <section class="flex flex-row justify-between mt-36">
    <div class="bg-white rounded-xl bg-opacity-20 p-5 m-4 w-2/6 flex flex-col justify-center">
      <div>
        <h4 class="text-2xl text-rbm-red font-bold">
          Independent Web Development
        </h4>
        <p class="text-white mt-14">
          From websites that act as your digital storefront to webapps that help augment your business' workflow.
          Red Banner Media can help you.
        </p>
      </div>
      <IndependentDev class="h-80 w-80 self-center"/>
    </div>

    <div class="flex flex-col mx-10">
      <div class="bg-white rounded-xl bg-opacity-20 p-5 my-4 w-full flex flex-row justify-between">
        <div class="w-4/6">
          <h4 class="text-2xl text-rbm-red font-bold">
            Responsive Web Design
          </h4>
          <p class="text-white mt-14">
            Whether it's a mobile device or a wide screen monitor, your website will appear clear and readable
            regardless.
          </p>
        </div>
        <ResponsiveWeb class="h-80 w-80"/>
      </div>

      <div class="bg-white rounded-xl bg-opacity-20 p-5 my-4 w-full flex flex-row justify-between">
        <div class="w-4/6">
          <h4 class="text-2xl text-rbm-red font-bold">
            Accessibility
          </h4>
          <p class="text-white mt-14">
            Expand your market by making your website accessible to users with various disabilities.
          </p>
        </div>
        <Accessibility class="h-80 w-80"/>
      </div>
    </div>

    <div class="bg-white rounded-xl bg-opacity-20 p-5 m-4 w-2/6 flex flex-col-reverse justify-center">
      <div>
        <h4 class="text-2xl text-rbm-red font-bold">
          Search Engine Optimization
        </h4>
        <p class="text-white mt-14">
          Most users find content through a search engine. While SEO is a journey,
          having your website prepared for it is a must.
        </p>
      </div>
      <SearchEngineOptimization class="h-80 w-80 self-center align-top"/>
    </div>

  </section>
</template>

<script>
import IndependentDev from '@/components/illustrations/IndependentDev';
import ResponsiveWeb from '@/components/illustrations/ResponsiveWeb';
import Accessibility from '@/components/illustrations/Accessibility';
import SearchEngineOptimization from '@/components/illustrations/SearchEngineOptimization';

export default {
  name: "WebDev",
  components: {
    IndependentDev,
    ResponsiveWeb,
    Accessibility,
    SearchEngineOptimization
  }
}
</script>