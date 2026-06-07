import '../App.css';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className='nav-left'>
        <h1>Sayma Islam</h1>
      </div>
      <div className='nav-center'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skill</a></li>
        <li><a href="">Project</a></li>
      </div>
      <div className='nav-right'>
        <button>Hire me</button>
      </div>
    </div>
  );
}