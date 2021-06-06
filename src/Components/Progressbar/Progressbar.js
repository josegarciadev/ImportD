import ButtonSearch from './buttonSearch'

const Progressbar = ({classes,title,subtitle1,subtitle2,subtitle3,subtitle4,subtitle5,shipment1,shipment2,shipment3,shipment4,shipment5,value1,value2,value3,value4,value5,button=false})=> {
    return(
        <div className={`bg-white shadow-xl py-1 px-4 my-2 ${classes}`} >
            <div className='flex justify-between p-2 mb-1'>
                <h6 className="font-bold">{title} </h6>
                <div className='text-center text-xs text-gray-400'><p># OFF </p><small>SHIPMENTS</small></div>
            </div>
             <div>
                <div className="relative pt-1" style={{fontSize:'0.7em'}}>
                        <div className="clearfix  text-gray-800  font-bold flex justify-between ">
                            <span className="pull-right m-0 fw-semi-bold">{subtitle1}</span>
                            <span className="fs-mini">{shipment1}</span>
                        </div>
                    <div className="overflow-hidden h-1 mb-3 text-xs flex rounded bg-gray-200">
                        <div style={{ width: value1+'%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bgSuccess"></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative pt-1" style={{fontSize:'0.7em'}}>
                <div className="clearfix  text-gray-800  font-bold  flex justify-between">
                            <span className=" m-0 ">{subtitle2} <span className='my-3'>{(button) && <ButtonSearch/>}</span></span>
                            <span >{shipment2}</span>
                        </div>
                    <div className="overflow-hidden h-1 mb-3 text-xs flex rounded bg-gray-200">
                        <div style={{ width: value2+'%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bgPrimary"></div>
                    </div>
                </div>
            </div>
            <div>
            
                <div className="relative pt-1" style={{fontSize:'0.7em'}}>
                <div className="clearfix text-gray-800  font-bold  flex justify-between">
                            <span className="pull-right m-0 fw-semi-bold">{subtitle3}</span>
                            <span className="fs-mini">{shipment3}</span>
                        </div>
                    <div className="overflow-hidden h-1 mb-3 text-xs flex rounded bg-gray-200">
                        <div style={{ width: value3+'%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bgInfo"></div>
                    </div>
                </div>
            </div>
            <div>
           
                <div className="relative pt-1" style={{fontSize:'0.7em'}}>
                <div className="clearfix  text-gray-800  font-bold  flex justify-between">
                            <span className=" m-0  ">{subtitle4}</span>
                            <span className="fs-mini">{shipment4}</span>
                        </div>
                    <div className="overflow-hidden h-1 mb-3 text-xs flex rounded bg-gray-200">
                        <div style={{ width: value4+'%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bgDanger"></div>
                    </div>
                </div>
            </div>
            <div>
            
                <div className="relative pt-1" style={{fontSize:'0.7em'}}>
                <div className="clearfix  text-gray-800  flex font-bold  justify-between">
                            <span className="pull-right m-0 fw-semi-bold">{subtitle5}</span>
                            <span className="fs-mini">{shipment5}</span>
                        </div>
                    <div className="overflow-hidden h-1 mb-3 text-xs flex rounded bg-gray-200">
                        <div style={{ width: value5+'%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bgWarning"></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Progressbar;