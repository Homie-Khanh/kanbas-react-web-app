import Dashboard from "../../Dashboard";
import Sandwiches from "./sandwich";
import { courses } from "../../Database";
import { Link, useParams } from "react-router-dom";

function Sandwich() {
    const { courseId } = useParams();
    return (
        <div>
            <Link to={`/Kanbas/Courses/${courseId}/Home`}><h3 style={{ display: "flex", justifyContent: "end", marginRight: "10px" }}>X</h3></Link>
            <Sandwiches />
        </div>
    )
}
export default Sandwich;