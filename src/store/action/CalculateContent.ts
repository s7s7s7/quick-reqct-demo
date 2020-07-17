import { ActionCreator, Action } from "redux";

export enum CalculateContentType {
  CONTENTUPDATE = "CONTENTUPDATE",
}

export type CalculateAction = Action<CalculateContentType>;

export const updateContent: ActionCreator<CalculateAction> = (
  newContent: string
) => ({
  type: CalculateContentType.CONTENTUPDATE,
  payload: newContent,
});
