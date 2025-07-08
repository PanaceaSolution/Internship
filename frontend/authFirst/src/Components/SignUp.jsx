import { useState } from "react";

function SignUp() {

  const [email, SetEmail] = useState("");
  const [password, Setpassword] = useState();
  const [username, SetUsername] = useState();

  console.log(username)
  return (
    <div className=" flex h-full shadow-2xl border-gray-200 m-27">
      <div className="w-1/2">
        <img src="	https://medicarelifeharmony.vercel.app/_next/image?url=%2Fauth.webp&w=1920&q=75" />
      </div>

      <form className="w-1/2 tracking-wide flex flex-col justify-center items-center-safe space-y-8 content-center ">
        
        <div className="space-x-2 " onChange={(e)=>SetUsername(e.target.value)}>
          <label >User name</label>
          <input type="text" className="border-2 border-black rounded-md p-1" />
        </div>

        <div className="space-x-2">
          <label>Gmail</label>
          <input type="text" className="border-2 border-black rounded-md" />
        </div>

        <div className="space-x-2">
          <label>Password</label>
          <input type="text" className="border-2 border-black rounded-md" />
        </div>

        <button >Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
