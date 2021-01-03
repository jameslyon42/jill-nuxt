<template>
  <div>
    <script
      charset="utf-8"
      src="https://www.thetalenthack.com/assets/embed_script_asset.js?v=1.1.0"
    ></script>
    <div id="th-schedule"></div>
    <script>
      embedPage('https://www.thetalenthack.com/me/thejillpill/schedule', {
        elmId: 'th-schedule',
      })
    </script>
  </div>
</template>

<script>
export default {
  name: 'BookAClass',

  head: {
    title: 'Book A Class',
  },
}
</script>
