//@flow
import { FETCH_CONTACTS_SUCCESS } from "../actions/types";

const initialState = {
  contacts: [],
  isFetching: false
};

export const contacts = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: [...action.contacts],
        isFetching: true
      };
    default:
      return state;
  }
};
