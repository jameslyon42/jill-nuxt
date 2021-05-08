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

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function embed(url, settings = {}) {
  return new pym.Parent(settings.elmId, url, {})
}

let loadInterval = null

/**
 * Append pym script into root document
 * We ensure the script will be added only one time
 *
 * @param {function} callback function to invoque after script loaded
 * @returns void
 */
function loadPym(callback) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.id = 'pym-script'

  loadInterval = setInterval(() => {
    const pymScript = document.getElementById('pym-script')
    try {
      if (pymScript) {
        callback()
        clearInterval(loadInterval)
      }
    } catch (error) {}
  }, 100)

  script.src = 'https://pym.nprapps.org/pym.v1.min.js'
  document.getElementsByTagName('head')[0].appendChild(script)
}

/**
 * Simple endpoint to embed a page
 *
 * @param {string} url page to embed
 * @param {object} [settings={}] Custom setting. It will be allow us setup special configuration for specific resources if we want it
 */
export function embedPage(url, settings = { elmId: '' }) {
  loadPym(function () {
    embed(url, settings)
  })
}
