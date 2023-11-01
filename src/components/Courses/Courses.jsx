import React, { useState } from "react";
import axios from "axios";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  axios
    .get("https://hhqv2backend.vercel.app/api/course")
    .then(function (response) {
      // handle success
      setCourses(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return (
    <div className="courses">
      <h1 className="header">Courses</h1>
      <div className="cards">
        {courses.map((course) => (
          <div className="card">
            <h1>{course.title} </h1>
            <p className="">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
