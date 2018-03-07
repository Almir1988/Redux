export default function (state, action) {
if (action.type === 'SIGNIN_CONFIRMATION') {
    return Object.assign({}, state, {
      login_error: false,
      signUp_error: false,
      account: action.user,
    });
  }

  return state || null;
}