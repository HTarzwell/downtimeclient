'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createDowntime(data)
    .then(ui.createDowntimeSuccess)
    .then(() => { ($('#create-downtime input[type="date"]').val('')) })
    .then(() => { ($('#create-downtime input[type="datetime-local"]').val('')) })
    .then(() => { ($('#create-downtime input[type="text"]').val('')) })
    .catch(ui.createDowntimeFailure)
}

const onGetMyDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getMyDowntime(data)
    .then(ui.getMyDowntimeSuccess)
    .then(() => { ($('#get-downtime input[type="text"]').val('')) })
    .catch(ui.getMyDowntimeFailure)
}

const onGetAllDowntime = function (event) {
  event.preventDefault()
  api.getAllUserDowntimes()
    .then(ui.getAllDowntimeSuccess)
    .catch(ui.getAllDowntimeFailure)
}

const onUpdateDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateDowntime(data)
    .then(ui.updateDowntimeSuccess)
    .then(() => { ($('#update-downtime input[type="date"]').val('')) })
    .then(() => { ($('#update-downtime input[type="datetime-local"]').val('')) })
    .then(() => { ($('#update-downtime input[type="text"]').val('')) })
    .catch(ui.updateDowntimeFailure)
}

const onDeleteDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteInstance(data)
    .then(ui.deleteDowntimeSuccess)
    .then(() => { ($('#delete-downtime input[type="text"]').val('')) })
    .catch(ui.deleteDowntimeFailure)
}

const addHandlers = () => {
  $('#create-downtime').on('submit', onCreateDowntime)
  $('#get-downtime').on('submit', onGetMyDowntime)
  $('#get-alldowntime').on('submit', onGetAllDowntime)
  $('#update-downtime').on('submit', onUpdateDowntime)
  $('#delete-downtime').on('submit', onDeleteDowntime)
}

module.exports = {
  addHandlers
}
