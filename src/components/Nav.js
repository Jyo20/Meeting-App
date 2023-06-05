function Nav() {
  return (
    <nav>
      <a href="/" className="logo">
        Meeting App
      </a>
      <div className="link">
        <a href="/UpcomingMeeting">Upcoming Meetings</a>
        <a href="/contact">Past Meeting</a>
        <a href="/add-meetings" className="btn">
          Add Meeting
        </a>
      </div>
    </nav>
  );
}
export default Nav;
