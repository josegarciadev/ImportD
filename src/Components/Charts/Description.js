
const Description = () => {
    return (
        <div className='py-2 px-2' style={{fontSize:'11px'}}>
           
                <div  className=''>
                <button className=' bgInfo active:bgPrimary text-white rounded-full px-1 outline-none focus:outline-none  -ml-2 mr-2'>view</button>
                <span>MASTER BOL: #########</span>
               
                    </div>

            <div className='ml-8'>
            <p> HOUSE BOL: #########</p>
                <p>CONTAINER NUMBER: <span>#########</span></p>
                <p>ARRIVAL DATE: <span>#########</span></p>
                <p>COUNTRY OF ORIGIN: <span>#########</span></p>
                <p>PORT OF ARRIVAL:<span>#########</span></p>
            </div>

        </div>
    )
}
export default Description
