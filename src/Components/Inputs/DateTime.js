import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css"
const DateTime = () => {
    const [startDate, setStartDate] = useState(new Date("2018-01-01"));
    const [endDate, setEndDate] = useState(new Date());
    const Datenow=new Date();
    const minDate=new Date('2018-01-01')
    return (
        <div className='flex containerInputs mr-2 py-1 px-2'>
            
            <DatePicker
                dateFormat="yyyy-MM-dd"
                maxDate={Datenow}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setStartDate(date)}
                minDate={minDate}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
            &nbsp;To&nbsp; 
            <DatePicker
                className='ml-1'
                dateFormat="yyyy-MM-dd"
                selected={endDate}
                onChange={(date) => setStartDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                minDate={minDate}
                maxDate={Datenow}
                startDate={startDate}
                endDate={endDate}
                dropdownMode="select"
            />
        </div>
      
    );
}
export default DateTime