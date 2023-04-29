import omay from '../assets/images/Omah Lay Name Tag-min 1.png';
import Text from '../assets/images/Text.png';
import MobleView from './MobleView';
interface images{
    imgs:string[]
}

function Main(props:images){
   
return (
    <div className="section">
        <section className="section-one display justify-space-between">
        <img className="udux" src={Text} />
         <div className='omay'>
                <img src={omay} alt={omay} width={250} height={80} />
         </div>
            </section>
            <section className="section-two">
                <div className='mobileTake'>
                <div className='row'>
                    <h1 className='white '>Welcome Back</h1>
                    <div className='row-image display'>
                    {props.imgs.map((val,index)=>{
                        return(
                            <div className='img-div'>   
                                <div className='inside-div'>
                                <img src={val} alt={val} /> 
                                <div className='down-left'>
                                    <h5 className='white mag-0 mag-bottom-15'>Daily Vibes 1</h5>
                                    <p className='white f12 mag-0'>Hello dfds img elements must have an alt prop</p>
                               </div>
                                    </div>
                          
                           
                            </div>
                        )
                    })}

                    </div>

                    </div>
                    </div>
            
            </section>
            <section className="section-three">
            <div className='mobileTake'>
            <div className='row'>
                    <h1 className='white '>Cheers to the Weekend</h1>
                    <div className='row-image display'>
                    {props.imgs.map((val,index)=>{
                        return(
                            <div className='img-div'>   
                                <div className='inside-div'>
                                <img src={val} alt={val} /> 
                                <div className='down-left'>
                                    <h5 className='white mag-0 mag-bottom-15'>Daily Vibes 1</h5>
                                    <p className='white f12 mag-0'>Hello dfds img elements must have an alt prop</p>
                               </div>
                                    </div>
                          
                           
                            </div>
                        )
                    })}

</div>
</div>

                </div>
            
            
            </section>
            <MobleView  />


    </div>
)
}
export default Main;