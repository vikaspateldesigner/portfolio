import React, { useState, useEffect } from 'react';
import './header.css';
// import torch from '../../assets/torch.svg';


    
    const menu = [
        {
            id:"hero",
            name:"Home"
        },
        {
            id:"skills",
            name:"Skills"
        },
        {
            id:"my-Works",
            name:"Design Approach"
        },
        {
            id:"education",
            name:"Education"
        }
    ]

const torch=<svg width="122" height="127" viewBox="0 0 122 127" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M60.9486 1.01101C68.462 0.801917 75.4223 3.6136 82.5779 5.91388C89.8627 8.25572 96.464 12.3873 102.192 17.4616C107.949 22.5627 112.861 28.6495 116.111 35.6219C119.334 42.5378 120.796 50.1599 120.986 57.7876C121.171 65.2281 119.494 72.5182 117.208 79.6014C114.96 86.5669 111.853 93.1721 107.637 99.1555C103.359 105.228 98.1917 110.55 92.2566 115.017C86.0697 119.673 79.5989 124.493 71.9988 125.975C64.3907 127.458 56.554 125.5 49.0833 123.433C41.8851 121.442 35.2937 117.99 28.9412 114.062C22.5867 110.133 16.151 106.114 11.551 100.227C6.92979 94.3124 4.02486 87.2204 2.2664 79.9236C0.534111 72.7354 0.951366 65.3315 1.36251 57.9489C1.78248 50.4079 2.03338 42.793 4.72722 35.7369C7.50967 28.4488 11.3367 21.2686 17.2907 16.2278C23.2123 11.2145 31.0414 9.26267 38.5043 7.1404C45.6266 5.115 53.5469 1.21699 60.9486 1.01101Z" fill="#232323" stroke="white"/>
<path d="M50.6785 51.4881C50.6785 52.304 50.8571 53.0231 50.8571 53.8095C50.8571 54.7743 54.098 54.3453 54.7162 54.3453C57.2177 54.3453 59.8542 54.4784 62.3055 53.9881C63.7423 53.7008 65.7162 53.3821 67.1651 53.2441C67.7049 53.1927 68.0512 53.4122 68.5555 53.2441C69.1684 53.0398 68.9659 53.3062 69.6415 53.4607C69.9205 53.5244 70.472 53.3619 70.7311 53.2441C70.7311 53.6607 72.4203 53.1795 72.5142 52.877C71.5714 51.4881 71.9198 50.8604 71.9198 50.1918C71.9198 49.5083 71.65 48.9158 71.5714 48.2341C71.4651 47.313 69.2069 47.7788 68.6547 47.877C67.6621 48.0535 66.4272 48.0766 65.4206 48.0953C64.1299 48.1192 62.8756 48.2251 61.5912 48.2738C60.7581 48.3055 60.015 48.631 59.1607 48.631C58.4038 48.631 57.6456 48.6188 56.8888 48.631C55.491 48.6535 53.9088 48.8318 52.5436 49.127C51.7042 49.3085 51.2983 48.4708 50.6785 49.127C50.3568 49.4676 50.6785 50.87 50.6785 51.3095M56.0917 73.2516C55.5754 77.0875 56.4669 81.5451 56.0917 85.9035C55.8198 89.0617 56.0917 89.3705 56.0917 92.3422C55.6745 93.8281 56.0917 95.9056 56.0917 97.1806C56.0917 100.855 68.0989 100.331 68.2247 98.1917C68.5845 92.0755 68.2247 85.8191 68.2247 79.6926C68.2247 76.7951 69.1495 72.7273 65.4811 73.2516C62.0141 72.63 59.3901 73.2516 56.0917 73.2516ZM56.0358 67.2019C58.3438 67.5711 60.9321 67.2019 63.268 67.2019C63.9357 67.2019 64.3446 67.2477 64.986 67.2019C65.5339 67.1627 66.9671 67.8105 67.6605 67.2019C67.4624 64.7788 68.8515 64.8495 69.5157 64.1852C70.2742 63.4268 70.5456 63.6795 70.9294 62.6986C71.5237 62.1043 72.8441 61.0557 73.2077 60.2376C73.686 59.1613 69.8352 59.5233 69.1112 59.5233C67.8732 59.5233 66.911 59.6531 65.7283 59.9598C63.7993 60.4599 61.437 60.2376 59.4386 60.2376H53.2183C52.6989 60.2376 50.7867 59.9016 50.4406 60.3467C49.804 61.1652 54.2402 63.4038 54.8255 63.809C55.3522 64.1736 56.0358 64.7217 56.0358 65.4161V67.2019Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path className="port__torch--Light" d="M54.0714 42.3571C50.9849 40.5382 51.1626 36.3381 48.4266 34.3114C46.7952 33.103 44.6799 32.8427 43 31.6428" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path className="port__torch--Light" d="M58.0002 41.8215C57.7444 39.9356 57.9568 38.0451 57.5438 36.1865C57.3062 35.1173 57.3285 33.5095 57.5041 32.4365C57.7129 31.1609 58.4196 30.1524 58.6748 28.9048C58.8115 28.2365 58.893 27.6884 58.893 27" stroke="white" strokeWidth="3" strokeLinecap="round" stroke-Linejoin="round"/>
<path className="port__torch--Light" d="M63.1785 39.8571C63.5078 38.0274 63.7915 36.5322 64.6467 34.8769C65.2219 33.7637 66.1929 32.7663 66.6606 31.623C67.2526 30.1758 67.2856 28.9037 67.2856 27.3571" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path className="port__torch--Light" d="M67.8215 40.5715C69.1435 38.9994 70.8149 37.7599 72.5338 36.6528C73.6523 35.9325 74.7599 35.1951 75.5398 34.1032C76.6224 32.5875 77.3472 30.7055 78.0001 28.9643" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>;

const hamburger=<svg width="72" height="45" viewBox="0 0 72 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.23157 4.65108C16.4967 4.65108 28.0527 6 41.5527 4.65109C44.5527 4.65108 47.2968 4.65108 49.5527 4.65108C52.7011 4.65108 65.4324 3 68.5527 3" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 22.5101C13.1446 23.4593 23.5113 24.3458 33.723 23.7076C37.2642 23.4862 40.4304 23.7076 44.0527 23.7076C50.0933 23.7076 61.0025 21.8943 67.0527 21.8943" stroke="white" stroke-width="5" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M4.05273 41.5C25.0527 43.5 46.5527 39 67.0527 41.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


const cross=<svg className="port__CloseMenu" width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.27965 3.75612C11.9524 12.4289 19.1699 21.5541 29.6697 30.1462C31.791 32.2675 33.7314 34.2078 35.3266 35.803C37.5528 38.0293 47.7227 45.8641 49.9291 48.0706" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.36728 47.7373C19.6307 34.3022 31.6516 15.9175 47.915 3.18954" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>




function Header (){
        const [isOpen, setIsOpen] = useState(false)
        useEffect(() => {
        document.body.classList.toggle('theme-light', isOpen);
        },[isOpen])

        // const [isMenu, setIsMenu] = useState(false)
        // useEffect(() => {
        // document.body.classList.toggle('nav-active', isMenu);
        // },[isMenu])
    return(
        <header className="port__Header">
            <div className="port__Container">
                <div className="port__Layout port__Layout--V-Center port__Layout--H-SpaceBetween">
                    <div className="port__Layout--W">
                        <span className="port__Hamburger">
                            {hamburger}
                            {cross}
                        </span>
                        <ul className="port__Menu">
                            {
                                menu.map((item) => 
                                <li className="port__Menu--item">
                                    <a href={`#`+item.id}>{item.name}</a>
                                    {/* {hoverSVG} */}
                                </li> 
                            )}
                        </ul>
                    </div>
                    <div className="port__Layout--W">
                        <div onClick={()=> setIsOpen(!isOpen)} className="port__theme--Switcher">
                            {torch}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;