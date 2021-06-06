import { Search, Dropdown } from "Components/Inputs"
const NavBar = ()=>{

    return(
        <nav className="navbar bg-white shadow-xl w-full flex flex-row justify-between px-4 ">
            <div className="flex w-full items-center bg-white flex-row ml-6">
                <Search/>
                <Dropdown/>
                <button className="button-primary flex items-center  text-sm py-1.5 px-4 ml-3 h-7 rounded-3xl">Clear</button>
            </div>
        </nav>
    )
}

export default NavBar