import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import LogOut from "./Pages/LogOut/LogOut";
import SignUp from "./Pages/SignUp/SignUp";
import TaskForm from "./Pages/TaskForm/TaskForm";
import TaskList from "./Pages/TaskList/TaskList";
import Error from "./Components/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserAccount from "./Pages/UserAccount/UserAccount";

export function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/logOut" element={<LogOut />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/taskform" element={<TaskForm />} />
      <Route path="/taskhub" element={<TaskList />} />
      <Route path="/account" element={<UserAccount/>} />
    </Routes>
    <Footer />
    </>
  )
}

export function WrappedApp(){
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
