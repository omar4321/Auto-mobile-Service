import React, { createContext } from 'react';
import UserFirebase from '../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = UserFirebase();

  return (
    <AuthContext.Provider value={{ ...allContexts }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
