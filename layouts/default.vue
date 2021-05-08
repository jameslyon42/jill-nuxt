<template>
  <div class="font-spartan bg-white">
    <header
      :class="[
        'px-8 py-3 grid grid-cols-2 fixed top-0 w-screen bg-white z-40 transition-all',
        { shadow: scrollPosition },
      ]"
    >
      <nuxt-link
        class="font-title text-3xl hover:text-purple cursor-pointer whitespace-no-wrap"
        to="/"
      >
        The Jill Pill
      </nuxt-link>
      <div class="flex items-center justify-end flex-wrap">
        <nav>
          <fa
            class="md:hidden text-xl cursor-pointer"
            :icon="['fa', 'bars']"
            @click="isNavCollapsed = !isNavCollapsed"
          />
          <div
            :class="[
              { hidden: isNavCollapsed },
              'bg-white md:block absolute md:relative md:right-auto right-0 md:left-auto left-0 text-center md:text-left shadow-lg md:shadow-none',
              $style.nav,
            ]"
          >
            <!-- <nuxt-link
              :class="[
                {
                  'text-purple': $route.name == 'about',
                },
                'hover:text-purple cursor-pointer whitespace-no-wrap no-underline block md:inline-block md:mr-5 p-2 md:p-0',
                $style.nav,
              ]"
              to="/about"
            >
              About
            </nuxt-link> -->
            <nuxt-link
              :class="[
                {
                  'text-purple': $route.name == 'videos',
                },
                'hover:text-purple cursor-pointer whitespace-no-wrap no-underline block md:inline-block md:mr-5 p-2 md:p-0',
              ]"
              to="/videos"
            >
              Videos
            </nuxt-link>
            <nuxt-link
              :class="[
                {
                  'text-purple': $route.name == 'book',
                },
                'hover:text-purple cursor-pointer whitespace-no-wrap no-underline block md:inline-block p-2 md:p-0',
              ]"
              to="/book"
            >
              Book a Class
            </nuxt-link>
          </div>
        </nav>
      </div>
    </header>
    <Nuxt :class="$style.content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      isNavCollapsed: true,
    }
  },

  watch: {
    $route() {
      this.isNavCollapsed = true
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }

      this.scrollPosition = currentScrollPosition
    },
  },
}
</script>

<style module lang="scss">
.content {
  margin-top: var(--top-spacing);
}

.nav {
  top: var(--top-spacing);

  @media only screen and (min-width: theme('screens.md')) {
    top: auto;
  }
}
</style>
