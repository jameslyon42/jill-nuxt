<template>
  <div>
    <header
      :class="[
        'px-8 py-3 grid grid-cols-2 fixed top-0 w-screen bg-white z-40 transition-all',
        { shadow: scrollPosition },
      ]"
    >
      <a class="font-title text-3xl hover:text-teal cursor-pointer" href="/">
        The Jill Pill
      </a>
      <div class="social-icons flex items-center justify-end">
        <a
          class="font-fa ml-5 text-3xl hover:text-teal"
          href="https://www.facebook.com/The-Jill-Pill-2299369710306614"
          target="_blank"
        >
          &#xf230;
        </a>
        <a
          class="font-fa ml-5 text-3xl hover:text-teal"
          href="https://www.instagram.com/thejillpillmethod/"
          target="_blank"
        >
          &#xf16d;
        </a>
        <a
          class="font-fa ml-5 text-3xl hover:text-teal"
          href="mailto:jillgomez42@gmail.com"
          target="_blank"
        >
          &#xf0e0;
        </a>
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
    }
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
</style>
