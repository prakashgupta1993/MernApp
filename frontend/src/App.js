import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserPlaces from "./places/pages/UserPlaces";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:userId/places" element={<UserPlaces />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
          <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
