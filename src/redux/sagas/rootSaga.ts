import { all } from "redux-saga/effects";
import songsSaga from "./songsSaga"; // Adjust path as per your project structure

export default function* rootSaga() {
  yield all([songsSaga()]);
}
