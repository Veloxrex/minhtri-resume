import React,{Component} from "react";
// import Sidebar from "../component/sidebar";
// import PerfectScrollbar from 'react-perfect-scrollbar'
// import {sidebarRoutes} from "../routes/sidebar-router";
import RouterOutlet from '../routes'
import {withRouter} from "react-router";

class AppLayout extends Component{
    render(){
        return(
            <div className="wrapper">
                {/*<Sidebar {...this.props} routes={sidebarRoutes}/>*/}
                {/*<PerfectScrollbar>*/}
                    <RouterOutlet {...this.props}/>
                {/*</PerfectScrollbar>*/}
            </div>
        )
    }
}

export default withRouter(AppLayout)
