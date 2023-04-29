import jwsven from '../assets/images/jwsven.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import icon1 from '../assets/svg/icon1.svg';
import icon3 from '../assets/svg/icon3.svg';
import icon6 from '../assets/svg/icon6.svg';
import icon4 from '../assets/svg/icon4.svg';
import icon5 from '../assets/svg/icon5.svg';
function Sidebar() {
    const array =[
        "Riffs & Runs",
        "African Heat",
        "Gidi Nights",
        "Running out of Playlist na....",
        "Saturday was a Good Day",
        "Gidi Nights",

        "Riffs & Runs",
        "African Heat",
        "Running out of Playlist na....",
        "Saturday was a Good Day",
        "Gidi Nights",
     

    ]
    
    return (
        <aside>
            <div className="first-row display align-items">
                <div className='box'>
                <img src={jwsven} alt={jwsven} className='boxImage' />
                    </div>
                <span className='white pad-left-10 f14'>
                    Hey Jwsven!
                </span>
            </div>
            <div className='sidebars'>
            <li>
                    <div className='wi-100 display align-items'>
                        <FontAwesomeIcon icon={faHome} className='ccc pad-left-10' />
                        <span className='white pad-left-10'>Home</span>
                    </div>
                </li>
                <li className='second-mg'>
                    <div className='wi-100 display align-items'>
                        <img src={icon4} alt='' className='pad-left-10'/>
                        <span className='white pad-left-10'>Discover</span>
                    </div>
                </li>
                <li>
                    <div className='wi-100 display align-items'>
                    <img src={icon1} alt='' className='pad-left-10'/>
                        <span className='white pad-left-10'>Your Library</span>
                    </div>
                </li>
                <li>
                    <div className='wi-100 display align-items'>
                    <img src={icon6} alt='' className='pad-left-10 goldenrod'/>
                        <span className='goldenrod pad-left-10'>Linked Songs</span>
                        <img src={icon3} alt='' className='pad-left-20'/>
                    </div>
                </li>
                <li className='second-mg'>
                    <div className='wi-100 display align-items'>
                    <img src={icon4} alt='' className='pad-left-10'/>
                        <span className='white pad-left-10'>Recently Played</span>
                    </div>
                </li>
                <li className='bootom_down'>
                    <div className='wi-100 display align-items'>
                    <img src={icon5} alt='' className='pad-left-10'/>
                        <span className='white pad-left-10'>Create Playlist</span>
                        <FontAwesomeIcon icon={faSearch} className='white pad-left-20 f15' />
                    </div>
                </li>
            {array.map((values,index)=>{
                return (
                    <li>
                    <p className='white pad-left-5 f14'>&nbsp;{values}</p>
                </li>

                )
            })}
               
                
                


            </div>
             

        </aside>
    )
    
}
export default Sidebar;