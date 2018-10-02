import React from 'react';
import {Route, Switch} from "react-router";
import {routes} from "./router-config";


const PublicRoute = ({name, props, ...rest}) => {

    document.title = name;
    return <Route {...rest}/>
};

export default (props) => {
    return (
        <Switch>
            {
                routes.map((item, index) => {
                    const {path, component, exact, name} = item;
                    return (
                        <PublicRoute exact={exact} path={path} component={component} key={index} name={name}/>
                    )
                })
            }
        </Switch>
    )
}
