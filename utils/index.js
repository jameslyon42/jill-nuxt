import { format } from 'date-fns'

export function formatDate(date) {
  const d = new Date(date)
  return format(
    new Date(d.getTime() + Math.abs(d.getTimezoneOffset() * 60000)),
    'EEEE, MMM d'
  )
}

export function formatClassTime(time) {
  return format(new Date(time), 'E h:mm a')
}
