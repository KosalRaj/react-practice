import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

export type AuthPageProps = {};

const AuthRoute: React.FC<AuthPageProps> = props => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);

  return (
    <div>AuthRoute</div>
  )
}

export default AuthRoute;