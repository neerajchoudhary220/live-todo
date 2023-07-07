import React from 'react'
import placeholderimg from '../../assets/images/user3.jpg';

export default function Header({ userImg, userName }) {
    return (
        <div>
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
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                Disabled
                            </a>
                        </li>
                    </ul>

                    <ul className='navbar-nav'>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span>User Name</span>
                                <img src={placeholderimg} alt="user image" className='rounded-circle profile_img ml-2' />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className='p-3'>
                                    <span>User Name</span>
                                    <img src={placeholderimg} alt="user image" className='rounded-circle profile_img ml-2' />
                                </div>
                                <div className="dropdown-divider" />

                                <a className="dropdown-item" href="#">
                                    Action
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
        </div>
    )
}
