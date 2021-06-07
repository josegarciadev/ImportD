const { default: Description } = require("./Description")

const Chart = ({classes})=> {
    return(
        <div className={`bg-white shadow-xl py-1 px-1 my-2 ${classes}`}>
            <header className="justify-self-start pt-4 px-5 pb-0">
                <h5 className="text-xl font-semibold font-sans text-gray-500">
                    RECENT SHIPMENTS
                </h5>
            </header>
            <div className='pt-4  px-2'>
          
                <Description/>
                <Description/>
            </div>
            
        </div>
    )
}

export default Chart;