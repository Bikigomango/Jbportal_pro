import React from "react";

const Item = (props) => {
  return (
    <div className="flex justify-center mt-5 items-center">
      <div className="w-4/12 h-16 flex gap-2">
        <div className="w-4/5 h-20 bg-blue-500 rounded-md text-md text-white flex items-center p-3 cursor-pointer hover:bg-blue-700 ">
          {props.text}
        </div>
        <div className="flex justify-center items-center bg-green-600 rounded-md h-20 p-6 text-white  hover:bg-green-800 cursor-pointer" onClick={()=>{
          props.updatItem(props.id)
        }}>
          update
        </div>
        <div
          className="w-1/5 h-20 bg-blue-500 rounded-md text-lg text-white flex justify-center items-center hover:bg-red-500 cursor-pointer"
          onClick={()=>{
            props.deleteItem(props.id);
          }}>Delete</div>
      </div>
    </div>
  );
};

export default Item;
