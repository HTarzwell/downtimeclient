'use strict'

const store = require('../store')
const showInstanceTemplate = require('../templates/downtime_instance-listing.handlebars')
const showInstanceAllTemplate = require('../templates/downtime_instance-all.handlebars')

const createDowntimeSuccess = function (data) {
  $('#create-message').text('Created New Downtime!')
  $('#create-message').css('background-color', '#60a9cf')
  store.downtime_instance = data.downtime_instance
  $('.downtime-content').empty()
  $('.alldowntime-content').empty()
  $('#duration-totals').empty()
  totalDuration = 0
}

const createDowntimeFailure = function (error) {
  $('#create-message').text('Error On New Downtime')
  $('#create-message').css('background-color', '#d81717')
  console.log(error)
}

const getMyDowntimeSuccess = function (data) {
  $('#get-message').text('Downtime Instance Received')
  $('#get-message').css('background-color', '#60a9cf')
  store.downtime_instance = data.downtime_instance
  const showInstanceHtml = showInstanceTemplate({ downtime_instance: data.downtime_instance })
  $('.downtime-content').html(showInstanceHtml)
}

const getMyDowntimeFailure = function (error) {
  $('#get-message').text('Error Retrieving Instance')
  $('#get-message').css('background-color', '#d81717')
  console.log(error)
}

let totalDuration = 0

const getAllDowntimeSuccess = function (data) {
  $('#getall-message').text('All Downtime Instances Received')
  $('#getall-message').css('background-color', '#60a9cf')
  const showInstanceAllHtml = showInstanceAllTemplate({ downtime_instances: data.downtime_instances })
  data.downtime_instances.forEach(function (instance) {
    if (instance.duration !== null) {
      totalDuration += instance.duration
    }
    return totalDuration
  })
  $('.alldowntime-content').html(showInstanceAllHtml)
  $('.duration-totals').show()
  $('#duration-totals').html(totalDuration)
}

const getAllDowntimeFailure = function (error) {
  $('#getall-message').text('Error Retrieving Instances')
  $('#getall-message').css('background-color', '#d81717')
  console.log(error)
}

const updateDowntimeSuccess = function (data) {
  $('#update-message').text('Instance Updated Successfully')
  $('#update-message').css('background-color', '#60a9cf')
  $('.downtime-content').empty()
  $('.alldowntime-content').empty()
  $('#duration-totals').empty()
  totalDuration = 0
}

const updateDowntimeFailure = function (error) {
  $('#update-message').text('Error on Update')
  $('#update-message').css('background-color', '#d81717')
  console.log(error)
}

const deleteDowntimeSuccess = function () {
  $('#delete-message').text('Instance Deleted Successfully')
  $('#delete-message').css('background-color', '#60a9cf')
  $('.downtime-content').empty()
  $('.alldowntime-content').empty()
  $('#duration-totals').empty()
  totalDuration = 0
}

const deleteDowntimeFailure = function (error) {
  $('#delete-message').text('Error on Delete')
  $('#delete-message').css('background-color', '#d81717')
  console.log(error)
}

module.exports = {
  createDowntimeSuccess,
  createDowntimeFailure,
  getMyDowntimeSuccess,
  getMyDowntimeFailure,
  getAllDowntimeSuccess,
  getAllDowntimeFailure,
  updateDowntimeSuccess,
  updateDowntimeFailure,
  deleteDowntimeSuccess,
  deleteDowntimeFailure
}
