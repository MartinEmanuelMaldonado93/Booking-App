import React, { Dispatch, SetStateAction, useState } from "react";
import { FaBed } from "react-icons/fa";

type props = {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
};
/** Input of destination */
function Destination({ destination, setDestination }: props) {
  return (
    <div className='flex '>
      <FaBed />
      <input
        type='text'
        placeholder='Where are you going?'
        className='input py-1 max-w-ms'
        onChange={(e) => setDestination(e.target.value)} // todo: implement throttle
      />
    </div>
  );
}

export { Destination };