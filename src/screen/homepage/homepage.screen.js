import React, {Component} from 'react'
import './homepage.css'
import ProfileScreen from "../profile/profile.screen";
import EducationScreen from "../education/education.screen";
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
import WorkingScreen from "../work/work.screen";

export default class HomeScreen extends Component {
    render() {
        return (
            <ReactFullpage
                render={() => {
                    return (
                        <div id="fullpage-wrapper" style={{height: 'unset'}}>
                            <div className="section">
                                <ProfileScreen/>
                            </div>
                            <div className="section">
                                <EducationScreen/>
                            </div>
                            <div className="section">
                                <WorkingScreen/>
                            </div>
                        </div>
                    );
                }}
            />
        )
    }
}
