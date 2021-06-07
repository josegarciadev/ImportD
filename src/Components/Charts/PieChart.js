import Chart from "react-apexcharts"

const options = {
    options: {
        plotOptions: {
            pie: {
              donut: {
                size: '40%',
                
              },
              expandOnClick: false
            }
          },
        dataLabels:{
            enabled:false,
        },
        labels: ['A1234', 'B1234', 'C1234', 'D1234', 'E1234'],
        legend: {
          show: true,
          position: 'right',
          horizontalAlign: 'center', 
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial',
      },
        colors:['#FD5F00', '#005792', '#1A86D0','#FDA700','#21AE8C']
    },
    series: [44, 55, 41, 17, 15],
    
  }

const PieChart = ()=>{
    return (
        <section className="bg-white shadow-xl py-1 px-1 my-2">
             <header className="justify-self-start pt-4 px-5 pb-0">
                <h5 className="text-xl font-semibold font-sans text-gray-500">
                    TOP HS CODES
                </h5>
            </header>
            <div className="flex flex-col h-full pb-9 justify-center">
            <Chart 
            options={options.options}
            series={options.series}
            type="donut"
            width="260"
            />               
            </div>
        </section>
    )
}

export default PieChart