<template>
  <div>
    <div id="on-demand-library"></div>
  </div>
</template>

<script>
export default {
  name: 'Videos',

  mounted() {
    // eslint-disable-next-line no-undef
    embedPage('https://www.thetalenthack.com/me/thejillpill/embed_on_demand', {
      elmId: 'on-demand-library',
    })
  },

  head: {
    title: 'Videos',

    script: [
      {
        src:
          'https://www.thetalenthack.com/assets/embed_script_asset.js?v=1.1.0',
      },
    ],
  },
}
</script>
