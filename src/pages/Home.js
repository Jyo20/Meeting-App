import { useState } from "react";
import Hero from "../assets/img/grp.jpg";
import { Link } from "react-router-dom";
import MeetingCard from "../components/MeetingCard";
function Home() {
  const [meetings, setMeeting] = useState([]);
  fetch("https://meeting-app-fbd11-default-rtdb.firebaseio.com/meet.json")
    .then((response) => response.json())
    .then((data) => {
      let tempmeeting = [];
      for (const key in data) {
        let meeting = {
          id: key,
          ...data[key],
        };
        tempmeeting.push(meeting);
      }

      setMeeting(tempmeeting);
      // console.log(tempmeeting);
    });

  return (
    <div className="pages">
      <div className="hero">
        <img src={Hero} height={200}></img>
        <h1 className="title">
          Organize all yours <span className="high"> meetings </span> in one
          place
        </h1>
        <Link to="/add-meetings" className="add-btn-home">
          Add New Meeting
        </Link>
      </div>
      <div className="meetings-container">
        {meetings
          .filter((meeting) => {
            let today = new Date();
            let meetingDate = new Date(meeting.date);
            return (
              meetingDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
            );
          })
          .map((meeting) => {
            let date = new Date(meeting.date);
            const options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };

            let fdate = date.toLocaleDateString("en", options);
            return (
              <MeetingCard
                title={meeting.title}
                img={meeting.img}
                date={fdate}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
