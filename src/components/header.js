import React,{Component} from 'react'
import { Link } from 'gatsby'
import image from "../images/jobyzerlogo.png"

class Header extends Component {
  render(){
  return (

    <nav className="navbar">
    <div className="container">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <img src={image} alt="Logo" height='200px'/>
            </Link>
            
            <span className="navbar-item">
            <a className="button is-white is-outlined is-large" href="https://beta.jobyzer.com" target='_blanc'>
                <span className="icon">
                    <i className="fa fa-flask  fa-2x"></i>
                </span>
                <span>Beta</span>
            </a>
            </span>
        </div>
    </div>
</nav>
)
}
}
export default Header
