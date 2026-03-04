import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Home = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-96 shadow-lg">
        <figure>
          <img src={loggedInUser.profilePicture} alt="profilePicture" className=" border-b-2 border-slate-300"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{loggedInUser.username}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-base">Edit Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
