'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#before-signinauth-message').text('Sign-Up Successful!')
  $('#before-signinauth-message').css('background-color', '#60a9cf')
}

const signUpFailure = function (error) {
  $('#before-signinauth-message').text('Error On Sign-Up')
  $('#before-signinauth-message').css('background-color', '#d81717')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#after-signinauth-message').text('Sign-In Successful!')
  $('#after-signinauth-message').css('background-color', '#60a9cf')
  store.user = data.user
  $('#before-signinauth-message').empty()
}

const signInFailure = function (error) {
  $('#before-signinauth-message').text('Error On Sign-In')
  $('#before-signinauth-message').css('background-color', '#d81717')
  console.log(error)
  $('#after-signinauth').hide()
  $('#before-signinauth').show()
}

const changePasswordSuccess = function () {
  $('#after-signinauth-message').text('Successfully Changed Password!')
  $('#after-signinauth-message').css('background-color', '#60a9cf')
}

const changePasswordFailure = function (error) {
  $('#after-signinauth-message').text('Password Change Unsuccessful')
  $('#after-signinauth-message').css('background-color', '#d81717')
  console.log(error)
}

const signOutSuccess = function () {
  $('#before-signinauth-message').text('Successfully Signed Out')
  $('#before-signinauth-message').css('background-color', '#60a9cf')
  $('.downtime-content').empty()
  $('.alldowntime-content').empty()
  $('#after-signinauth-message').empty()
  $('#create-message').empty()
  $('#get-message').empty()
  $('#update-message').empty()
  $('#delete-message').empty()
}

const signOutFailure = function (error) {
  $('#before-signinauth-message').text('Sign Out Unsuccessful')
  $('#before-signinauth-message').css('background-color', '#d81717')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
