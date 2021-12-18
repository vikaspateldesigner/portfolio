import React, { Component } from 'react'
import './footer.css';
import { heart } from "../imgiports";
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <h3 className="port__Subheading">
                    Made with <span className="port__accent"><img style={{verticalAlign:"middle"}} src={heart}/> & react </span>  by vikas patel
                </h3>
            </footer>
        )
    }
}
