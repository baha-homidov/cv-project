import React from "react";
import { OutputInfo } from "./components/OutputInfo";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      title: "Software Engineer",
      phoneNumber: "+992-92-999-99-99",
      email: "email@example.com",
      educationExperienceNum: 1, // initial number of entries
      educationExperience: [
        {
          schoolName: "Stanford University",
          title: "Computer Science",
          startDate: "2014-09",
          graduationDate: "2019-07",
        },
      ],
      workExperience: [
        {
          companyName: "Microsoft",
          title: "Software Engineer",
          mainTasks: "Some Tasks",
          startDate: "2020-01",
          endDate: "2022-03",
        },
      ],
    };
    this.handleName = this.handleName.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    // schoolExperience helper methods
    this.handleEducationName = this.handleEducationName.bind(this);
    this.handleEducationTitle = this.handleEducationTitle.bind(this);
    this.handleEducationStartDate = this.handleEducationStartDate.bind(this);
    this.handleEducationGraduationDate =
      this.handleEducationGraduationDate.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
    this.deleteEducationEntry = this.deleteEducationEntry.bind(this);

    // workExperience helper methods
    this.handleWorkName = this.handleWorkName.bind(this);
    this.handleWorkTitle = this.handleWorkTitle.bind(this);
    this.handleWorkTasks = this.handleWorkTasks.bind(this);
    this.handleWorkStartDate = this.handleWorkStartDate.bind(this);
    this.handleWorkEndDate = this.handleWorkEndDate.bind(this);
    this.addExperienceEntry = this.addExperienceEntry.bind(this);
    this.deleteExperienceEntry = this.deleteExperienceEntry.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value,
    });
    console.log(this.state.title);
  }

  handlePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value });
    console.log(this.state);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleEducationName(e, index) {
    const newArr = this.state.educationExperience.slice();
    newArr[index].schoolName = e.target.value;
    this.setState({ educationExperience: newArr });
  }

  handleEducationTitle(e, index) {
    const newArr = this.state.educationExperience.slice();
    newArr[index].title = e.target.value;
    this.setState({ educationExperience: newArr });
  }

  handleEducationStartDate(e, index) {
    const newArr = this.state.educationExperience.slice();
    newArr[index].startDate = e.target.value;
    this.setState({ educationExperience: newArr });
  }

  handleEducationGraduationDate(e, index) {
    const newArr = this.state.educationExperience.slice();
    newArr[index].graduationDate = e.target.value;
    this.setState({ educationExperience: newArr });
  }

  addEducationEntry(e) {
    e.preventDefault();
    const newArr = this.state.educationExperience.slice();
    newArr.push({
      schoolName: "School Name",
      title: "Title",
      startDate: "2010-09",
      graduationDate: "2015-07",
    });

    this.setState({ educationExperience: newArr });
  }

  deleteEducationEntry(e, index) {
    e.preventDefault();
    const newArr = this.state.educationExperience.slice();
    newArr.splice(index, 1);
    this.setState({ educationExperience: newArr });
  }

  // work Experience helper methods

  handleWorkName(e, index) {
    const newArr = this.state.workExperience.slice();
    newArr[index].companyName = e.target.value;
    this.setState({ workExperience: newArr });
  }

  handleWorkTitle(e, index) {
    const newArr = this.state.workExperience.slice();
    newArr[index].title = e.target.value;
    this.setState({ workExperience: newArr });
  }

  handleWorkTasks(e, index) {
    const newArr = this.state.workExperience.slice();
    newArr[index].mainTasks = e.target.value;
    this.setState({ workExperience: newArr });
  }

  handleWorkStartDate(e, index) {
    const newArr = this.state.workExperience.slice();
    newArr[index].startDate = e.target.value;
    this.setState({ workExperience: newArr });
  }

  handleWorkEndDate(e, index) {
    const newArr = this.state.workExperience.slice();
    newArr[index].endDate = e.target.value;
    this.setState({ workExperience: newArr });
  }

  addExperienceEntry(e) {
    e.preventDefault();
    const newArr = this.state.workExperience.slice();
    newArr.push({
      companyName: "Some Company",
      title: "Some Title",
      mainTasks: "Some Tasks",
      startDate: "2020-01",
      endDate: "2022-02",
    });
    this.setState({ workExperience: newArr });
  }

  deleteExperienceEntry(e, index) {
    e.preventDefault();
    const newArr = this.state.workExperience.slice();
    newArr.splice(index, 1);
    this.setState({ workExperience: newArr });
  }

  render() {
    return (
      <div className="App">
        <div className="input-info">
          <h1 className="header-title">
            Input your info and get real-time results!
          </h1>
          <form className="input-form">
            <div className="general-info">
              <h2 className="general-info-header">General Info</h2>
              <label className="name">
                Name
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleName}
                />
              </label>
              <label className="title">
                Title
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleTitle}
                />
              </label>
              <label className="phone-number">
                Phone number{" "}
                <input
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneNumber}
                />
              </label>
              <label className="email">
                Email{" "}
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </label>
            </div>
            <div className="eduaction">
              <h2 className="education-title">Education</h2>
              {this.state.educationExperience.map((item, index) => {
                return (
                  <div className="education-entry" key={index}>
                    <label className="name">
                      School Name
                      <input
                        type="text"
                        value={item.schoolName}
                        onChange={(e) => this.handleEducationName(e, index)}
                      />
                    </label>
                    <label className="title">
                      Title of Study
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => this.handleEducationTitle(e, index)}
                      />
                    </label>
                    <label className="start-date">
                      Start Date{" "}
                      <input
                        value={item.startDate}
                        type="month"
                        onChange={(e) =>
                          this.handleEducationStartDate(e, index)
                        }
                      />
                    </label>
                    <label className="graduation-date">
                      Graduation Date{" "}
                      <input
                        type="month"
                        value={item.graduationDate}
                        onChange={(e) =>
                          this.handleEducationGraduationDate(e, index)
                        }
                      />
                    </label>
                    <button
                      className="delete-entry"
                      onClick={(e) => this.deleteEducationEntry(e, index)}
                    >
                      Delete Entry
                    </button>
                  </div>
                );
              })}
              <button
                className="add-entry"
                onClick={this.addEducationEntry}
              >
                Add Entry
              </button>
            </div>
            <div className="experience">
              <h2 className="experience-title">Work Experience</h2>
              {this.state.workExperience.map((item, index) => {
                return (
                  <div className="experience-entry" key={index}>
                    <label className="name">
                      Company Name
                      <input
                        type="text"
                        value={item.companyName}
                        onChange={(e) => this.handleWorkName(e, index)}
                      />
                    </label>
                    <label className="title">
                      Title
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => this.handleWorkTitle(e, index)}
                      />
                    </label>
                    <label className="main-tasks">
                      Main Tasks
                      <textarea
                        cols="30"
                        rows="5"
                        value={item.mainTasks}
                        onChange={(e) => this.handleWorkTasks(e, index)}
                      ></textarea>
                    </label>
                    <label className="start-date">
                      Start Date
                      <input
                        value={item.startDate}
                        type="month"
                        onChange={(e) =>
                          this.handleWorkStartDate(e, index)
                        }
                      />
                    </label>
                    <label className="end-date">
                      End Date
                      <input
                        type="month"
                        value={item.endDate}
                        onChange={(e) =>
                          this.handleWorkEndDate(e, index)
                        }
                      />
                    </label>
                    <button
                      className="delete-entry"
                      onClick={(e) => this.deleteExperienceEntry(e, index)}
                    >
                      Delete Entry
                    </button>
                  </div>
                );
              })}
              <button
                className="add-entry"
                onClick={this.addExperienceEntry}
              >
                Add Entry
              </button>
            </div>
          </form>
        </div>
        <OutputInfo className="output-info" generalInfo={this.state} />
      </div>
    );
  }
}

export default App;
