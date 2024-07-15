import React from "react";

function Navbar({ data }) {
  return (
    <div className="w-full px-4 py-3 bg-blue-500 flex justify-between items-center">
      <h4 className="font-semibold text-white">Songs</h4>
      <div className="p-2 font-bold text-xs flex bg-orange-600 text-white rounded-md">
        <h3>favorite</h3>
        <h2 className="ml-2">{data.filter((item) => item.added).length}</h2>
      </div>
    </div>
  );
}

export default Navbar;
