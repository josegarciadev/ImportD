const Widget = ({icon,title,subtitle1,subtitle2,descriptionTitle,description1,description2})=>{
    return(
        <div className="my-2 py-4 px-5 bg-white shadow-xl">
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <span className="text-5xl">
                    {icon}
                    </span>
                </div>
                <div className="col-span-9 px-5">
                    <h6 className="text-base">{title}</h6>
                    <p className="text-2xl">{descriptionTitle}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h6 className="text-base">{subtitle1}</h6>
                    <p className="text-sm">{description1}</p>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-base">{subtitle2}</h6>
                    <p className="text-sm">{description2}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Widget;