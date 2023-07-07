import React, { useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPass, setConfirmPass] = useState()
  const navigate = useNavigate()

  const HandleSignUpBtn = () => {
    axiosInstance.post('auth/signup', { name: name, email: email, password: password, password_confirmation: confirmPass })
      .then((res) => {
        console.log(res)
        localStorage.setItem('token',res.data.token)
        navigate('/')

      }).catch(err => console.log(err))
  }
  return (
    <>
      <div className='row'>
        <div className='col-md-6'>
          <label className='label' for="name">Name</label>
          <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} id="name" />
        </div>

        <div className='col-md-6'>
          <label className='label' for="email">Email</label>
          <input type="email" className='form-control' id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <label className='label' for="password">Password</label>
          <input type="password" className='form-control' id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='col-md-6'>
          <label className='label' for="confirm_password">Confirm Password</label>
          <input type="password" className='form-control' id="confirm_password" onChange={(e) => setConfirmPass(e.target.value)} />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 d-flex justify-content-end'>
          <button className='btn btn-primary' onClick={HandleSignUpBtn}>Signup</button>
        </div>
      </div>
    </>

  )
}
