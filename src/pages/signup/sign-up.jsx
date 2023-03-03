import FormInput from "../../component/form/form-input";
import FormSelect from "../../component/form/form-select";
import '../../styles/sign-up.scss'
import { useState } from "react";

const formDefaultInput = {
    displayName: "",
    email: "",
    number: "",
    confirmPassword: "",
    password: "",
};

const SignUpForm = () => {


    const domain=[
        {
            id:1,
            name:"Web Development",
        },
        {
            id:2,
            name:"App Development"
        },
        {
            id:3,
            name:"Competitive Coding"
        },
        {
            id:4,
            name:"AI/ML"
        },
        {
            id:5,
            name:"UI/UX",
        }
    ]


    const [input, setInput] = useState(formDefaultInput);
    const { displayName, number, email, password, confirmPassword } = input;
    const [showPassword, setShowPassword]=useState(false)
    const [showConfirmedPassword, setShowConfirmedPassword]=useState(false)
    const [passwordError, setPasswordError] = useState("");
    const [numberError, setNumberError] = useState("");
    const formHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
    e.preventDefault();

    const phone = new RegExp(/^[0-9\b]+$/);
    if (!phone.test(number)) {
        setNumberError("Enter only numbers");
    } else if (number.length !== 10) {
        setNumberError("Please enter valid phone number");
    } else {
        setNumberError("");
    }

    if (password !== confirmPassword) {
        setPasswordError("Passwords dont match");
    } else {
        setPasswordError("");
    }

    if(!passwordError || !numberError)
    {
        console.log(input)
    }
};

const togglePassword=(e)=>{
    e.preventDefault();
    setShowPassword(!showPassword);
}
const toggleConfirmedPassword=(e)=>{
    e.preventDefault();
    setShowConfirmedPassword(!showConfirmedPassword);
}
    return (
        <div className="sign-up">
        <h2>Don't have an account ?</h2>
        <span>Sign Up with Email and Password</span>
        <form onSubmit={(e) => submitHandler(e)}>
        <FormInput
            label="Name"
            placeholder="name"
            type="text"
            required
            onChange={(e) => {
            formHandler(e);
            }}
            name="displayName"
            value={displayName}
        />

        <FormInput
            label="Number"
            placeholder="number"
            type="text"
            required
            onChange={(e) => {
            formHandler(e);
            }}
            name="number"
            value={number}
            error={numberError}
        />

        <FormInput
            label="Email"
            placeholder="email"
            type="email"
            required
            onChange={(e) => {
            formHandler(e);
            }}
            name="email"
            value={email}
        />

        <FormSelect
        label="Select"
        selectdata={domain}
        />


        <FormInput
            label="Password"
            placeholder="password"
            type={showPassword ? "text" : "password"}
            required
            onChange={(e) => {
            formHandler(e);
            }}
            name="password"
            value={password}
            hidenseek={<div onClick={togglePassword} className="hidenseek"> {showPassword ? <span>HIDE</span> : <span>SHOW</span>}</div>}
        />

        <FormInput
            label="Confirm Password"
            placeholder="confirm password"
            type={showConfirmedPassword ? "text" : "password"}
            required
            onChange={(e) => {
            formHandler(e);
            }}
            name="confirmPassword"
            value={confirmPassword}
            error={passwordError}
            hidenseek={<div onClick={toggleConfirmedPassword} className="hidenseek"> {showConfirmedPassword ? <span>HIDE</span> : <span>SHOW</span>}</div>}
        />

        <button type="submit">submit</button>
        </form>
    </div>
    );
};

export default SignUpForm;
