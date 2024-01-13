'use client'
import "/styles/signup.css";
import Link from "next/link";


function page() {
    return (
        <div className="container">
            <h2>Create An Account</h2>
            <input className="input" type="text" placeholder="First Name" />
            <input className="input" type="text" placeholder="Last Name" />
            <input className="input" type="text" placeholder="Registration No" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="text" placeholder="Phone No" />
            <input className="input" type="text" placeholder="Username" />
            <input className="input" type="password" placeholder="Password" />
            <input className="input" type="password" placeholder="Re-type Password" />
            <button className="btn">Sign Up</button>
            <Link href='/' className="link2">Already have an account? Signin</Link>

        </div>
    )
}

export default page