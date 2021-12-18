import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './social.css';
import OwlCarousel from 'react-owl-carousel';
import { twitter_logo,twitter_profileHeader,twitter_profilePic,instagram_profileHeader,instagram_logo,instagram_profilePic,codepen_logo,codepen_profileHeader,codepen_profilePic,stackoverflow_logo,stackoverflow_profileHeader,stackoverflow_profilePic,linkdin_logo,linkdin_profileHeader,linkdin_profilePic,dribble_logo,dribble_profileHeader,dribble_profilePic, } from "../imgiports";



const SocialData =[
    {
        socialName:"Linkdin",
        socialHeaderImg:linkdin_profileHeader,
        socialHeaderProfilePic:linkdin_profilePic,
        bioGraphy:"Sr. UI/UX Designer at cedcommerce",
        socialLogo:linkdin_logo,
        url:"https://linkedin.com/in/vikas-patel-6b124a124",
    },
    {
        socialName:"Codepen",
        socialHeaderImg:codepen_profileHeader,
        socialHeaderProfilePic:codepen_profilePic,
        bioGraphy:"UI,UX analyst Html,css.jquery,bootstrap Magento frontend developer Shopify frontend developer",
        socialLogo:codepen_logo,
        url:"https://codepen.io/vikaspatel"
    },
    {
        socialName:"Instagram",
        socialHeaderImg:instagram_profileHeader,
        socialHeaderProfilePic:instagram_profilePic,
        bioGraphy:<ul>
            <li>Web Designer</li>
            <li>Photographer</li>
            <li>Nature Lover</li>
        </ul>,
        socialLogo:instagram_logo,
        url:"https://www.instagram.com/the_ex.plorer/"
    },
    {
        socialName:"Twitter",
        socialHeaderImg:twitter_profileHeader,
        socialHeaderProfilePic:twitter_profilePic,
        bioGraphy:"CSS, HTML, JQUERYFALLEN IN LOVE",
        socialLogo:twitter_logo,
        url:"https://twitter.com/vikas_patel_UX"
    },
    {
        socialName:"StackOverflow",
        socialHeaderImg:stackoverflow_profileHeader,
        socialHeaderProfilePic:stackoverflow_profilePic,
        bioGraphy:"Passionate Web Designer and UI specialist Shopify Magento Front-End Developer.",
        socialLogo:stackoverflow_logo,
        url:"https://stackoverflow.com/users/8852469/vikas-patel"
   
    },
    {
        socialName:"Dribble",
        socialHeaderImg:dribble_profileHeader,
        socialHeaderProfilePic:dribble_profilePic,
        bioGraphy:"Leadership, UI / Visual Design, Web Design",
        socialLogo:dribble_logo,
        url:"https://dribbble.com/VikasPatelDesigner"
   
    },
]
const responsiveoptions = {
    responsiveClass:true,
      responsive:{
          0:{
              items:1.3,
          },
          600:{
              items:2,
          },
          1000:{
              items:4,
          }
      }
  };

class Social extends React.Component{
   
    render(){
        return(
            <section id="social" className="port__Section port__Section--Social">
                <SectionHeader name="I AM SOCIAL"></SectionHeader>
                
                <OwlCarousel
                className='owl-theme'
                loop={false}
                margin={50} 
                dots={false} 
                nav={false}
                items={"4"}
                slideBy={"1"}
                center={false} 
                loop={false}
                autoplay={true}
                autoplayTimeout="3000"
                autoplaySpeed="1000"
                autoplaySpeed={1000}
                {...responsiveoptions}
                >
                
                {SocialData.map((item,index) =>
                    <div className={`item port__Social--Wrapper port__Social--Action-`+item.socialName}>
                        <div className="port__Social--Header">
                            <img src={item.socialHeaderImg} width="100%" alt="Social-header-img"/>
                            <div className="port__Social--ProfileImage">
                                <img src={item.socialHeaderProfilePic} alt="Social-profile-img"/>
                            </div>
                        </div>
                        <div className="port__Social--Body">
                            <h2 className="port__Subtitle">Vikas Patel</h2>
                            <h2 className="port__Subtitle port_Social--Bio port__fs1-6 port__mt-2">{item.bioGraphy}</h2>
                            <div className="port__subtitle port_Social--Content port__mt-2">{item.socialContent}</div>
                            <a target="_blank" className={`port__fs2 port__mt-2 port__Social--Action`} href={item.url}>View Profile</a>
                            <img width="118px" className="port__Social--Logo" src={item.socialLogo}/>
                        </div>
                    </div>
                )}
                


                </OwlCarousel>
                
                
            </section>
        )
    }
}
export default Social;