import { useState } from "react";


const FormWithState = () => {
    const [phone, setPhone] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState("")
    const [ error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted");
        console.log(phone);
        console.log(name);
        console.log(email);
        console.log(password);
        if (password.length < 8) {
            setError("Password must be 8 character")
        }
    }

    const handleGetPhone = e => {

        setPhone(e.target.value)
    }
    const handleGetEmail = e => {

        setEmail(e.target.value)
    }
    const handleGetPassword = e => {

        setPassword(e.target.value)
        
    }
    const handleGetName = e => {

        setName(e.target.value)
    }

    return (
        <div className=" my-12" >
            <form onSubmit={handleSubmit} className=" text-center flex flex-col items-center gap-6 ">
            <h1 className=" text-2xl font-medium py-3">Control Form with state</h1>

                <input
                    onChange={handleGetName}
                    type="text" name="name" id="11" placeholder="Your Name" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input
                    onChange={handleGetEmail}
                    type="email" name="email" id="21"  placeholder="Your Email" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input
                    onChange={handleGetPassword}
                    type="password" name="password" id="31"  placeholder="Your Password" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input
                    onChange={handleGetPhone}
                    type="number" name="phone" id="41"  placeholder="Your Phone" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input
                    
                    type="submit" value="Submit" className=" text-2xl font-medium bg-orange-500 rounded-lg px-6 uppercase py-2 text-white " />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default FormWithState;