import './index.css'
const ButtonExport = ({color,name}) => {
    return (
        <button className={`buttonTable outline-none focus:outline-none px-2 py-1 ${color} text-white`} >
            {name}
        </button>
    )
}

export default ButtonExport