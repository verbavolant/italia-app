/**
 * A reducer to store all messages id
 * It only manages SUCCESS actions because all UI state properties (like
 * loading/error)
 * are managed by different global reducers.
 */

import { Action } from "../../../../actions/types";
import { MessagesIdsArray } from "../../../../sagas/messages";
import { MESSAGE_LOAD_SUCCESS } from "../../../actions/constants";

export type MessagesAllIdsState = MessagesIdsArray;

export const INITIAL_STATE: MessagesAllIdsState = [];

const reducer = (
  state: MessagesAllIdsState = INITIAL_STATE,
  action: Action
): MessagesAllIdsState => {
  switch (action.type) {
    case MESSAGE_LOAD_SUCCESS:
      return [...state, action.payload.id];

    default:
      return state;
  }
};

export default reducer;