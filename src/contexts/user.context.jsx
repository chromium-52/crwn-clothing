import { createContext, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// actual values you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Reducers are functions that return an object
/*
export const ACTION_TYPES = {
  ACTION_1: 'ACTION_1:,
}

const reducer = (prevState, action: {type, payload?}) => {
  switch(type) {
    case ACTION_TYPES.ACTION_1:
      return {...state, stateToUpdate: newValue};
    default:
      throw new Error();
  }

  return newState;
}

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  const setCurrentUser = (user) => {
    dispatch({ type: ACTION_TYPES.ACTION_1, payload: user });
  };

  const { currentUser } = state;
}
*/
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const { currentUser } = state;

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
