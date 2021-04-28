const initialState = {
  token: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id,
      };

    default:
      return state;
  }
}

export function login(token, id) {
  return {
    type: 'LOGIN',
    payload: {
      token,
      id,
    },
  };
}
