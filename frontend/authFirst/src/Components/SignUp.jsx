import { useState } from "react";
import { APIINSTANCE } from "../api";

function SignUp() {
  const [email, SetEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [username, SetUsername] = useState("");
  const [phoneNum, SetphoneNum] = useState("");

  const body = {
    email,
    password,
    username,
    phoneNum,
  };

  async function onSubmit(e) {
    e.preventDefault();
    console.log(body);

    try {
      const response = await APIINSTANCE.post("/register", body);
      console.log("ssignedup successfully", response);
    } catch (error) {
      console.log(error);
    }
  }

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
          <form
            className="tracking-wide flex flex-col justify-center items-center h-full    space-y-2  "
            onSubmit={onSubmit}
          >
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
                type="email"
                className="border-2 border-black rounded-md p-1"
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>

            <div className="space-x-2 flex-col flex">
              <label>Password</label>
              <input
                type="password"
                className="border-2 border-black rounded-md p-1"
                onChange={(e) => Setpassword(e.target.value)}
              />
            </div>


            <div className="space-x-2 flex-col flex">
              <label>Phone Number</label>
              <input
                type="number"
                className="border-2 border-black rounded-md p-1"
                onChange={(e) => SetphoneNum(e.target.value)}
              />
            </div>

            <button className="bg-black text-white p-3 rounded-xl cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
