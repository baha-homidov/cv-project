import React, { useState} from "react";
import { OutputInfo } from "./components/OutputInfo";
import "./styles/App.css";

function App(props) {
  const [name, setName] = useState("John Doe");
  const [title, setTitle] = useState("Software Engineer");
  const [phoneNumber, setPhoneNumber] = useState("+992-92-999-99-99");
  const [email, setEmail] = useState("email@example.com");
  const [educationExperience, setEducationExperience] = useState([
    {
      schoolName: "Stanford University",
      title: "Computer Science",
      startDate: "2014-09",
      graduationDate: "2019-07",
    },
  ]);
  const [workExperience, setWorkExperience] = useState([
    {
      companyName: "Microsoft",
      title: "Software Engineer",
      mainTasks: "Some Tasks",
      startDate: "2020-01",
      endDate: "2022-03",
    },
  ]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  // education helper functions

  function handleEducationName(e, index) {
    const newArr = educationExperience.slice();
    newArr[index].schoolName = e.target.value;
    setEducationExperience(newArr);
  }

  function handleEducationTitle(e, index) {
    const newArr = educationExperience.slice();
    newArr[index].title = e.target.value;
    setEducationExperience(newArr);
  }

  function handleEducationStartDate(e, index) {
    const newArr = educationExperience.slice();
    newArr[index].startDate = e.target.value;
    setEducationExperience(newArr);
  }

  function handleEducationGraduationDate(e, index) {
    const newArr = educationExperience.slice();
    newArr[index].graduationDate = e.target.value;
    setEducationExperience(newArr);
  }

  function deleteEducationEntry(e, index) {
    e.preventDefault();
    const newArr = educationExperience.slice();
    newArr.splice(index, 1);
    setEducationExperience(newArr);
  }

  function addEducationEntry(e) {
    e.preventDefault();
    const newArr = educationExperience.slice();
    newArr.push({
      schoolName: "School Name",
      title: "Title",
      startDate: "2010-09",
      graduationDate: "2015-07",
    });

    setEducationExperience(newArr);
  }

  // work Experience helper methods

  function handleWorkName(e, index) {
    const newArr = workExperience.slice();
    newArr[index].companyName = e.target.value;
    setWorkExperience(newArr);
  }

  function handleWorkTitle(e, index) {
    const newArr = workExperience.slice();
    newArr[index].title = e.target.value;
    setWorkExperience(newArr);
  }

  function handleWorkTasks(e, index) {
    const newArr = workExperience.slice();
    newArr[index].mainTasks = e.target.value;
    setWorkExperience(newArr);
  }

  function handleWorkStartDate(e, index) {
    const newArr = workExperience.slice();
    newArr[index].startDate = e.target.value;
    setWorkExperience(newArr);
  }

  function handleWorkEndDate(e, index) {
    const newArr = workExperience.slice();
    newArr[index].endDate = e.target.value;
    setWorkExperience(newArr);
  }

  function addExperienceEntry(e) {
    e.preventDefault();
    const newArr = workExperience.slice();
    newArr.push({
      companyName: "Some Company",
      title: "Some Title",
      mainTasks: "Some Tasks",
      startDate: "2020-01",
      endDate: "2022-02",
    });
    setWorkExperience(newArr);
  }

  function deleteExperienceEntry(e, index) {
    e.preventDefault();
    const newArr = workExperience.slice();
    newArr.splice(index, 1);
    setWorkExperience(newArr);
  }

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
              <input type="text" value={name} onChange={handleName} />
            </label>
            <label className="title">
              Title
              <input type="text" value={title} onChange={handleTitle} />
            </label>
            <label className="phone-number">
              Phone number{" "}
              <input value={phoneNumber} onChange={handlePhoneNumber} />
            </label>
            <label className="email">
              Email <input type="text" value={email} onChange={handleEmail} />
            </label>
          </div>
          <div className="eduaction">
            <h2 className="education-title">Education</h2>
            {educationExperience.map((item, index) => {
              return (
                <div className="education-entry" key={index}>
                  <label className="name">
                    School Name
                    <input
                      type="text"
                      value={item.schoolName}
                      onChange={(e) => handleEducationName(e, index)}
                    />
                  </label>
                  <label className="title">
                    Title of Study
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleEducationTitle(e, index)}
                    />
                  </label>
                  <label className="start-date">
                    Start Date{" "}
                    <input
                      value={item.startDate}
                      type="month"
                      onChange={(e) => handleEducationStartDate(e, index)}
                    />
                  </label>
                  <label className="graduation-date">
                    Graduation Date{" "}
                    <input
                      type="month"
                      value={item.graduationDate}
                      onChange={(e) => handleEducationGraduationDate(e, index)}
                    />
                  </label>
                  <button
                    className="delete-entry"
                    onClick={(e) => deleteEducationEntry(e, index)}
                  >
                    Delete Entry
                  </button>
                </div>
              );
            })}
            <button className="add-entry" onClick={addEducationEntry}>
              Add Entry
            </button>
          </div>
          <div className="experience">
            <h2 className="experience-title">Work Experience</h2>
            {workExperience.map((item, index) => {
              return (
                <div className="experience-entry" key={index}>
                  <label className="name">
                    Company Name
                    <input
                      type="text"
                      value={item.companyName}
                      onChange={(e) => handleWorkName(e, index)}
                    />
                  </label>
                  <label className="title">
                    Title
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleWorkTitle(e, index)}
                    />
                  </label>
                  <label className="main-tasks">
                    Main Tasks
                    <textarea
                      cols="30"
                      rows="5"
                      value={item.mainTasks}
                      onChange={(e) => handleWorkTasks(e, index)}
                    ></textarea>
                  </label>
                  <label className="start-date">
                    Start Date
                    <input
                      value={item.startDate}
                      type="month"
                      onChange={(e) => handleWorkStartDate(e, index)}
                    />
                  </label>
                  <label className="end-date">
                    End Date
                    <input
                      type="month"
                      value={item.endDate}
                      onChange={(e) => handleWorkEndDate(e, index)}
                    />
                  </label>
                  <button
                    className="delete-entry"
                    onClick={(e) => deleteExperienceEntry(e, index)}
                  >
                    Delete Entry
                  </button>
                </div>
              );
            })}
            <button className="add-entry" onClick={addExperienceEntry}>
              Add Entry
            </button>
          </div>
        </form>
      </div>
      <OutputInfo
        className="output-info"
        generalInfo={{
          name,
          title,
          phoneNumber,
          email,
          educationExperience,
          workExperience,
        }}
      />
    </div>
  );
}

export default App;
