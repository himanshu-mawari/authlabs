import {useState} from "react";

const LoginForm = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
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
              setPassword(e.target.value),
              console.log(e.target.value)
             }}
          />

          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full mt-4 font-login text-xl">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
