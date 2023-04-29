import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import jwsven from '../assets/images/jwsven.jpeg';
const Headers=()=>{
    return(
        <header className="display align-items" >
             <div className="first-row display align-items" id="hide">
                <div className='box'>
                <img src={jwsven} alt={jwsven} className='boxImage' />
                    </div>
              
            </div>
            
            <div className="arrow-side display justify-content align-items">

            <FontAwesomeIcon icon={faAngleLeft} className="f20 white bold "/>
            &nbsp; &nbsp;
            <FontAwesomeIcon icon={faAngleRight} className="f20 white bold " />        

            </div>
            <div className="hide">
            <FontAwesomeIcon icon={faSearch} className="f20 white " />
            </div>
            
        </header>
    )
}
export default Headers;