export default {
  isAuthenticated: state => !!state.token,
  didAutoLogout: state => state.didAutoLogout
}
