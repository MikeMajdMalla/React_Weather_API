import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <div>
        <div className= 'navbar'>
         <div className = 'container'>   
        <ul>
        <Link to= "/Home"> Home </Link>
        <Link to= "/Weather"> Weather</Link>
        <Link to= "/Countries"> Country </Link>
        <Link to= "/EventInfo"> Event Information </Link>
        </ul>
        </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;