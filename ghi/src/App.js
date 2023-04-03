import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AccountSignupForm from "./AccountSignupForm.js";
import TherapistSignupForm from "./TherapistSignupForm";
import Nav from "./Nav.js";
import { useToken, AuthProvider } from "./Authentication.js";
import MainPage from "./MainPage.js";
import TherapistLoginForm from "./AccountLoginForm.js";
import TherapistProfile from "./TherapistProfile";
import TherapistUpdateForm from "./TherapistUpdateForm";
import Foot from "./Foot"
import React from 'react';

function GetToken() {
  useToken();
  return null;
}

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  return (
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <GetToken />
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="account" element={<AccountSignupForm />} />
            <Route path="/therapist/:username" element={<TherapistSignupForm />}/>
            <Route path="/account/login" element={<AccountLoginForm />} />
            <Route path="/therapist/detail/:id" element={<TherapistProfile />}/>
            <Route path="therapist/update" element={<TherapistUpdateForm />} />
          </Routes>
        </div>
        <Foot/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
