import React, { useContext, useEffect, useState } from 'react'
import placeholderimg from '../../assets/images/user3.jpg';
import { axiosInstance } from '../../api/axiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';
import Content from './Content';

export default function Header() {
    const navigate = useNavigate()
    const [username, setUserName] = useState(null)
    const [active_Link, setActiveLink] = useState(false)

    const user = useLocation()
    useEffect(() => {

        (user.state != null) ? setUserName(user.state.name) : setUserName(null)

    }, [user.state])

    const HandleLogout = () => {
        axiosInstance.get('auth/logout')
            .then((res) => {
                console.log(res)
                localStorage.removeItem('token')
                navigate('/auth')
            }).catch(err => console.log(err))
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                {/* <a className="navbar-brand" href="#">
                    Navbar
                </a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                       
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                <l className="fa fa-home text-info"></l> <span className="sr-only">(current)</span>
                            </a>
                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#">
                                Category
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Items
                            </a>
                        </li>
                    </ul>

                    <ul className='navbar-nav'>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle mr-3"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span>{username ?? "User Name"}</span>
                                <img src={placeholderimg} alt="user image" className='rounded-circle profile_img ml-2' />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className='p-3'>
                                    <span>{username ?? "User Name"}</span>
                                    <img src={placeholderimg} alt="user image" className='rounded-circle profile_img ml-2' />
                                </div>
                                <div className="dropdown-divider" />

                                <a className="dropdown-item" href="#">
                                    <span role='button' onClick={HandleLogout}><i class="fa fa-sign-out"></i> Logout</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className=''>

                    </div>

                </div>
            </nav>
        </>
    )
}
