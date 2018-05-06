//@flow
import React, { Component } from "react";
import ContactItem from "./ContactItem";

type Props = {
  contacts: Array<Object>
};

class ContactsList extends Component<Props> {
  render() {
    const { contacts } = this.props;

    const renderContacts = contacts.map((contact, index) => (
      <ContactItem
        key={index}
        login={contact.login.username}
        name={contact.name.first}
        department={contact.location.city}
      />
    ));

    return (
      <div>
        <ul>
          {renderContacts}
          {/* <ContactItem
            login="typeofweb1"
            name="Lena"
            department="JavaScript Developer"
          />
          <ContactItem
            login="typeofweb2"
            name="Brian"
            department="Human Resources"
          />
          <ContactItem login="typeofweb3" name="Rick" department="QA" /> */}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
