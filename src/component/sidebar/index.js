import React , {Component} from 'react'
import './sidebar.css';
import {NavLink} from "react-router-dom";
export default class Sidebar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {pathname} = this.props.location
        console.log(pathname)
        return(
            <div className="sidebar-container">
                <div className="circle-image-container">
                    {pathname === "/" ?  <img src={process.env.PUBLIC_URL + 'assets/images/logo.png'}  alt="avatar"/> : <img src={process.env.PUBLIC_URL + 'assets/images/avatar.png'} alt="avatar"/> }

                </div>
                <div className="menu-container">
                    {
                        this.props.routes.map((prop, key) => {
                            if(prop.redirect)
                                return null;
                            return (
                                <li key={key}>
                                    <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                        <span>
                                            <i className={prop.icon}/>
                                        </span>
                                        <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
