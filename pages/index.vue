<template>
  <div>
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
        <p
          class="font-spartan text-center sm:text-left font-medium text-xl sm:text-2xl sm:col-span-7"
        >
          Hi, I’m Jill, a fitness and wellness coach here to help you create
          <span class="mt-4 mb-8 block font-bold">Happy Healthy Habits.</span>
          <Button class="shadow-lg" @click="scrollToSignUp">
            Sign up for classes
          </Button>
        </p>
      </div>
    </div>
    <div class="shadow-lg py-20">
      <div
        class="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div class="col-span-1 lg:col-span-6 text-center p-20">
          <h1 class="mb-6 underline">Weekly Online Classes</h1>
          <p>
            Find joy in movement from the comfort and convenience of wherever
            you are!
            <br />
            <br />
            I encourage you to think of these classes as a form of self-care and
            to approach them from a place of love.
            <br />
            <br />
            We focus on how we feel and move in a way that is right for our
            amazing, unique bodies.
            <br />
            <br />
            Each class is also an opportunity to connect with others and create
            a supportive and fun atmosphere for everyone to leave feeling
            energized and like we recieved a virtual hug!
          </p>
        </div>
        <img
          class="col-span-1 lg:col-span-6 lg:col-start-0 shadow-lg rounded-full"
          src="@/assets/images/remote.jpg"
        />
        <div
          class="col-span-1 lg:col-span-6 lg:col-start-7 lg:row-start-2 text-center p-20"
        >
          <h1 class="mb-6 underline">Class Types</h1>
          <ul class="grid grid-cols-12 gap-8 justify-center">
            <li class="col-span-12 lg:col-span-6">
              <h3 class="mb-4 font-medium">Golden Fitness</h3>
              <p>
                Ideal for active older adults or those new to exercising. We
                focus on increasing strength, range of movement, balance and
                coordination
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h3 class="mb-4 font-medium">Pilates</h3>
              <p>
                consists of low-impact flexibility and muscular strength and
                movements. We emphasize proper postural alignment, core strength
                and muscle balance
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h3 class="mb-4 font-medium">Zumba</h3>
              <p>
                a cardio dance fitness class that fuses dance hits with easy to
                follow moves to get you out of your mind and onto the dance
                floor
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h3 class="mb-4 font-medium">Tabata HIIT</h3>
              <p>
                High-Intensity Interval Training class that focuses on using max
                effort over short periods of time with only brief rest breaks
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h3 class="mb-4 font-medium">Total Body</h3>
              <p>
                Cardio and strength training interval class that gets the whole
                body moving
              </p>
            </li>
            <li class="col-span-12 lg:col-span-6">
              <h3 class="mb-4 font-medium">Booty Burn</h3>
              <p>
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
          <h1 class="underline col-span-6 lg:col-span-12">Kind Words</h1>
          <p class="col-span-6 font-medium">
            &ldquo;Jill is fantastic! I look forward to her classes every week.
            They have been a great inspiration to get back into a self-care
            routine!&rdquo;
          </p>
          <p class="col-span-6 font-medium">
            &ldquo;I love it because she always gives options on each exercise
            since I'm a little older and not always able to do the more advanced
            version.&rdquo;
          </p>
        </div>
        <h1 class="flex-none text-6xl mb-8">
          Let's get moving!
        </h1>
        <p class="mb-8 text-2xl">
          Sign up to receive
          <b>The Jill Pill Newsletter</b>
          to access my class schedule
        </p>
        <div id="mc_embed_signup">
          <form
            id="mc-embedded-subscribe-form"
            ref="signup"
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
                class="px-5 py-3 rounded-lg shadow-lg sm:w-64 mr-4 mb-4 sm:mb-0 w-full text-xl"
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
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Index',
  components: { Button },
  methods: {
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
  background-attachment: fixed;
  background-position: center;
}
</style>
