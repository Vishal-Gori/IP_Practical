import { Link } from "react-router-dom";
import Logo from './images/logo.png'

const NavBar = () => {
    return (
        <nav>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{padding:"10px"}}>
                    <span>Spicies</span>
                    <img src={Logo} style={{width:"50px", borderRadius:"50%"}}/>
                </div>
                <div style={{marginTop:"10px"}}>
                    <Link to='/'>Home</Link>
                    <Link to='/popular-recipe'>Popular Recipies</Link>
                    <Link to='/veg-recipe'>Veg Recipes</Link>
                    <Link to='/nonveg-recipe'>Non-Veg Recipes</Link>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;