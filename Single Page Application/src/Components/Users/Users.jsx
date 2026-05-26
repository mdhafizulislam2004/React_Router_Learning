import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
    
    const users=useLoaderData()
    console.log(users);
    

    return (
        <div>
           <h1>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
            </h1>
        </div>
    );
};

export default Users;