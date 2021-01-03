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
          <img class="shadow-lg rounded-full" src="@/assets/images/face.jpg" />
        </div>
        <div
          class="font-spartan text-center sm:text-left font-medium text-xl sm:text-2xl sm:col-span-7 mb-0"
        >
          Hi, I’m Jill, a fitness and wellness coach here to help you create
          <span class="mt-4 mb-8 block font-bold">Happy Healthy Habits.</span>
          <Button class="shadow-lg" @click="scrollToSignUp">
            Take a class with me
          </Button>
          <div class="text-left">
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
    <div class="shadow-lg py-20">
      <div
        class="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-20"
      >
        <div class="col-span-1 lg:col-span-6 text-center">
          <h1 class="mt-0 mb-6 underline">Weekly Online Classes</h1>
          <h4 class="mt-0 mb-4 font-medium">Joy in Movement</h4>
          <p class="mb-5">
            We move in a way that feels good and honors our unique, wonderful
            bodies.
          </p>
          <h4 class="mt-0 mb-4 font-medium">Comfort & Convenience</h4>
          <p class="mb-5">
            Join from wherever you are, with or without your camera on, whatever
            makes you feel your best
          </p>
          <h4 class="mt-0 mb-4 font-medium">Community</h4>
          <p class="mb-5">
            Connect with others in a supportive and fun atmosphere
          </p>
          <Button class="shadow-lg" @click="scrollToSignUp">
            Take a class with me
          </Button>
        </div>
        <img
          class="col-span-1 lg:col-span-6 lg:col-start-0 shadow-lg rounded-full"
          src="@/assets/images/remote.jpg"
        />
        <div
          class="col-span-1 lg:col-span-6 lg:col-start-7 lg:row-start-2 text-center"
        >
          <h1 class="mt-0 mb-6 underline">Class Types</h1>
          <ul class="grid grid-cols-12 gap-8 justify-center">
            <li class="col-span-12 lg:col-span-6">
              <h4 class="mt-0 mb-4 font-medium">Golden Fitness</h4>
              <p class="mb-0">
                Ideal for older adults and those new to exercising. We focus on
                increasing strength, range of movement, balance, and
                coordination
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h4 class="mt-0 mb-4 font-medium">Pilates</h4>
              <p class="mb-0">
                Low-impact flexibility and strength class that focuses on proper
                postural alignment, core strength, and muscle balance
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h4 class="mt-0 mb-4 font-medium">Zumba</h4>
              <p class="mb-0">
                Cardio dance fitness class that fuses Latin, hip hop, and pop
                dance hits with easy to follow moves to get you out of your mind
                and onto the dance floor
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h4 class="mt-0 mb-4 font-medium">Tabata HIIT</h4>
              <p class="mb-0">
                High-Intensity Interval Training class that focuses on using max
                effort over short periods of time with brief rest breaks
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h4 class="mt-0 mb-4 font-medium">Total Body</h4>
              <p class="mb-0">
                Cardio and strength training interval class that gets the whole
                body moving
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h4 class="mt-0 mb-4 font-medium">Booty Burn</h4>
              <p class="mb-0">
                Strength and endurance class that focuses on the lower body
              </p>
            </li>
          </ul>
        </div>
        <img
          class="col-span-1 lg:col-span-6 shadow-lg rounded-full"
          src="@/assets/images/class.jpg"
        />
      </div>
      <div
        class="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 relative"
      >
        <img
          class="col-span-1 lg:col-span-6"
          src="@/assets/images/schedule.png"
        />
        <div class="col-span-1 lg:col-span-6 m-auto px-10 text-center">
          <div
            ref="signup"
            :class="['absolute invisible', $style.scroll]"
          ></div>
          <h1 class="mt-0 mb-6 underline">Class Pricing</h1>
          <h4 class="font-medium mb-4 text-left">
            Live Class Options
          </h4>
          <ul class="list-disc pl-6 mb-4 text-left">
            <li>
              <a
                class="font-medium"
                href="https://www.thetalenthack.com/spaces/checkout?product_id=1023&product_type=pack"
              >
                Unlimited Virtual Classes:
              </a>
              $75/month
            </li>
            <li>
              <a
                class="font-medium"
                href="https://www.thetalenthack.com/me/thejillpill/book"
              >
                Drop-in Virtual Class:
              </a>
              $10/class
            </li>
          </ul>
          <h4 class="font-medium mb-4 text-left">
            On-Demand Class Options:
          </h4>
          <ul class="list-disc pl-6 mb-4 text-left">
            <li>
              <a
                class="font-medium"
                href="https://www.thetalenthack.com/me/thejillpill/on-demand"
              >
                Unlimited On-demand:
              </a>
              $50/month
            </li>
            <li>
              <a
                class="font-medium"
                href="https://www.thetalenthack.com/me/thejillpill/on-demand"
              >
                Individual On-demand class purchase:
              </a>
              $10/30-day rental
            </li>
          </ul>
          <h4 class="font-medium mb-4 text-left">
            Best of Both Worlds:
          </h4>
          <ul class="list-disc pl-6 mb-4 text-left">
            <li>
              <a
                class="font-medium"
                href="https://www.thetalenthack.com/spaces/checkout?product_id=853&product_type=pack"
              >
                Unlimited virtual + On-demand classes:
              </a>
              $100/month
            </li>
          </ul>
          <Button
            class="shadow-lg mb-3"
            href="https://thejillpill.us19.list-manage.com/track/click?u=f6334c3e62c6a57b9f0b0c6c0&id=a3d4a6e9b6&e=f7d695d2cf"
          >
            Click here for a 5 Day Trial
          </Button>
          <br />
          <Button
            class="shadow-lg"
            href="https://www.thetalenthack.com/me/thejillpill/packages"
          >
            View All Packages
          </Button>
        </div>
      </div>
      <!-- <div
        class="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12"
      >
        <div class="col-span-1 lg:col-span-12 text-center">
          <h1 class="mb-6 underline">Upcoming Classes</h1>
          <div
            v-for="scheduledClass in futureClasses"
            :key="scheduledClass.sys.id"
            class="grid grid-cols-2 text-left mb-2"
          >
            <span
              class="text-right font-medium uppercase border-r-4 border-purple pr-3"
            >
              {{ formatClassTime(scheduledClass.fields.time) }}
            </span>
            <div class="pl-3">
              {{ scheduledClass.fields.classType.fields.name }}
            </div>
          </div>
          <nuxt-link to="/schedule">View Entire Schedule</nuxt-link>
        </div>
      </div> -->
    </div>
    <div
      :class="[
        'relative flex justify-center items-center text-gray-900',
        $style.hero,
      ]"
    >
      <div class="text-center m-20">
        <div
          class="mx-auto max-w-4xl mb-20 grid grid-cols-6 lg:grid-cols-12 gap-12 items-center text-center"
        >
          <h1 class="mt-0 underline col-span-6 lg:col-span-12">Kind Words</h1>
          <p class="col-span-6 font-medium mb-0">
            &ldquo;Jill is fantastic! I look forward to her classes every week.
            They have been a great inspiration to get back into a self-care
            routine!&rdquo;
          </p>
          <p class="col-span-6 font-medium mb-0">
            &ldquo;Jill is personable and upbeat. She makes working out fun and
            challenging - whatever your level may be. I appreciate that she
            doesn't just show modifications in workouts, but also does them
            along with you. I always look forward to the workouts!&rdquo;
          </p>
        </div>
        <h1 class="mt-0 flex-none text-6xl mb-8">Let's get moving!</h1>
        <p class="mb-8 text-2xl">
          Receive wellness inspiration to keep you
          <b>happy and healthy</b>
        </p>
        <div id="mc_embed_signup">
          <form
            id="mc-embedded-subscribe-form"
            action="https://thejillpill.us19.list-manage.com/subscribe/post?u=f6334c3e62c6a57b9f0b0c6c0&amp;id=7d2fca9ace"
            method="post"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div
              id="mc_embed_signup_scroll"
              class="sm:flex items-center justify-center"
            >
              <input
                id="mce-EMAIL"
                class="px-5 py-3 rounded-lg shadow-lg sm:w-64 mr-4 mb-4 sm:mb-0 w-full text-xl border-2"
                type="email"
                value=""
                name="EMAIL"
                placeholder="email address"
                required
              />
              <Button
                id="mc-embedded-subscribe"
                type="submit"
                value="Subscribe"
                name="subscribe"
                class="shadow-lg w-full sm:w-auto py-3"
              >
                Sign up
              </Button>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_f6334c3e62c6a57b9f0b0c6c0_7d2fca9ace"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <nuxt-link
      class="absolute right-0 bottom-0 no-underline font-normal mr-2 mb-2"
      to="/privacy"
    >
      Privacy Policy
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { formatDate, formatClassTime } from '@/utils'
import Button from '@/components/Button'

export default {
  name: 'Index',

  components: { Button },

  async fetch() {
    // await this.fetchClasses()
  },

  computed: {
    ...mapGetters('schedule', ['futureClasses']),
  },

  methods: {
    ...mapActions('schedule', ['fetchClasses']),
    formatDate,
    formatClassTime,

    scrollToSignUp() {
      this.$refs.signup.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" module>
.about-me {
  height: 300px;
}

.hero {
  min-height: calc(100vh - var(--top-spacing));
  background-image: url('../assets/images/hero.jpeg');
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
