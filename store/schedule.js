import { compareAsc, format } from 'date-fns'
import { groupBy } from 'lodash'
import { createClient } from '@/plugins/contentful.js'

export const state = () => ({
  classes: [],
})

export const mutations = {
  setClasses(state, classes) {
    state.classes = classes
  },
}

export const actions = {
  async fetchClasses({ commit }) {
    const client = createClient()

    const classes = await client.getEntries({
      content_type: 'class',
      order: 'fields.time',
    })

    commit('setClasses', classes)
  },
}

export const getters = {
  futureClasses(state) {
    const now = new Date()
    return state.classes.items.reduce((futureClasses, scheduledClass) => {
      const classTime = new Date(scheduledClass.fields.time)
      if (classTime > now) {
        futureClasses.push(scheduledClass)
      }

      return futureClasses
    }, [])
  },

  futureClassesByDay(state, getters) {
    const days = groupBy(getters.futureClasses, (item) => {
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
}
