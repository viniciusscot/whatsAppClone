import { MODIFICA_ADICIONA_CONTATO_EMAIL } from "../actions/types";

const INITIAL_STATE = {
  adciona_contato_email: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adciona_contato_email: action.payload };

    default:
      return state;
  }
};
