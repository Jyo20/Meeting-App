import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function AddMeeting() {
  // let { titleInput, dateInput, imgInput, linkInput } = useRef();
  let [loadingStatus, setLoadingStatus] = useState(false);
  let titleInput = useRef();
  let imgInput = useRef();
  let linkInput = useRef();
  let dateInput = useRef();
  let Navigate = useNavigate();
  function addMeetingHandler() {
    setLoadingStatus(true);
    let tempMeeting = {
      title: titleInput.current.value,
      image: imgInput.current.value,
      link: linkInput.current.value,
      date: dateInput.current.value,
    };
    fetch("https://meeting-app-fbd11-default-rtdb.firebaseio.com/meet.json", {
      method: "post",
      body: JSON.stringify(tempMeeting),
    }).then(() => {
      setLoadingStatus(false);
      Navigate("/UpcomingMeeting");
    });
  }
  return (
    <div className="add-page">
      <h1>Add New Meetings </h1>
      <p></p>
      <div>
        <input
          type="text"
          ref={titleInput}
          placeholder="Enter the Meeting title"
        />
        <input
          type="text"
          ref={imgInput}
          placeholder="Enter the Meeting image"
        />
        <input
          type="text"
          ref={linkInput}
          placeholder="Enter the Meeting link"
        />
        <input
          type="datetime-local"
          ref={dateInput}
          placeholder="Enter the Meeting date"
        />
        <button className="add-btn" onClick={addMeetingHandler}>
          <div>
            {loadingStatus == true ? "Saving to Firebase" : "Add New Meeting"}
          </div>
          <div className={loadingStatus == true ? "loader" : " "}></div>
        </button>
      </div>
    </div>
  );
}
export default AddMeeting;
