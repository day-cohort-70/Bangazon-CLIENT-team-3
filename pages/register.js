import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useAppContext } from '../context/state'
import { register } from '../data/auth'

export default function Register() {
  const { setToken } = useAppContext()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const router = useRouter()

  const submit = (e) => {
    e.preventDefault()
    debugger
    const user = {
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      address,
      email,
      phone_number: phoneNumber,
    }

    register(user).then((res) => {
     
      if (res.token) {
        setToken(res.token)
        router.push('/')
      }
    })
  }
//Input vs. input? dig in here
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <form className="box" onSubmit={submit}>
          <h1 className="title">Welcome!</h1>
          <div className="field">
            <label className="label" htmlFor="firstName">First Name</label>
            <div className="control">
              <input
                id="firstName"
                className="input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="lastName">Last Name</label>
            <div className="control">
              <input
                id="lastName"
                className="input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="username">Username</label>
            <div className="control">
              <input
                id="username"
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <div className="control">
              <input
                id="password"
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="address">Address</label>
            <div className="control">
              <input
                id="address"
                className="input"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
              <input
                id="email"
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="phoneNumber">Phone Number</label>
            <div className="control">
              <input
                id="phoneNumber"
                className="input"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">Submit</button>
            </div>
            <div className="control">
              <Link href="/login">
                <a className="button is-link is-light">Cancel</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
