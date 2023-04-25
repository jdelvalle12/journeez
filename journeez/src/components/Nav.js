import { useState } from 'react';
import  Link  from 'next/link';

function Nav() {
  const [showAlert, setShowAlert] = useState(false);

  function handleAlert() {
    setShowAlert(true);
  }

  return (
<nav>
  <ul className="nav-list">
    <li>
      <button onClick={handleAlert}>Alerts!</button>
    </li>
    <li>
      <Link href="/signup">Signup</Link>
    </li>
    <li>
      <Link href="/login">Login</Link>
    </li>
  </ul>
  {showAlert && (
    <div className="alert" role="alert">
      This is an alert!
      <button onClick={() => setShowAlert(false)}>Close</button>
    </div>
  )}
      
    </nav>
  );
}

export default Nav;