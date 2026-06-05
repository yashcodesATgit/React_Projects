import React from "react";

const RightCard = ({ user }) => {
  return (
    <div className="h-full overflow-hidden shrink-0 relative w-80 rounded-4xl bg-orange-200 transform transition duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl shadow-sm">
      <img
        className="h-full w-full object-cover"
        src={user.image}
        alt={user.tag}
      />

      <div className="absolute top-0 left-0 h-full w-full p-9 flex flex-col justify-between">
        <h2 className="bg-white/15 border border-white/30 text-white text-2xl rounded-full h-9 w-9 flex justify-center items-center backdrop-blur-sm">
          {user.id}
        </h2>
        <div>
          <p className="text-lg font-bold leading-normal text-white">
            {user.intro}
          </p>

          <div className="mt-5 flex justify-between gap-4">
            <button className="bg-white/15 border border-white/30 text-white font-medium text-base w-40 h-11 rounded-full flex items-center justify-center text-center px-4 hover:bg-white/25 transition">
              {user.tag}
            </button>
            <button className="bg-white/15 border border-white/30 text-white font-bold text-base w-40 h-11 rounded-full flex items-center justify-center px-4 hover:bg-white/25 transition">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
