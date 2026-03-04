import { Outlet } from "react-router-dom";
import { useState , useEffect } from "react";
import UserContext from "./utils/UserContext";
import axios from "axios";
import { BASE_URL } from "./utils/constants";

function App() {
  const [userDetail, setUserDetail] = useState("");
   
  const fetchProfileData = async () => {
    const res = await axios.get(BASE_URL + "/api/users/profile/view" , {withCredentials:true});
    setUserDetail(res?.data?.data);
  };

  useEffect(() => {
    fetchProfileData();
  },[])

  return (
    <div>
      <UserContext.Provider value={{ loggedInUser: userDetail, setUserDetail }}>
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
