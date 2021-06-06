/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import {useState} from "react";

const Dropdown = () =>{
    

    const [state,setState] = useState(false);

    const toggle= ()=> setState( last=> !last);
    return (
        <div className="relative flex justify-center items-center">
            <a  className="relative py-2 px-1 my-auto cursor-pointer" onClick={toggle}>Dropdown</a>
            {state && <div style={{
                border:"1px solid #00000026",
                boxShadow:"0 0.5rem 1rem rgb(0 0 0 / 18%)",
                minWidth:"10em",
            }} tabIndex="-1" role="menu" aria-hidden="true" className="absolute my-1 py-2 rounded bg-white z-20 w-full top-8 ">
                <button className="border-none button-secondary w-full py-1 px-5">
                    Here
                </button>
            </div>}
        </div>
    );
}

export default Dropdown