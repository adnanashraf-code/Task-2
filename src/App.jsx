import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [UserName, setUserName] = useState("");
  const [UserRole, setUserRole] = useState("");
  const [UserDisc, setUserDisc] = useState("");
  const [ImageURL, setImageURL] = useState("");
  const [AllUSer, setallUSer] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setallUSer([...AllUSer, { UserName, UserRole, UserDisc, ImageURL }]);
    setUserName("");
    setUserRole("");
    setUserDisc("");
    setImageURL("");
  };

  const deleteHandler = (idx) => {
    const copyuser = [...AllUSer];
    copyuser.splice(idx, 1);
    setallUSer(copyuser);
  };
  return (
    <div className="bg-black text-white h-screen w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="px-2 py-2 flex flex-wrap"
      >
        <input
          className="border-2 px-5 rounded m-2 lg:w-[48%] text-xl font-semibold"
          type="text"
          required
          placeholder="Enter your name  "
          value={UserName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 rounded m-2 lg:w-[48%] text-xl font-semibold"
          type="text"
          placeholder="Enter your Image url  "
          value={ImageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 rounded m-2 lg:w-[48%] text-xl font-semibold"
          type="text"
          required
          placeholder="Enter your Role  "
          value={UserRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 rounded m-2 lg:w-[48%] text-xl font-semibold"
          type="text"
          required
          placeholder="Enter your Description  "
          value={UserDisc}
          onChange={(e) => {
            setUserDisc(e.target.value);
          }}
        />
        <button
          type="submit"
          className="px-5 py-2 bg-emerald-500 rounded m-2 w-[96%] text-xl font-semibold active:scale-95"
        >
          Create User
        </button>
      </form>

      <div className="px-4 py-10 flex flex-wrap gap-4">
        {AllUSer.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              elem={elem}
              idx={idx}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
