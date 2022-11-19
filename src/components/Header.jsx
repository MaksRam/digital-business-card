import pict from './maks.jpeg'
import './Header.css'

export default function Header() {
    return (
        <div>
      <img src={pict} alt="maksram" className='pic'/>
      </div>
    );
  }