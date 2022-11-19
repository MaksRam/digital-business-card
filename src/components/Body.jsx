import './Body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';



export default function Body() {

  const element = <FontAwesomeIcon icon={faEnvelope} />

  return (
    <div className='body'>
      <div className='name'>Maksim Ramazanov</div>
      <div className='dev'>Frontend Developer</div>
      <div className='web'>maksimramazanov.website.com</div>
      <button className='email'>{element}Email</button>
      <button className='linkedin'>LinkedIn</button>
      <div className="description">
        <h4>About</h4>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h4 className='interest'>Interests</h4>
        <p className='pxp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptas quidem ea dolore error eos molestias nemo cumque dolorem optio! Dolores deleniti culpa optio eos soluta ratione adipisci quos obcaecati?</p>
      </div>
    </div>
  );
}