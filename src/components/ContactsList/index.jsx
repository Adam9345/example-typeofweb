//@flow
import React, { Component } from "react";
import ContactItem from "./ContactItem";
import "./styles.css";

type Props = {
  contacts: Array<Object>,
  isFetching: Boolean
};

class ContactsList extends Component<Props> {
  render() {
    const { contacts, isFetching } = this.props;

    const renderContacts = contacts.map((contact, index) => (
      <ContactItem
        key={index}
        login={contact.login.username}
        name={contact.name.first}
        department={contact.location.city}
      />
    ));

    if (isFetching) {
      return (
        <div>
          <ul>{renderContacts}</ul>
        </div>
      );
    } else {
      return <div className="loadingText">Ładowanie...</div>;
    }
  }
}

export default ContactsList;
