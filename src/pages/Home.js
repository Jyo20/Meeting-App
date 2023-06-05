import Hero from "../assets/img/grp.jpg";
import { Link } from "react-router-dom";
function Home() {
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
    </div>
  );
}
export default Home;
