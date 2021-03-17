import { useState } from "react";


export default function SignUp() {

    const [sub, setSub] = useState(null);



    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
    }


    return (
        <form action="http://groups.google.com/group/clubpuckuwh/boxsubscribe" className="emailList">

            <lable htmlFor="email" className="lable">Stay informed with club news!</lable><br />
            <input
                type="text"
                placeholder="john@doe.com"
                name="email"
                onChange={(e) => handleChange(e)}
            />

            <button type="submit">Join</button>
        </form>
    )
}