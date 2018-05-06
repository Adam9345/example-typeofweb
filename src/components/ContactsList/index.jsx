//@flow
import React, { Component } from "react";
import ContactItem from "./ContactItem";

type Props = {};

class ContactsList extends Component<Props> {
  render() {
    return (
      <div>
        <ul>
          <ContactItem
            login="typeofweb1"
            name="Lena"
            department="JavaScript Developer"
          />
          <ContactItem
            login="typeofweb2"
            name="Brian"
            department="Human Resources"
          />
          <ContactItem login="typeofweb3" name="Rick" department="QA" />
        </ul>
      </div>
    );
  }
}

export default ContactsList;
