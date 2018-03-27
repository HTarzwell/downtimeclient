
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
  $('.duration-totals').hide()
  $('.value-text').hide()
  $('select').change(function () {
    $('.value-text').html('<input type="text" class="form-control other-input" name="downtime_instance[activity]" placeholder="Other">')
    $('.other-input').val(this.value)
    if (this.value === 'Other (Enter Your Downtime Here)') {
      $('.value-text').show()
    } else {
      $('.value-text').hide()
    }
  })
})
