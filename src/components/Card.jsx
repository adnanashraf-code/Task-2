import React from "react";

const Card = (props) => {
  return (
    <div
      className="
      w-full
      max-w-85
      bg-zinc-900
      border
      border-zinc-800
      rounded-3xl
      p-5
      sm:p-6
      flex
      flex-col
      items-center
      text-center
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      group
      "
    >
      {/* Profile Image */}
      <div className="relative">
        <img
          className="
          h-24
          w-24
          sm:h-28
          sm:w-28
          rounded-full
          object-cover
          object-center
          border-4
          border-emerald-500
          shadow-md
          group-hover:scale-105
          transition-all
          duration-300
          "
          src={
            props.elem.ImageURL ||
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          }
          alt={props.elem.UserName}
        />

        <div
          className="
          absolute
          bottom-1
          right-1
          h-4
          w-4
          rounded-full
          bg-green-500
          border-2
          border-zinc-900
          "
        ></div>
      </div>

      {/* Name */}
      <h1
        className="
        text-xl
        sm:text-2xl
        mt-5
        font-bold
        text-white
        tracking-tight
        wrap-break-words
        "
      >
        {props.elem.UserName}
      </h1>

      {/* Role */}
      <h5
        className="
        text-emerald-400
        text-xs
        sm:text-sm
        font-semibold
        mt-3
        px-4
        py-1
        rounded-full
        bg-emerald-500/10
        border
        border-emerald-500/20
        wrap-break-words
        "
      >
        {props.elem.UserRole}
      </h5>

      {/* Description */}
      <p
        className="
        text-zinc-400
        text-sm
        leading-relaxed
        mt-4
        wrap-break-words
        "
      >
        {props.elem.UserDisc}
      </p>

      {/* Button */}
      <button
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
        className="
        mt-6
        w-full
        py-3
        rounded-xl
        bg-red-500
        hover:bg-red-600
        text-white
        text-sm
        sm:text-base
        font-semibold
        cursor-pointer
        active:scale-95
        transition-all
        duration-300
        "
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
