import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Login from "./components/Login";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, logout, selectUser } from "./features/userSlice";
// import  { useEffect } from "react";
import { auth } from "./components/firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
        // auth.signOut();
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />}></Route>
              <Route path="/mail" element={<Mail />}></Route>
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
