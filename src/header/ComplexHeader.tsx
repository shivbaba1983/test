import './ComplexHeader.scss';
import lord from './../assets/lord.jpg';
import maharashtra_logo from './../assets/maharashtra_logo.png'
const ComplexHeader =()=>{

    return(<div>
  
        <div className="complex-headline">
        <h1> <img src={lord} className="lord-image"/> सरकारी योजनेचा लाभ घेऊन बदल घडवूया </h1>
        </div>
    </div>)
}

export default ComplexHeader;