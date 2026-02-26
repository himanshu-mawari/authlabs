import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserDetails from "./utils/UserContext";

function App() {
  const [userDetail, setUserDetail] = useState("");

  return (
    <div>
      <UserDetails.Provider value={{ loggedInUser: userDetail, setUserDetail }}>
        <Outlet />
      </UserDetails.Provider>
    </div>
  );
}

export default App;
