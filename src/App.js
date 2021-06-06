import NavBar from "Components/Navbar";
import ProductInfo from "Components/ProductInfo"
import Widget from "Components/Widget"
import { Chart, LineChart, PieChart }from "Components/Charts"
import ApexChart from "Components/Charts/ReactApexChart";
import TableData from "Components/Table/Table";
//import ReactApexChart from "react-apexcharts";
//import  TableData  from "Components/Table/Table";


function App() {
  return (
    <div className="bg-main h-full min-h-screen w-full ">
      <NavBar/>
      <div className="px-10 pt-2">
        <ProductInfo/>
        <div className="w-full grid-cols-1  grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Widget 
              icon={(<i className="fi flaticon-like text-blue-300" />)}
              title='SHIPMENTS'
              descriptionTitle='11,885'
              subtitle1='Registrations' 
              description1='+830'
              subtitle2='Bounce Rate' 
              description2='4.5%' 
            />
            <Widget 
              icon={(<i className="fi flaticon-magic-wand text-red-300" />)}
              title='GROSS WEIGHT'
              descriptionTitle='4,332'
              subtitle1='New Visitors' 
              description1='20.1%'
              subtitle2='Bounce Rate' 
              description2='2.3%' 
            />
            <Widget 
              icon={(<i className="fi flaticon-shuffle  text-blue-400" />)}
              title='SUPPLIER'
              descriptionTitle='4,332'
              subtitle1='Basic' 
              description1='3,692'
              subtitle2='Advanced' 
              description2='1,441' 
            />
            <Widget 
              icon={(<i className="fi flaticon-diamond text-green-300" />)}
              title='IMPORTER'
              descriptionTitle='$7,448'
              subtitle1='Last Month' 
              description1='$83,541'
              subtitle2='Last Week' 
              description2='$17,926'
            />
         
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LineChart />
            <PieChart />
            <Chart classes=""/>
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Chart classes="h-48 shadow-xl"/>
            <Chart classes="h-48 shadow-xl"/>
            <Chart classes="h-48 shadow-xl"/>
            <Chart classes="h-48 shadow-xl"/>
        </div>
        <div className=" w-full shadow-xl">
          <TableData/>
        </div>
      </div>
    </div>
  );
}

export default App;
