<template>
  <div>
    <div id="th-schedule"></div>
  </div>
</template>

<script>
export default {
  name: 'BookAClass',

  mounted() {
    // eslint-disable-next-line no-undef
    embedPage('https://www.thetalenthack.com/me/thejillpill/schedule', {
      elmId: 'th-schedule',
    })
  },

  head: {
    title: 'Book A Class',

    script: [
      {
        src:
          'https://www.thetalenthack.com/assets/embed_script_asset.js?v=1.1.0',
      },
    ],
  },
}
</script>
