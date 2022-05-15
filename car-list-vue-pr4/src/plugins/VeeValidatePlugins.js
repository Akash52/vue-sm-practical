import { defineRule, Form, Field, ErrorMessage } from 'vee-validate'

export default (app) => {
  defineRule('required', (value) => {
    if (value && value.trim()) return true
    return 'This field is required'
  })

  app.component('VeeForm', Form)
  app.component('VeeField', Field)
  app.component('VeeErrorMessage', ErrorMessage)

  //   defineRule('phone', {
  //     getMessage: (field) => `${field} is not a valid phone number`,
  //     validate: (value) => /^\+?[0-9]{10,15}$/.test(value)
  //   }),
  //     defineRule('email', {
  //       getMessage: (field) => `${field} is not a valid email address`,
  //       validate: (value) =>
  //         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //           value
  //         )
  //     }),
  //     defineRule('url', {
  //       getMessage: (field) => `${field} is not a valid url`,
  //       validate: (value) =>
  //         /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
  //           value
  //         )
  //     })
}
