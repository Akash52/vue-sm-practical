const url =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlh6elTPJ7fQxdjE4TgBQraBWXiqk0fcY'

export default {
  // eslint-disable-next-line space-before-function-paren
  async signup(context, payload) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const data = await response.json()

    if (!response.ok) {
      console.log(data)
      const error = data.error || data.message || 'Something went wrong'
      throw new Error(error)
    }

    console.log(data)

    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn
    })
  }
}
