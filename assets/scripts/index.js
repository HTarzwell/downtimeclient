
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const downTimeEvents = require('./downtime_instances/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  downTimeEvents.addHandlers()
  // $('#after-signinauth').hide()
  $('#other-input').hide()
  /* $('#other').(
    $('#other-input').show()
  ) */
})
