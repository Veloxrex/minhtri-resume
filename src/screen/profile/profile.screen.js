import React, {Component} from 'react'
import "./profile.css"
export default class ProfileScreen extends Component{
    render() {
        return (
            <div className="introduction_container">
                <div className="pageNumber-container">
                    <div className="pageNumber">01</div>
                    <div className="line-number"/>
                    <div className="pageName">INTRODUCTION</div>
                </div>
                <div className="introduction_content">
                    <div className="title">
                        I'm Minh Tri!<br/>Front-end<br/>Developer.
                    </div>
                    <div className="content_title_line"/>
                    <div className="content">
                        I'm 22 years old , and I was born in HCM city . I think listening is the best way to
                        understand people and also figure out who you are. This is my first way. The second,
                        encountering a problem, just facing and finding the way not the way out!
                        <div className="phone_number">Phone Number: 0909.281.096</div>
                        <div className="email">Email: tri.tran@kaizenit.asia | <br/> tranminhtri28101996@gmail.com</div>
                    </div>

                </div>
                <div className="avatar-container">
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt="pf"/>
                    </div>
                </div>
            </div>
        )
    }
}
