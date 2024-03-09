import { Link } from "react-router-dom";
import Chevrons from "./chevron";

function Chevron() {
    return (
        <div>
          <h2>Nav Chevron</h2>
          <Link to={`/Kanbas/Courses`}><h3 style={{ display: "flex", justifyContent: "end", marginRight: "10px" }}>X</h3></Link>
          <Chevrons />
        </div>
      );
}
export default Chevron;