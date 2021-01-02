<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: '',
    },
  },

  render(createElement) {
    return createElement(
      this.href ? 'a' : 'button',
      {
        class:
          'bg-purple text-white font-medium py-2 px-4 rounded-lg text-lg font-spartan button no-underline cursor-pointer inline-block',
        on: {
          click: () => {
            this.$emit('click')
          },
        },
        attrs: {
          href: this.href,
        },
      },
      this.$slots.default
    )
  },
}
</script>
