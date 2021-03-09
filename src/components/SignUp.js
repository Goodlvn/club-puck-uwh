export default function SignUp() {
    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target);
    }


    return (
        <form onSubmit={submitForm} className="emailList">

            <lable htmlFor="email">Stay informed with club news!</lable><br />
            <input type="text" placeholder="john@doe.com" name="email" />

            <button type="submit">Join</button>
        </form>
    )
}