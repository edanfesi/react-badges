import React, { Component } from "react";
import "./styles/BadgesList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="container-fluid Badge-list__item">
              <div className="row">
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <img
                    src={badge.avatarUrl}
                    className="img-fluid rounded-circle"
                    alt="Avatar"
                  />
                </div>
                <div className="col-9">
                  <p className="lead font-weight-bold">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="text-primary font-weight-bold">
                    <FontAwesomeIcon icon={faTwitter} /> @{badge.twitter}
                  </p>
                  <p className="font-weight-light">{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
