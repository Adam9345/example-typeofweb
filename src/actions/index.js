//@flow
import { FETCH_CONTACTS_SUCCESS } from "./types";

export const contactsFetched = (contacts: any) => ({
  type: FETCH_CONTACTS_SUCCESS,
  contacts
});
