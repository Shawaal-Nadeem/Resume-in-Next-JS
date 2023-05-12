import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import{AiFillGithub} from 'react-icons/ai'
import { FaHeadphones } from 'react-icons/fa';

export default function Home() {
  return (
   <div className="main">
<div className="overlap">
<img src="/images/shawal.jpg"/>
<h1>Shawaal Nadeem</h1>
<h3> Software Engineer</h3>
<br/>
<p>Bachelor of Science in Computer Science, University of Central Punjab(2021-2025)</p>
<p>Web 3.O & Metaverse, PIAIC (2023-2024)</p>
<br/>
<h5>CONTACT ME</h5>
<div className='icons'>
<a href='mailto:hafizshawalnadeem@gmail.com'><FaEnvelope style={{color:'white',cursor:'pointer'}} size={25} /></a>
<a href='https://twitter.com/ShawaalNadeem?t=IjNgxDNGOgIO6X8FQt_jZg&s=09'><FaTwitter style={{color:'white',cursor:'pointer',marginLeft:'20px'}} size={25} /></a>
<a href='https://www.linkedin.com/in/shawaal-nadeem-a72972253/'><FaLinkedin style={{color:'white',cursor:'pointer',marginLeft:'20px'}} size={25} /></a>
<a href='https://github.com/Shawaal-Nadeem'><AiFillGithub style={{color:'white',cursor:'pointer',marginLeft:'20px'}} size={25} /></a>
</div>
</div>

<div className="about-section">
<h2>ABOUT ME</h2>
<p>My technical skills include proficiency in programming languages such as Typescript, Javascript, Python and C++, as well as experience with database management and web development. In addition, I have developed strong communication and leadership skills through various group projects and extracurricular activities.</p>
<br/>
<p>When I'm not working, I enjoy hiking, reading, and spending time with my friends and family. I believe that my determination, can-do attitude, and hard work make me a true asset to any team, and I am excited to bring these qualities to a new opportunity.</p>
<div className='buttons'>
<button className='b1'>SOFT SKILLS</button>
<button className='b2'>HARD SKILLS</button>
</div>
<div className='socialButtons'>
  <button>Active Listening</button>
  <button>Effective Communication</button>
  <button>Collaboration</button>
  <button> Teamwork</button>
  <button>Creative Problem Solving</button>
  <button>Time management</button>
</div>
</div>

   </div>
  )
}
