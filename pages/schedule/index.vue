<template>
  <div class="container mx-auto max-w-6xl text-center">
    <div v-if="futureClassesByDay" class="py-1">
      <div
        v-for="day in futureClassesByDay"
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
            class="lg:col-span-5 flex justify-center lg:justify-end items-center text-xl lg:text-4xl font-weight-bold text-purple whitespace-no-wrap"
          >
            <span>{{ formatClassTime(scheduledClass.fields.time) }}</span>
          </div>
          <div class="lg:col-span-7">
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
import { mapActions, mapGetters } from 'vuex'
import { formatDate, formatClassTime } from '@/utils'

export default {
  name: 'Schedule',

  async fetch() {
    await this.fetchClasses()
  },

  computed: {
    ...mapGetters('schedule', ['futureClassesByDay']),
  },

  methods: {
    formatDate,
    formatClassTime,
    ...mapActions('schedule', ['fetchClasses']),
  },
}
</script>
