import {useState , useContext} from "react";
import axios from "axios"
import {BASE_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [email , setEmail] = useState("Himanshumawari@gmail.com");
  const [password , setPassword] = useState("Himanshu@123");
  const {setUserDetail} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
        const res = await axios.post(BASE_URL + "/api/auth/login" , {email , password} , {withCredentials:true});
        setUserDetail(res?.data?.data);
        navigate("/app")

  }
  return (
    <div className="flex justify-center mt-20 ">
      <div className="card bg-base-100 w-96 shadow-2xl ">
        <div className="text-center pt-10 ">
          <span className="text-4xl  w-80 text-left pb-3  inline-block border-b-2 border-slate-500 font-login">
            Login form
          </span>
        </div>
        <div className="card-body p-10">
          <label>Email</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            />
          <label>Password</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={password}
             onChange={(e) => {
              setPassword(e.target.value)
             }}
          />

          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full mt-4 font-login text-xl"
            onClick={() => handleLogin()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
