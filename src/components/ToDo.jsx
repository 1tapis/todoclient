import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { baseURL } from "../utils/constant";
import axios from "axios";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
    const deleteTodo = () => {
      axios.delete(`${baseURL}/delete/${id}`).then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      });
    };
  
    const updateToDo = () => {
      setPopupContent({ text, id });
      setShowPopup(true);
    };
  
    return (
      <div className="toDo">
        {text}
        <div className="icons">
          <CiEdit className="icon" onClick={updateToDo} />
          <MdDeleteOutline className="icon" onClick={deleteTodo} />
        </div>
      </div>
    );
  };
  
  export default ToDo;
