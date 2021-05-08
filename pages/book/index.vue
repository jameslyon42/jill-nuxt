<template>
  <div>
    <div id="th-schedule"></div>
  </div>
</template>

<script>
import { embedPage } from '@/utils'

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
  },
}
</script>
