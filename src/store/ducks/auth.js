const initialState = {
  token: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        cpf: action.payload.cpf,
        codigoVendedor: action.payload.codigoVendedor,
        nome: action.payload.nome,
        email: action.payload.email,
        pagamentoAdesao: action.payload.pagamentoAdesao,
      };

    default:
      return state;
  }
}

export function login(
  token,
  cpf,
  codigoVendedor,
  nome,
  email,
  pagamentoAdesao
) {
  return {
    type: 'LOGIN',
    payload: {
      token,
      cpf,
      codigoVendedor,
      nome,
      email,
      pagamentoAdesao,
    },
  };
}
