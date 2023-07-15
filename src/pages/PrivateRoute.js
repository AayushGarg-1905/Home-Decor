import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
// import { useUserContext } from '../context/user_context';


const PrivateRoute = ({children}) => {
  // console.log(children)  // checkout component
  // console.log(rest)      // rest of the parametets passed in private route

  const {user}=useAuth0();
  if(!user){
    return <Navigate to='/'/>
  }
  return children
};
export default PrivateRoute;
