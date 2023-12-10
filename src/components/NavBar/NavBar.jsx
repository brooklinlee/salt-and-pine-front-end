// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li>Home</li>
          <li>About</li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
          <li><NavLink to='/blogs/newBlog'>New Blog</NavLink></li>
          <li><NavLink to="/vlogs">Vlogs</NavLink></li>
          <li><NavLink to='/vlogs/newVlog' >New Vlog</NavLink></li>
          <li>Search</li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Contact Me</li>
        </ul>
      :
      <ul>
          <li>Home</li>
          <li>About</li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
          <li><NavLink to="/vlogs">Vlogs</NavLink></li>
          <li>Search</li>
          <li>Instagram</li>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
          <li>YouTube</li>
          <li>Contact Me</li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
