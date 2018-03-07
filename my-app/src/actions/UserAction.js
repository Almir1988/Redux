export function signInConfirmation(user) {
    localStorage.setItem('username', user.username);
    localStorage.setItem('password', user.password);
    return {
      type: 'SIGNIN_CONFIRMATION',
      user
    };
  }
  export function loginError(error) {
    return {
      type: 'LOGIN_ERROR',
      error,
    };
  }
  export function signIn(user) {
    if(user.username=="admin@email.com" && user.password=="admin")
    {
        dispatch(signInConfirmation(user));
        console.log('success');
        history.push('/');
    }
    else
    {
        dispatch(loginError("error"))
        console.log('error');
    }
}
      
    