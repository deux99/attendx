import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Attend X</h1>
      <img src="" alt="" />
      <input className="input" type="text" />
      <input className="input" type="text" />
      <button className="button">Sign In</button>
      <Link href='/'>Forgot Password?</Link>
      <Link href='/'>Don't have an account? Signup</Link>
    </div>
  )
}
