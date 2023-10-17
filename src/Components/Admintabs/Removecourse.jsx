import React, { useEffect, useState } from "react";
import {AiOutlineClockCircle,AiFillDelete} from 'react-icons/ai'
import axiosInst from "../../../axiosinstance";

const Removecourse = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    axiosInst
      .get("/auth/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  {courses&&console.log(courses);}
  const handleDelete = (id) =>{
    axiosInst
    .delete(`/auth/courses/${id}`)
    .then(axiosInst
      .get("/auth/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      }))
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="courseBox">
      {courses &&
        courses.map((course,key) => (
          <div className="courseContainer">
            <h2 className="ctitle">{course.coursetitle}</h2>
            <h3 className="csubtitle">{course.coursesubtitle}</h3>
            {/* <h4 className="cdesc">{course.coursedescription}</h4> */}
            <h4 className="coursedetails">
              <span className="cdurationtext"><span className="clock"><AiOutlineClockCircle/></span>{course.courseduration.$numberDecimal.toString()} hrs</span>
              <span className="cskill">Skill Level: {course.skilllevel}</span>
              <span className="cprice">₹ {course.price}</span>
            </h4>
            <button className="delbtn" onClick={()=>handleDelete(course._id)}><AiFillDelete/></button>
          </div>
        ))}
    </div>)
}

export default Removecourse