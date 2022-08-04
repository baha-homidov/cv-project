import React from "react";
import "../styles/OutputInfo.css";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import educationIcon from "../assets/education.svg";

export class OutputInfo extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className={this.props.className}>
        <div className="container">
          <div className="personal-info-container">
            <div className="name">{this.props.generalInfo.name}</div>
            <div className="title">{this.props.generalInfo.title}</div>

            <div className="phone-number">
              <img className="icon" src={phoneIcon} alt="phone icon" />
              {this.props.generalInfo.phoneNumber}
            </div>
            <div className="email">
              <img className="icon" src={emailIcon} alt="phone icon" />

              {this.props.generalInfo.email}
            </div>
          </div>
          <div className="education">
            <div className="education-title">
              <img
                className="icon-large"
                src={educationIcon}
                alt="phone icon"
              />
              Education
            </div>
            {this.props.generalInfo.educationExperience.map((item, index) => {
              return (
                <div className="education-card" key={index}>
                  <div className="name">{item.schoolName}</div>
                  <div className="title">{item.title}</div>
                  <div className="time">
                    {item.startDate} to {item.graduationDate}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="work-experience">
            <div className="experience-title">
              <img
                className="icon-large"
                src={educationIcon}
                alt="phone icon"
              />
              Work Experience
            </div>
            {this.props.generalInfo.workExperience.map((item, index) => {
              return (
                <div className="work-card" key={index}>
                  <h2 className="name">{item.companyName}</h2>
                  <h4 className="time">
                    {item.startDate} to {item.endDate}
                  </h4>
                  <h3 className="title">{item.title}</h3>
                  <div className="tasks">{item.mainTasks}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
