import './Footer.css'
import twitter from './twitter.jpeg'
import facebook from './facebook.png'
import instagram from './instagram.jpeg'
import github from './github.png'

export default function Footer() {
    return (
        <div className='footer'>
      <span className='twitter'><img src={twitter} className='twit' alt="x" /></span>
      <span className='facebook'><a href="https://www.facebook.com/maks.ram90/"><img src={facebook} className='face' alt="q" /></a></span>
      <span className='instagram'><a href="http://www.instagram.com"><img src={instagram} className='insta' alt="fds" /></a></span>
      <span className='github'><a href="http://www.github.com/MaksRam"><img src={github} className='github' alt="a" /></a></span>
      
      </div>
    );
  }