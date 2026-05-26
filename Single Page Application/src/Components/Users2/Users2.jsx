import { use } from "react";

const Users2 = ({UserData}) => {
const userData=use(UserData)
console.log(userData);


    return (
        <div>
           <h1>
            This Is Users 2
            </h1>
           
        </div>
    );
};

export default Users2;