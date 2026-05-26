import { NavLink } from "react-router";
import "./User.css"
const User = ({user}) => {
    const{name,email,phone,id}=user

    return (
        <div className="style">
            <h3>Name:{name}</h3>
            <h4>Email: {email}</h4>
            <small>Phone: {phone}</small>
           <p><NavLink to={`/users/${id}`}>See More</NavLink></p>
        </div>
    );
};

export default User;