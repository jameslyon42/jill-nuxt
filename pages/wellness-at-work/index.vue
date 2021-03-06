<template>
  <div class="relative">
    <div
      :class="[
        'relative flex justify-center items-center text-gray-900 w-full',
        $style.hero,
      ]"
    >
      <div
        class="m-20 relative font-medium sm:max-w-4xl grid grid-cols-1 sm:grid-cols-12 gap-8 items-center"
      >
        <div class="sm:col-span-5">
          <img
            class="shadow-lg rounded-full"
            src="@/assets/images/white-top.jpeg"
          />
        </div>
        <div
          class="font-spartan text-center sm:text-left font-medium sm:col-span-7 mb-0"
        >
          <p class="mb-3 text-xl sm:text-2xl">
            Create a productive and healthy mindset at work with specially
            curated wellness classes led by The Jill Pill.
          </p>
          <div class="flex flex-col max-w-xs">
            <a
              href="mailto:thejillpillmethod@gmail.com"
              class="shadow-lg bg-purple text-center text-white font-medium py-2 px-4 rounded-lg text-lg font-spartan button no-underline cursor-pointer"
            >
              Email me for pricing
              <br />
              and class options
            </a>
            <div class="text-center mt-3 flex-none">
              <a
                class="text-3xl hover:text-purple"
                href="https://www.youtube.com/channel/UC68qf0s2vwADY2yqALqhEvA/featured"
                target="_blank"
              >
                <fa :icon="['fab', 'youtube']" />
              </a>
              <a
                class="ml-2 text-3xl hover:text-purple"
                href="https://www.facebook.com/The-Jill-Pill-2299369710306614"
                target="_blank"
              >
                <fa :icon="['fab', 'facebook-square']" />
              </a>
              <a
                class="ml-2 text-3xl hover:text-purple"
                href="https://www.instagram.com/the_jillpill/"
                target="_blank"
              >
                <fa :icon="['fab', 'instagram']" />
              </a>
              <a
                class="ml-2 text-3xl hover:text-purple"
                href="mailto:thejillpillmethod@gmail.com"
                target="_blank"
              >
                <fa :icon="['fas', 'envelope']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow-lg py-20">
      <div
        class="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-20"
      >
        <div class="col-span-1 lg:col-span-6">
          <h1 class="mt-0 mb-6 underline">Wellness at Work</h1>
          <p class="mb-5">
            Providing the tools needed to live a healthy lifestyle can be just
            as important as offering health insurance, or helping your team
            manage stress.
          </p>
          <p class="mb-5">
            Benefits of offering classes to your employees:
          </p>
          <ul class="list-disc ml-6">
            <li>Relieve stress</li>
            <li>Increase productivity</li>
            <li>Foster positivity</li>
            <li>Promote healthy living</li>
          </ul>
        </div>
        <img
          class="col-span-1 lg:col-span-6 lg:col-start-0 shadow-lg rounded-full"
          src="@/assets/images/wework.jpg"
        />
        <div
          class="col-span-1 lg:col-span-8 lg:col-start-3 lg:row-start-2 text-center"
        >
          <h1 class="mt-0 mb-6 underline">Individually Curated Classes</h1>
          <ul class="grid grid-cols-12 gap-8 justify-center">
            <li class="col-span-12">
              <h4 class="mt-0 mb-4 font-medium">We work with your schedule</h4>
              <p class="mb-0">
                Classes can be 30 or 45 minutes long and we will set up a date
                and time that works best for your team.
              </p>
            </li>
            <li class="col-span-12">
              <h4 class="mt-0 mb-4 font-medium">Several format options</h4>
              <p class="mb-0">
                Whether your team is in need of stretching and relaxation, a
                heart pumping cardio class or a little of both, we will create a
                format and style that excites your team.
              </p>
            </li>
            <li class="col-span-12">
              <h4 class="mt-0 mb-4 font-medium">Reimbursement possibility</h4>
              <p class="mb-0">
                These classes may be available for reimbursement from your
                health insurance provider. Check with your provider.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      :class="[
        'relative flex justify-center items-center text-gray-900',
        $style.hero,
      ]"
    >
      <div class="m-20">
        <div
          class="mx-auto max-w-4xl mb-20 grid grid-cols-6 lg:grid-cols-12 gap-12 items-center text-center"
        >
          <h1 class="mt-0 underline col-span-6 lg:col-span-12">Kind Words</h1>
          <p class="col-span-6 font-medium mb-0">
            &ldquo;This was so much fun and a must-do again!&rdquo;
          </p>
          <p class="col-span-6 font-medium mb-0">
            &ldquo;This was very relaxing and a great stretch!&rdquo;
          </p>
          <p
            class="col-start-2 col-span-4 lg:col-span-8 lg:col-start-3 font-medium mb-0"
          >
            &ldquo;Just what I needed to unwind. This helped me feel connected
            especially when working from home.&rdquo;
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.hero {
  min-height: calc(100vh - var(--top-spacing));
  background-image: url('../../assets/images/hero.jpeg');
  background-size: cover;
  background-position: center;

  @media (min-width: theme('screens.lg')) {
    background-attachment: fixed;
  }
}

.scroll {
  top: calc(var(--top-spacing) * -1);
}
</style>
