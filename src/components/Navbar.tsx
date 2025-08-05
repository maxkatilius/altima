import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="
      fixed
      flex items-center gap-16 bg-slate-50/80
      p-6
      top-7 left-10
      text-xl tracking-wider
    ">
      <Link to='/' className="font-bold tracking-normal text-2xl">&copy; ALTIMA</Link>
      <Link to='/mission'>MISSION</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/solutions'>SOLUTIONS</Link> 
    </nav>
  )
}

export default Navbar