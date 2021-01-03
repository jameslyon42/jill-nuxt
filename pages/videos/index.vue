<template>
  <div>
    <script
      charset="utf-8"
      src="https://www.thetalenthack.com/assets/embed_script_asset.js?v=1.1.0"
    ></script>
    <div id="on-demand-library"></div>
    <script>
      embedPage(
        'https://www.thetalenthack.com/me/thejillpill/embed_on_demand',
        { elmId: 'on-demand-library' }
      )
    </script>
  </div>
</template>

<script>
export default {
  name: 'Videos',

  head: {
    title: 'Videos',
  },
}
</script>
