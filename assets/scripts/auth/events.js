'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then($('#user-signup input[type="email"]').val(''))
    .then($('#user-signup input[type="password"]').val(''))
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then($('#user-signin input[type="email"]').val(''))
    .then($('#user-signin input[type="password"]').val(''))
    .then($('#before-signinauth').hide())
    .then($('#after-signinauth').show())
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then($('#user-changepwd input[type="password"]').val(''))
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then($('#before-signinauth').show())
    .then($('#after-signinauth').hide())
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#user-signup').on('submit', onSignUp)
  $('#user-signin').on('submit', onSignIn)
  $('#user-changepwd').on('submit', onChangePassword)
  $('#user-signout').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
