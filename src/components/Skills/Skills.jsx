import SectionHeader from "../SectionHeader/SectionHeader";
import './skills.css';
import navLeft from '../../assets/nav-left.svg';
import navRight from '../../assets/nav-right.svg';
import navLeftLight from '../../assets/navLeftLight.svg';
import navRightLight from '../../assets/navRightLight.svg';
import {  bootstrap,css,figma,git,shopify,magento,sass,react,html,jquery,blob } from "../imgiports";
import OwlCarousel from 'react-owl-carousel';
import React, { useState, useEffect } from 'react';

const skillsArray =[
    {
        skillName : "Html",
        SkillPercentage : "80%",
        skillimg : html,
    },
    {
        skillName : "CSS",
        SkillPercentage : "80%",
        skillimg : css,
    },
    {
        skillName : "JQUERY",
        SkillPercentage : "75%",
        skillimg : jquery,
    },
    {
        skillName : "BOOTSTRAP",
        SkillPercentage : "80%",
        skillimg : bootstrap,
    },
    {
        skillName : "FIGMA",
        SkillPercentage : "80%",
        skillimg : figma,
    },
    {
        skillName : "SHOPIFY",
        SkillPercentage : "80%",
        skillimg : shopify,
    },
    {
        skillName : "MAGENTO",
        SkillPercentage : "70%",
        skillimg : magento,
    },
    {
        skillName : "GITHUB",
        SkillPercentage : "75%",
        skillimg : git,
    },
    {
        skillName : "SASS",
        SkillPercentage : "75%",
        skillimg : sass,
    },
    {
        skillName : "REACT",
        SkillPercentage : "75%",
        skillimg : react,
    },
]

const arrowLeft = <svg width="77" height="74" viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_563_3)">
<path d="M35.5618 3.21632C18.2337 13.2207 -5.78202 28.1062 7.29112 50.7495C14.4132 63.0853 37.277 73.5573 50.8715 69.5745C66.2469 65.0701 79.5656 42.2627 70.879 27.217C63.0759 13.7017 34.0507 9.0634 21.0362 5.57617" stroke="#FFF9F9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
<path class="port_Path--Accent-Arrow" d="M35.5618 3.21632C18.2337 13.2207 -5.78202 28.1062 7.29112 50.7495C14.4132 63.0853 37.277 73.5573 50.8715 69.5745C66.2469 65.0701 79.5656 42.2627 70.879 27.217C63.0759 13.7017 34.0507 9.0634 21.0362 5.57617" stroke="#03EA0C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M51.5183 38.4131C49.0265 38.4131 46.5141 38.3241 44.0229 38.4131C42.2881 38.475 40.6061 39.221 38.8831 39.4839C36.3102 39.8763 33.8121 40.0283 31.3448 40.9401C29.3571 41.6747 26.0056 41.1114 23.935 41.1114C22.336 41.1114 20.737 41.1114 19.1379 41.1114" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.0039 52.2903C25.09 49.3765 21.1241 47.4799 18.7524 44.1096C18.1492 43.2525 17.2019 42.5464 16.6751 41.6682C15.6729 39.998 17.5987 38.0558 18.5382 36.8925C20.6475 34.281 22.2373 31.7353 25.0914 29.7826C27.0236 28.4605 29.3424 27.732 30.7023 25.6922" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_563_3">
<rect width="77" height="74" fill="white"/>
</clipPath>
</defs>
</svg>;

 const responsiveoptions = {
    responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          }
      }
  };

function Skills (){
    return(
        <section id="skills" className="port__Section port__section--Skills">
            <div class="port__Container">
                <SectionHeader name="SKILLS"/>
                <OwlCarousel
                className='owl-theme'
                loop margin={50} 
                dots={false} 
                items={"5"} 
                loop={true}
                autoplay={true}
                autoplayTimeout="3000"
                autoplaySpeed="1000"
                {...responsiveoptions}
                navContainerClass="port__Owl--Navigation"
                navText={['<img class="port__Dark--nav" width="70" src="'+navLeft+'"/><img class="port__Light--nav" width="70" src="'+navLeftLight+'"/>','<img class="port__Dark--nav" width="70" src="'+navRight+'"/><img class="port__Light--nav" width="70" src="'+navRightLight+'"/>']}
               
                >
                {skillsArray.map((skillitem,index) => 
                    <div className="item port__Sills--item">
                        <div className="port__Skills--blob">
                            <img src={blob}/>
                        </div>
                        <div className="port__Skills--img">
                            <img width="200" src={skillitem.skillimg}/>
                        </div>
                        <div className="port__Skills--skillSet port__Text--Center">
                            <h3 className="port__Subtitle">{skillitem.skillName}</h3>
                            <h3 className="port__Subtitle port__accent">{skillitem.SkillPercentage}</h3>
                        </div>
                    </div>
                    
                )}
                </OwlCarousel>
                
            </div>
        </section>
    )
}
export default Skills;