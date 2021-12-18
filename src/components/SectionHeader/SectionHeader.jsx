import React from "react";
import './sectionHeader.css';

class SectionHeader extends React.Component {
    render(){
        return(
            <div className="port__Section--Header">
                <h2 className="port__section--title">{this.props.name}</h2>
            </div>
        )
        
    }
}

export default SectionHeader;