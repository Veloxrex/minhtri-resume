import React, {Component} from 'react'
import './education.css'

export default class EducationScreen extends Component {
    render() {
        return (
            <div className="education_container">
                <div className="pageNumber-container">
                    <div className="pageNumber">02</div>
                    <div className="line-number"/>
                    <div className="pageName">EDUCATION</div>
                </div>
                <div className="image_education_container">
                    <div className="image_education">
                        <img src={process.env.PUBLIC_URL + '/assets/images/education.png'} alt="education"/>
                    </div>
                </div>
                <div className="education_content_container">
                    <div className="title">
                        EDUCATION
                    </div>
                    <div className="content_title_line"/>
                    <div className="content">
                        Senior At Aptech Aprotrain - Computer Education
                        <br/>
                        <div className="date">From Mar 2016</div>
                        Getting 90% point in the first year project - PHP project.
                        <br/>
                        Get high knowledge in HTML and CSS.
                        <br/>
                        Passed all test with high score until now.
                        <br/>
                        Participated in Appkathon 2 times.
                        <br/>
                        Learned how to work under pressure.
                    </div>

                </div>
            </div>
        )
    }
}
