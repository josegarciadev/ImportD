import Chart from "react-apexcharts"

const options = {
    options: {
        plotOptions: {
            pie: {
              donut: {
                size: '50%',
              }
            }
          },
        dataLabels:{
            enabled:false,
        }
    },
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  }

const PieChart = ()=>{
    return (
        <section className="bg-white shadow-xl py-4 px-5 my-2">
             <header className="justify-self-start pt-4 px-5 pb-0">
                <h5 className="text-xl font-normal">
                    SHIPMENTS 
                </h5>
            </header>
            <div className="flex flex-col h-full pb-9 justify-center">
            <Chart 
            options={options.options}
            series={options.series}
            type="donut"
            />               
            </div>
        </section>
    )
}

export default PieChart