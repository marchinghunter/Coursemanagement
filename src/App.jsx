import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import User from "./Components/User";
import Error from "./Components/Errorpage";
import Header from "./Components/Header";
import Admin from "./Components/Admin";
import Newcourse from "./Components/Admintabs/Newcourse";
import Removecourse from "./Components/Admintabs/Removecourse";
import Course from "./Components/Course";
import Protectedroute from "./Components/Protectedroute";
import axiosInst from "../axiosinstance";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      axiosInst.get('/auth/login/success', {
        withCredentials: true, 
      })
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data.user);
          } else {
            throw new Error("Authentication has failed!");
          }
        })
        .catch((error) => {
        });
    };
    getUser();
  }, []);
  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<User User={user}/>} />
        <Route path="login" element={
          <Protectedroute Component={Login} User={user}/>
        } />
        <Route path="admin" element={<Admin />} >
          <Route index element={<Newcourse />} />
          <Route path="newcourse" element={<Newcourse />} />
          <Route path="removecourse" element={<Removecourse />} />
        </Route>
        <Route path="signup" element={<Protectedroute Component={Signup} User={user}/>} />
        <Route path="courses" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
