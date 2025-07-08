import { useState } from "react";

function SignUp() {
  const [email, SetEmail] = useState("");
  const [password, Setpassword] = useState();
  const [username, SetUsername] = useState();

  console.log(username);

  return (
    <div className=" flex h-screen  w-screen  justify-center   items-center ">
      <div className="flex w-3/4 h-3/4 shadow-2xl bg-gray-200 rounded-lg overflow-hidden">
        <div className=" object-cover  md:w-1/2">
          <img
            src="	https://medicarelifeharmony.vercel.app/_next/image?url=%2Fauth.webp&w=1920&q=75"
            className="h-full"
          />
        </div>

        <div className=" w-1/2 ">
          <form className="tracking-wide flex flex-col justify-center items-center h-full    space-y-2  ">
            <div className="space-x-2 flex-col flex">
              <label>User name</label>
              <input
                type="text"
                className="border-2 border-black rounded-md p-1"
                onChange={(e) => SetUsername(e.target.value)}
              />
            </div>

            <div className="space-x-2 flex-col flex">
              <label>Gmail</label>
              <input
                type="text"
                className="border-2 border-black rounded-md p-1"
                onChange={(e) => SetUsername(e.target.value)}
              />
            </div>

            <div className="space-x-2 flex-col flex">
              <label>Password</label>
              <input
                type="text"
                className="border-2 border-black rounded-md p-1"
                onChange={(e) => SetUsername(e.target.value)}
              />
            </div>

            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
