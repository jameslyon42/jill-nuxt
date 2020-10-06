<template>
  <div class="container mx-auto max-w-6xl text-center">
    <div v-if="classes" class="py-1">
      <div
        v-for="day in classesByDay"
        :key="day.day"
        class="my-12 border-4 rounded-lg border-purple shadow-lg p-10 mx-2 lg:mx-20"
      >
        <h1 class="underline mb-8">
          {{ formatDate(day.day) }}
        </h1>
        <div
          v-for="scheduledClass in day.classes"
          :key="scheduledClass.sys.id"
          class="mt-8 grid grid-cols-1 lg:grid-cols-12 text-left gap-2 lg:gap-8"
        >
          <div
            class="lg:col-span-3 flex justify-center lg:justify-end items-center text-xl lg:text-4xl font-weight-bold text-purple whitespace-no-wrap"
          >
            <span>{{ formatClassTime(scheduledClass.fields.time) }}</span>
          </div>
          <div class="lg:col-span-9">
            <h3 class="mb-1 font-bold">
              {{ scheduledClass.fields.classType.fields.name }}
            </h3>
            <p class="font-bold">
              {{ scheduledClass.fields.classType.fields.length }} Minutes
            </p>
            <p>
              {{ scheduledClass.fields.classType.fields.description }}
            </p>
            <div>
              <b>Needed:</b>
              {{ scheduledClass.fields.classType.fields.requirements }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { compareAsc, format } from 'date-fns'
import { groupBy } from 'lodash'
import { createClient } from '@/plugins/contentful.js'

const client = createClient()

export default {
  name: 'Index',

  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: 'class',
      }),
    ])
      .then(([classes]) => {
        return { classes }
      })
      .catch(console.error)
  },

  computed: {
    classesByDay() {
      const days = groupBy(this.classes.items, (item) => {
        return format(new Date(item.fields.time), 'yyyy-MM-dd')
      })

      return Object.keys(days)
        .map((day) => {
          return {
            classes: days[day].sort((classA, classB) => {
              return compareAsc(
                new Date(classA.fields.time),
                new Date(classB.fields.time)
              )
            }),
            day,
          }
        })
        .sort((dayA, dayB) => {
          return compareAsc(new Date(dayA.day), new Date(dayB.day))
        })
    },
  },

  methods: {
    dateFormat: format,

    formatDate(date) {
      const d = new Date(date)
      return format(
        new Date(d.getTime() + Math.abs(d.getTimezoneOffset() * 60000)),
        'EEEE, MMM d'
      )
    },

    formatClassTime(time) {
      return format(new Date(time.slice(0, -6)), 'h:mm a')
    },
  },
}
</script>
