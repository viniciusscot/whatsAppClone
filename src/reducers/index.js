import { combineReducers } from "redux";
import AutenticacaoReducer from "./Autenticacao.reducer";
import AppReducer from "./AppReducer";

export default combineReducers({
  AutenticacaoReducer,
  AppReducer
});
