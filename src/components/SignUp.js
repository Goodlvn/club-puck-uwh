import { useState } from "react";

export default function SignUp() {

    const [data, setData] = useState({
        email: "",
        status: "init"
    });
    const [message, setMessage] = useState("Stay informed with club news!")
    const [loading, setLoading] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        let checkEmail = validateEmail(data.email);

        if (checkEmail) {
            setLoading(true);

            const res = await fetch("/api/join", {
                method: "POST",
                body: JSON.stringify(data)
            })

            const apiData = await res.json();

            if (apiData.status === 200) {
                setLoading(false);
                setData({ email: "", status: "200" });
                setMessage("Thanks for joining!");
            } else if (apiData.errors[0].reason === "duplicate") {
                console.log("we already got you cheif!");
                setLoading(false);
                setData({ ...data, status: "200" });
                setMessage("You're already subscribed!")
            } else {
                setLoading(false);
                setData({ ...data, status: "err" });
                setMessage("Please enter a valid email!")
            }

        } else {
            setData({ ...data, status: "err" });
            setMessage("Please enter a valid email!");
        }
    }

    const validateEmail = (emailInput) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailInput).toLowerCase());
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setData({ email: value, status: "init" })
    }

    return (

        <form className="emailList" onSubmit={(e) => submitForm(e)}>
            <div>
                <label htmlFor="email" className={data.status === "err" ? "label errorLabel" : "label"}>{message}</label><br />
                <input
                    type="text"
                    placeholder="john@doe.com"
                    name="email"
                    value={data.email}
                    onChange={(e) => handleChange(e)}
                    className={data.status === "err" ? "error emailSub" : "emailSub"}
                />
            </div>

            <button type="submit" className={loading ? "submitBtn loadData" : (data.status === "err" ? "submitBtn codeRed" : (data.status === "200" ? "submitBtn code200" : "submitBtn"))}>
                {loading ? <img className="loader" src="./images/oval.svg" alt="loader spinner" />
                    : (data.status === "err") ? <img className="subStatX" src="./images/x.svg" alt="x mark" />
                        : (data.status === "200") ? <img className="subStatC" src="./images/check.svg" alt="check mark" />
                            : "JOIN"
                }
            </button>
        </form>

    )
}