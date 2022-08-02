import React from "react";

export class OutputInfo extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.generalInfo.name}</h1>
        <h2>{this.props.generalInfo.title}</h2>
        <div className="phone-number-container">
          <div className="phone number">
            {this.props.generalInfo.phoneNumber}
          </div>
        </div>
        <div className="email-container">
          <div className="email">{this.props.generalInfo.email}</div>
        </div>
        <div className="education">
          {this.props.generalInfo.educationExperience.map((item, index) => {
            return (
              <div className="education-entry" key={index}>
                <h2 className="title">{item.schoolName}</h2>
                <h4 className="time">
                  {item.startDate} - {item.graduationDate}
                </h4>
                <h3 className="title">{item.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="work-experience">
        {this.props.generalInfo.workExperience.map((item, index) => {
            return (
              <div className="work-entry" key={index}>
                <h2 className="title">{item.companyName}</h2>
                <h4 className="time">
                  {item.startDate} - {item.endDate}
                </h4>
                <h3 className="title">{item.title}</h3>
                <h4>{ item.mainTasks}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
