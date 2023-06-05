import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/" className="logo">
        Meeting App
      </Link>
      <div className="link">
        <Link to="/UpcomingMeeting">Upcoming Meetings</Link>
        <Link to="/pastMeeting">Past Meeting</Link>
        <Link to="/add-meetings" className="btn">
          Add Meeting
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
