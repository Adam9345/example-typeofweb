//@flow
import React, { Component } from "react";
import "./styles.css";

type Props = {
  login: string
};

class Avatar extends Component<Props> {
  render() {
    const { login } = this.props;

    const imgUrl = `https://api.adorable.io/avatars/55/${login}`;

    return (
      <div className="avatarContainer">
        <img src={imgUrl} alt="avatar" />
      </div>
    );
  }
}

export default Avatar;
