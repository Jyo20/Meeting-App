import { useState } from "react";
import MeetingCard from "../components/MeetingCard";
function UpcomingMeeting() {
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
      console.log(tempmeeting);
    });

  return (
    <div className="pages">
      <h2>Upcoming Meeting</h2>
      <div className="meeting-container">
        {meetings.map((meeting) => {
          return (
            <p>
              {
                <MeetingCard
                  title={meeting.title}
                  img={meeting.img}
                  date={meeting.date}
                />
              }
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default UpcomingMeeting;
