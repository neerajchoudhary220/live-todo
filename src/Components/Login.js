import React, { useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom';


export default function Login({setLoader}) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [userDetails, setUserDetails] = useState()
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate()


  const HandleLoginBtn = () => {
    setLoader('')
    axiosInstance.post('auth/login', { email: email, password: password }).then((res) => {
      if (res.response) {
        setErrorMsg(res.response.data.message)
      } else {
        setErrorMsg('')
      }
      localStorage.setItem('token', res.data.token)
      setLoader('d-none')
      navigate('/', { state: res.data.data })
    })
      .catch((err) => {
        setLoader('d-none')

        console.log("errors:", err);
      })

  }
  return (
    <>
      <div className='row'>
        <div className='col-md-6'>
          <label className='label' for="email">Email</label>
          <input type="email" className='form-control' id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='col-md-6'>
          <label className='label' for="password">Password</label>
          <input type="password" className='form-control' id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 d-flex justify-content-end'>
          <button className='btn btn-primary' onClick={HandleLoginBtn}>Login</button>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12'>
          <span className='text-danger'>
            {errorMsg}
          </span>
        </div>
      </div>
    </>
  )
}
