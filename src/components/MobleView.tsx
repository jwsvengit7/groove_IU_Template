import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon1 from '../assets/svg/icon1.svg';
import icon3 from '../assets/svg/icon3.svg';

import home from '../assets/svg/home.svg';
import icon5 from '../assets/svg/icon5.svg';

const MobleView = ()=>{
    return (
        <div className="mobile">
               <img src={home} alt='' width={20}/>
               <img src={icon3} alt='' width={20}/>
             <img src={icon1} alt='' width={20}/>
             <img src={icon5} alt='' width={20}/>

        </div>
    )

}
export default MobleView;