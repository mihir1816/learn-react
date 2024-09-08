import React from 'react';

function Album({ image, name, desc, id }) {
  return (
    <>
      <div className="min-w-[180px] p-2 bg-rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt="" />
        <p className="font-bold mt-2 text-white">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
      </div>
    </>
  );
}

export default Album;
