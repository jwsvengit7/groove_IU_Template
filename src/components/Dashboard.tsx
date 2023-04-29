import React from 'react';
import '../styles/style.css';
import '../styles/mystyle.css';
import Headers from "./Headers";
import Sidebar from './Sidebar';
import Main from './Main';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
const  images=[
    image1,
    image2,
    image3,
    image1,
    image2,
    image3
]
function Dashboard() {
    return(
    <div className='app-ui display'>
          <Sidebar />
        <div className='main'>
            <Headers />
            <Main imgs={images}/>
        </div>

    </div>
    )
    
}
export default Dashboard;