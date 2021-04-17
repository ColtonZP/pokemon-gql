import React, { createContext, useState } from 'react';

export const initialValues = {
  user: '',
  isLoggedIn: false,
  changeUser: (user: string, logIn: boolean) => {},
};

export const StateContext = createContext(initialValues);

export const ContextProvider: React.FC = ({ children }) => {
  const [user, updateUserState] = useState<string>('');
  const [loggedIn, updateLoggedIn] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{
        user: user,
        isLoggedIn: loggedIn,

        changeUser: (user: string, logIn: boolean) => {
          updateUserState(user);
          updateLoggedIn(logIn);
        },
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
