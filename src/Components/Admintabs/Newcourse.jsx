import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInst from "../../../axiosinstance";

const Newcourse = () => {
  const [selectedTime, setSelectedTime] = useState(0);
  const [courseTitle, setcourseTitle] = useState(null);
  const [coursesubTitle, setcoursesubTitle] = useState(null);
  const [courseDesc, setcourseDesc] = useState(null);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("Basic");
  const [price, setPrice] = useState(null);
  const handleSkillLevelChange = (e) => {
    setSelectedSkillLevel(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedTime &&
      courseTitle &&
      coursesubTitle &&
      courseDesc &&
      selectedSkillLevel &&
      price
    ) {
      axiosInst
        .post("/auth/courses", {
          coursetitle: courseTitle,
          coursesubtitle: coursesubTitle,
          coursedescription: courseDesc,
          skilllevel: selectedSkillLevel,
          courseduration: selectedTime,
          price: price,
        })
        .then((response) => {
          toast.success('Course Added ✅', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        })
        .catch((error) => {
          if (error.response.data.error === "User not found")
            toast.error("You must be Logged in", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
        });
      setSelectedTime(0);
      setcourseTitle("");
      setcoursesubTitle("");
      setcourseDesc("");
      setSelectedSkillLevel("Basic");
      setPrice("");
    } else {
      toast.error("You Must fill all fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <form className="courseform" onSubmit={handleSubmit}>
        <div className="ctitle cformstyle">
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="inputfieldsofadmin"
            value={courseTitle}
            onChange={(e) => {
              setcourseTitle(e.target.value);
            }}
          />
          <br />
        </div>
        <div className="csubtitle cformstyle">
          <label htmlFor="title">Course Sub heading</label>
          <input
            type="text"
            name="title"
            id="title"
            className="inputfieldsofadmin"
            value={coursesubTitle}
            onChange={(e) => {
              setcoursesubTitle(e.target.value);
            }}
          />
          <br />
        </div>
        <div className="cdesc cformstyle">
          <label htmlFor="desc">Course Description</label>
          <textarea
            name="desc"
            id="desc"
            className="inputfieldsofadmin"
            value={courseDesc}
            onChange={(e) => {
              setcourseDesc(e.target.value);
            }}
          ></textarea>
          <br />
        </div>
        <div className="cdesc cformstyle">
          <label htmlFor="desc">Course Price</label>
          <input
            name="price"
            id="price"
            type="number"
            className="inputfieldsofadmin"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
          <br />
        </div>
        <div className="cduration cformstyle">
          <label htmlFor="desc">Course Duration:{selectedTime} Hours</label>
          <input
            type="range"
            min="0"
            max="24"
            step="0.5"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="inputfieldsofadmin"
          />
        </div>
        <div className="cskill cformstyle">
          <label htmlFor="skillLevel">Skill Level:</label>
          <select
            id="skillLevel"
            value={selectedSkillLevel}
            onChange={handleSkillLevelChange}
            className="inputfieldsofadmin"
          >
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <button type="submit" className="authbtn inputfieldsofadmin">
          Add Course
        </button>
      </form>
    </>
  );
};

export default Newcourse;
