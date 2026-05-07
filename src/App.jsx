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

    const newUser = {
      UserName,
      UserRole,
      UserDisc,
      ImageURL,
    };

    setallUSer([...AllUSer, newUser]);

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
    <div className="min-h-screen w-full bg-zinc-950 text-white overflow-x-hidden">
      {/* Heading */}
      <div className="w-full px-4 pt-10 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
          User Profile Creator
        </h1>

        <p className="text-zinc-400 mt-3 text-sm sm:text-base">
          Create beautiful responsive profile cards
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full flex justify-center px-3 sm:px-5">
        <form
          onSubmit={submitHandler}
          className="
          w-full
          max-w-6xl
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-4
          sm:p-6
          md:p-8
          shadow-2xl
          flex
          flex-col
          gap-4
          "
        >
          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              px-4
              sm:px-5
              py-3
              sm:py-4
              rounded-xl
              outline-none
              focus:border-emerald-500
              transition-all
              text-sm
              sm:text-base
              "
              type="text"
              required
              placeholder="Enter your name"
              value={UserName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <input
              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              px-4
              sm:px-5
              py-3
              sm:py-4
              rounded-xl
              outline-none
              focus:border-cyan-500
              transition-all
              text-sm
              sm:text-base
              "
              type="url"
              placeholder="Enter image URL"
              value={ImageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />

            <input
              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              px-4
              sm:px-5
              py-3
              sm:py-4
              rounded-xl
              outline-none
              focus:border-purple-500
              transition-all
              text-sm
              sm:text-base
              "
              type="text"
              required
              placeholder="Enter your role"
              value={UserRole}
              onChange={(e) => {
                setUserRole(e.target.value);
              }}
            />

            <input
              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              px-4
              sm:px-5
              py-3
              sm:py-4
              rounded-xl
              outline-none
              focus:border-orange-500
              transition-all
              text-sm
              sm:text-base
              "
              type="text"
              required
              placeholder="Enter your description"
              value={UserDisc}
              onChange={(e) => {
                setUserDisc(e.target.value);
              }}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
            w-full
            py-3
            sm:py-4
            rounded-xl
            bg-emerald-500
            hover:bg-emerald-600
            transition-all
            duration-300
            text-base
            sm:text-lg
            font-bold
            cursor-pointer
            active:scale-[0.98]
            "
          >
            Create User
          </button>
        </form>
      </div>

      {/* Cards Section */}
      <div
        className="
        w-full
        px-3
        sm:px-5
        py-10
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
        place-items-center
        "
      >
        {AllUSer.length > 0 ? (
          AllUSer.map((elem, idx) => {
            return (
              <Card
                key={idx}
                elem={elem}
                idx={idx}
                deleteHandler={deleteHandler}
              />
            );
          })
        ) : (
          <div className="text-zinc-500 text-base sm:text-lg font-medium col-span-full">
            No users created yet
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
