import { AnyAction, Reducer } from "redux";
import {
  CalculateAction,
  CalculateContentType,
} from "../action/CalculateContent";
const initialState = {
  content: "0" as string,
};

export type ICalContentStore = Readonly<typeof initialState>;

const reducer: Reducer<ICalContentStore, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CalculateContentType.CONTENTUPDATE:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default reducer;
