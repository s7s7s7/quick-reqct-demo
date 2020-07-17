import { combineReducers } from "redux"
import CalculateContent, { ICalContentStore } from './CalculateContent'
export interface IStoreState {
    readonly CalculateContent: ICalContentStore
}
export default combineReducers<IStoreState>({
    CalculateContent
})