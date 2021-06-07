import Chart from "react-apexcharts";
import config from './config';

const colors = config.app.colors;
const {inverse, info, primary, danger, warning, success, textColor} = colors;
const chartColors = config.app.chartColors;
const {axisColor} = chartColors;

let columnColors = [inverse, primary, info, success, warning, danger, '#EC2A00', '#FF8C22'];
let lineColors = [primary, success, warning];

const data = {
    options: {
        type:"bar",
        dataLabels:{
            enabled:false,
        },
        plotOptions: {
            bar: {
                distributed: true
            }
          },
         
        height:"20",
        width:"50",
        fill:{
            type:"solid",
            colors: columnColors,

        },
        chart: {
          id: "basic-bar",
           toolbar:{
            tools:{
                zoom:false,
                zoomin:false,
                zoomout:false,
                pan:false,
                reset: false
            },
        },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        legend:{
            show:false,
        },
       
      },
      series: [
        {
          name: "series-1",
          type:"column",
          data: [21, 22, 10, 28, 16,21, 22, 10, 28, 21, 13, 30]
        }
      ]
}

const LineChart = ()=>{
    return(
        <section className="bg-white shadow-xl py-1 px-1 my-2 md:col-span-2" >
            <header className="pt-4 px-5 pb-0">
                <h5 className="text-xl  font-semibold font-sans text-gray-500">
                    SHIPMENTS BY MONTH
                  
                </h5>
            </header>
            <Chart
                options={data.options}
                series={data.series}
                type="bar"
                height="260px"
                width="100%"
            />
        </section>
    )
}

export default LineChart;