import logo from '../assets/img/kinal.png';

export const Logo = ({text}) =>{
    return (
        <div className='auth-form-logo-container'>
            <img src={logo} alt="Escudo BMW"/>
            <span> {text}</span>/
        </div>
    )
}