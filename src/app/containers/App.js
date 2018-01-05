import React from "react";
import {connect} from "react-redux";

import Movies from "./Movies";

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}