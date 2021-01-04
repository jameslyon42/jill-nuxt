<template>
  <div>
    <div id="on-demand-library"></div>
  </div>
</template>

<script>
import { embedPage } from '@/utils'

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
  },
}
</script>
