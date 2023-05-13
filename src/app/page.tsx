import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import{AiFillGithub} from 'react-icons/ai'
import { FaHeadphones } from 'react-icons/fa';

export default function Home() {
  return (
   <div className="main">
    <div className='overlapMain'>
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
<h2 className='profHeading'>PROFESSIONAL EXPERIENCE</h2>
<div className='firstCard'>
  <div className='content'>
  <h3>Website Development:</h3>
<p>I have created responsive and user-friendly websites using modern front-end technologies. Leveraging my knowledge of HTML, CSS, and JavaScript, I have implemented intuitive user interfaces, engaging animations, and seamless navigation.</p>
</div>
</div>
<br/>
<div className='card'>
  <div className='content'>
  <h3>Front-end Frameworks:</h3>
<p>I am well-versed in popular front-end frameworks such as Bootstrap and Foundation. I have utilized these frameworks to streamline development processes, enhance cross-browser compatibility, and ensure mobile responsiveness.</p>
</div>
</div>
<br/>
<div className='card'>
  <div className='content'>
  <h3>JavaScript and Libraries:</h3>
<p>I am proficient in JavaScript and have utilized it to create interactive and dynamic elements on websites. I have also worked with libraries such as jQuery to simplify DOM manipulation, handle asynchronous requests, and implement advanced functionality.</p>
</div>
</div>
<br/>
<div className='card'>
  <div className='content'>
  <h3>Version Control:</h3>
<p>I have utilized Git for version control, allowing for effective collaboration and seamless code management within development teams. I am familiar with branching, merging, and resolving conflicts to ensure smooth and efficient project workflows.</p>
</div>
</div>
</div>

   </div>
  )
}
