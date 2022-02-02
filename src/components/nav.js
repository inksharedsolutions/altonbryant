import React,{useRef, useState} from 'react'
import {Link} from 'gatsby';
import  Logo from '../../static/logo/logo.png'

const Nav = (props) =>{

	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

	const clickEvent = (e)=> {
		setToggled(!toggled);
	}
			
    return (
        <>
            <nav className="navigation" >

                <h1>
                    <Link
                        style={props.pathExt === '/'
                            || props.pathExt === '' ? {
                                color: 'rgb(255, 202, 0)'
                            } : {
                                color: '#000'
                            }}
                        to="/">

                        <img className="logo-img" src={Logo} alt="Perry DeFiore"/>

                    </Link>
                </h1>

                <ul
                    className="hamburger-ul"
                    onClick={e => clickEvent(e)}
                    ref={refSpan}>
                    <span className="hamburger-span"></span>
                    <span className="hamburger-span"></span>
                </ul>

                <section className={toggled ? 'active-nav' : 'non-active-nav'}>
                    <span className="close-mark" onClick={e => clickEvent(e)}>
                        <span className="hamburger-x-mark"></span>
                        <span className="hamburger-x-mark"></span>
                    </span>

                    <ul>
                        <p class="list-label">
                            Navigations.
						</p>
                        <li>
                            <Link
                                to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about-the-author'>
                                Author
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about-the-book'>
                                Book
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to='/videos'>
                                Videos
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </section>

            </nav>
        </>
    )
}

export default Nav;