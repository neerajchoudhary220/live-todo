import React, { useEffect, useState } from 'react'
import Signup from '../Components/Signup'
import Login from '../Components/Login';
import { CheckToken } from '../api/CheckToken';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Components/Context/UserContext';

export default function Auth() {

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token === undefined || !token) {
      navigate('/auth')

    } else {
      navigate('/')

    }
  }, [])

  const [loginDisplay, setLoginDisplay] = useState(true);
  const [loader, setLoader] = useState('d-none');

  const loginBtnBehaviour = () => {
    const loginBtn = loginDisplay ? 'btn btn-danger btn-md' : 'btn btn-outline-danger btn-md';
    return loginBtn;
  }

  const signupBtnBehaviour = () => {
    const signupBtn = loginDisplay ? 'btn btn-outline-success btn-mg ml-3' : 'btn btn-success btn-mg ml-3'
    return signupBtn;
  }
  return (
    <div className='container'>
      <div style={{ height: '800px', width: '800px' }}>
        <div className='m-auto card' style={{ position: 'relative', top: '25%', left: '25%' }}>
          <div className={"custom-loader "+loader}></div>

          <div className='card-header d-flex justify-content-center'>
            <button className={loginBtnBehaviour()} onClick={() => setLoginDisplay(true)}>Login</button>
            <button className={signupBtnBehaviour()} onClick={() => setLoginDisplay(false)}>Sign Up</button>
          </div>

          <div className='card-body'>
            {loginDisplay ? <Login setLoader={setLoader}/> : <Signup />}
          </div>
        </div>

      </div>
    </div>

  )

}
