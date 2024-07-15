import React from "react";

function Song({ sendData, handleSongsUpdate, index }) {
  const { image, songName, AuthName, desc, added } = sendData;
  return (
    <>
      <div className="w-56 h-32 bg-orange-300 py-3 px-3 mt-6 ml-9 flex relative rounded-md">
        <div className="w-20 h-16 bg-slate-900 rounded-md overflow-hidden ">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="ml-2">
          <h3 className="font-semibold">
            <span className="font-mono text-xs">Song: </span> {songName}
          </h3>
          <h6 className="text-xs">
            <span className="font-mono text-xs">Author:</span>
            {AuthName}
          </h6>
          <marquee
            className="text-xs"
            behavior=""
            direction="left"
            scrollamount="3"
          >
            {desc}
          </marquee>
        </div>

        <button
          onClick={() => handleSongsUpdate(index)}
          className={` ${
            added ? "bg-green-600" : "bg-blue-700"
          } px-2 py-1 text-xs absolute bottom-0 rounded-full  text-white mb-2 left-1/2 -translate-x-[50%] translate-y-[50%]`}
        >
          {added ? "Added" : "Add to Favorites"}
        </button>
      </div>
    </>
  );
}

export default Song;
