//@flow
import React, { Component } from "react";
import Avatar from "./Avatar";
import "./styles.css";

type Props = {
  login: string,
  name: string,
  department: string
};

class ContactItem extends Component<Props> {
  render() {
    const { login, name, department } = this.props;

    return (
      <li className="item">
        <Avatar login={login} />
        <div className="textContainer">
          <h2>{name}</h2>
          <p>{department}</p>
        </div>
      </li>
    );
  }
}

export default ContactItem;
