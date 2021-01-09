// return the user data from the session storage
export const getUser = () => {
    const userStr = localStorage.getItem('useradmin');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
  
  // return the token from the session storage
  export const getTokenadmin = () => {
    return localStorage.getItem('tokenadmin') || null;
  }
  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    localStorage.removeItem('tokenadmin');
    localStorage.removeItem('useradmin');
  }
  
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    localStorage.setItem('tokenadmin', token);
    localStorage.setItem('useradmin', JSON.stringify(user));
  }