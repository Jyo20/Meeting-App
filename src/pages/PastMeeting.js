import { useState } from "react";
import MeetingCard from "../components/MeetingCard";
function PastMeeting() {
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
      <h2>Past Meeting</h2>
      <div className="meeting-container">
        {meetings
          .filter((meeting) => {
            let today = new Date();
            return new Date(meeting.date) < today;
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
              <p>
                {
                  <MeetingCard
                    title={meeting.title}
                    img={meeting.img}
                    date={fdate}
                  />
                }
              </p>
            );
          })}
      </div>
    </div>
  );
}
export default PastMeeting;
