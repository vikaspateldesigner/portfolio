import React from 'react';
import  './lines.css';

class Lines extends React.Component{
    render(){
        return(
            <div className="port__Lines--Wrapper">
            <div className="port__Lines port__Lines--One">
              <span>GITHUB</span>
            </div>
            <div className="port__Lines port__Lines--Two">
            <span>REACT</span>
             </div>
            <div className="port__Lines port__Lines--Three">
              <span>SHOPIFY</span>
            </div>
            <div className="port__Lines port__Lines--Four">
              <span>MAGENTO</span>
            </div>
            <div className="port__Lines port__Lines--Five">
              <span>FIGMA</span>
            </div>
            <div className="port__Lines port__Lines--Six">
              <span>JQUERY</span>
            </div>
            <div className="port__Lines port__Lines--Vertical port__Lines--Vertical-One"></div>
            <div className="port__Lines port__Lines--Vertical port__Lines--Vertical-Two"></div>
            <div className="port__Lines port__Lines--Vertical port__Lines--Vertical-Three"></div>
        </div>
        )
    }
}
export default Lines;