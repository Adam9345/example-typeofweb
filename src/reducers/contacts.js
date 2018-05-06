//@flow

export const contacts = (state: any = [], action: any) => {
  switch (action.type) {
    case "FETCH_CONTACTS_SUCCESS":
      return [...action.contacts];
    default:
      return state;
  }
};
