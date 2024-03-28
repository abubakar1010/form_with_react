

const SimpleForm = () => {

    const handleSubmit = (e) => {
        console.log("Form Submitted");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log(e.target.phone.value);
        e.preventDefault()
    }
    return (
        <div className=" my-12" >
            <form onSubmit={handleSubmit} className=" text-center flex flex-col items-center gap-6 ">

            <h1 className=" text-2xl font-medium py-3">Control Form with name attribute</h1>

                <input type="text" name="name" id="1" placeholder="Your Name" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input type="email" name="email" id="2"  placeholder="Your Email" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input type="password" name="password" id="3"  placeholder="Your Password" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input type="number" name="phone" id="4"  placeholder="Your Phone" className="border-2 border-purple-500 px-4 py-2 rounded-lg" />
                <input type="submit" value="Submit" className=" text-2xl font-medium bg-orange-500 rounded-lg px-6 uppercase py-2 text-white " />
            </form>
        </div>
    );
};

export default SimpleForm;