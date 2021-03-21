import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { removeShow, updateShow } from '../store/actions/showActions'
import history from '../history';

export const ShowStrip = ({ show }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [hall, setHall] = useState();
  const [time, setTime] = useState();
  let trash = (<i className="far fa-trash-alt"></i>);

  useEffect(() => {
    // setHall(show.hall);
    // setTime(show.time);
    console.log('TITLE:', show.title);
  }, [])

  const doUpdate = (event) => {
    event.preventDefault();
    const jsObj = Date.parse(time); // to unix time
    var newShow = show;
    newShow.hall = hall;
    newShow.time = time;
    newShow.ts = jsObj;
    // let newShow = { title: show.title, hall: hall, time: time, ts: jsObj }
    dispatch(updateShow(newShow));
    setEdit(false);


  }

  let updateForm = (
    <form onSubmit={doUpdate} className="ral">
      <input type="number" name="hall" onChange={ev => { setHall(ev.target.value); }}  />
      <input type="datetime-local" name="time" onChange={ev => { setTime(ev.target.value); }} />
      <div><button>Update</button></div>
    </form>);

  return (
    <div className="rb movie-strip">

      {/* LEFT */}
      <div className="ral">

        {/* DELETE BUTTON */}
        <button className="btn-del lnk-btn"
          onClick={() => {
            dispatch(removeShow(show._id));
            history.push("/shows");
          }}>
          {trash}
        </button>

        <p className="movie-title">{show.title}</p>
        <p className="movie-title">Hall: {show.hall}</p>
        <p className="movie-title">{show.time}</p>

        {/* Toggle edit button */}
        <button className="btn2 lnk-btn" onClick={() => setEdit(!edit)}>
          {edit ? <p>◄ Cancel</p> : <p>update</p>}
        </button>
        <div>{edit ? (updateForm) : null}</div>
      </div>
      {/* <div className="ral"></div> */}
    </div>
  )
}
