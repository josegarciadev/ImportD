import NavBar from "Components/Navbar";
import ProductInfo from "Components/ProductInfo"
import Widget from "Components/Widget"
import { Chart, LineChart, PieChart }from "Components/Charts"
import ApexChart from "Components/Charts/ReactApexChart";
import TableData from "Components/Table/Table";
import Progressbar from "Components/Progressbar/Progressbar";
import ButtonSearch from "Components/Progressbar/buttonSearch";
//import ReactApexChart from "react-apexcharts";
//import  TableData  from "Components/Table/Table";


function App() {
  return (
    <div className="bg-main h-full min-h-screen w-full ">
      <NavBar/>
      <div className="px-4 md:px-6 lg:px-10 pt-2 w-full">
        <ProductInfo/>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-4">
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
            <Progressbar 
            classes="h-50 shadow-xl" 
            title='PORT OF ARRIVAL'
            subtitle1='MIAMI, FLORIDA' subtitle2='HOUSTON, TEXAS' subtitle3='LOS ANGELES, CALIFORNIA' subtitle4='SAVANNAH, GEORGIA' subtitle5='NEW YORK, NEW YORK'
            shipment1='50' shipment2='32' shipment3='28' shipment4='15' shipment5='3'
            value1='80' value2='70' value3='70' value4='45' value5='35'
            />
            <Progressbar 
            classes="h-50 shadow-xl" 
            title='COUNTRY OF ORIGIN'
            subtitle1='SHANGHAI, CHINA' subtitle2='SHENZEN, CHINA' subtitle3='BUSAN, SOUTH KOREA' subtitle4='ROTTERDAM, THE NETHERLANDS' subtitle5='PORT KLANG, MALAYSIA'
            shipment1='120' shipment2='97' shipment3='74' shipment4='68' shipment5='43'
            value1='80' value2='70' value3='70' value4='45' value5='35'
            />
            <Progressbar 
            classes="h-50 shadow-xl" 
            title='TOP SUPPLIERS'
            subtitle1='CHINA INC' subtitle2='INDIA CORP' subtitle3='PORTUGAL INC' subtitle4='RUSSIA CORP' subtitle5='SOUTH KOREA LLC'
            shipment1='50' shipment2='32' shipment3='28' shipment4='15' shipment5='3'
            value1='80' value2='70' value3='70' value4='45' value5='35' button={true}
            />
            <Progressbar 
            classes="h-50 shadow-xl" 
            title='TOP IMPORTERS'
            subtitle1='GILDAN' subtitle2='BIC GRAPHIC' subtitle3='SWEDA CO.' subtitle4='STORMTECH' subtitle5='AMAZON'
            shipment1='280' shipment2='257' shipment3='241' shipment4='198' shipment5='175'
            value1='80' value2='70' value3='70' value4='45' value5='35'
            />

        </div>
        <div className=" w-full shadow-xl">
          <ButtonSearch/>
          <TableData/>
        </div>
      </div>
    </div>
  );
}

export default App;
