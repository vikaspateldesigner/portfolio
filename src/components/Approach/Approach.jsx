import React from 'react';
import './approach.css';
import approachBlob from '../../assets/approach-blob.svg';

const ApproachNames =[
    {
        approachName : "Product "
    },
    {
        approachName : "Prototype"
    },
    {
        approachName : "Wireframe"
    },
    {
        approachName : "Plan & Research"
    },
]

class Approach extends React.Component{
    render(){
        return(
            <section id="my-Works" className="port__Section port__Section--Approach">
                <div className="port__Container">
                    <div className="port__Approach--Container">
                        {ApproachNames.reverse().map((appname,index) =>
                            <div className={`port__Approach--item-wrapper port__Approach--item-wrapper-`+index}>
                                <div className={`port__Approach port__Approach--item--`+index}>
                                    <div className="port__Apprach--Data">
                                        <img width="150" src={approachBlob} alt="apprach-blob"/>
                                        <h4 className="port__blob--Eyebrow">{index+1}</h4>
                                        <h3 className="port__Title--Small port__Text--Center">{appname.approachName}</h3>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="porto__Approach--title">
                            MY 
                            DESIGN
                            APPROACH
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Approach;
