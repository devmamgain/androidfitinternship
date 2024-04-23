import ApexCharts from 'apexcharts'
import { useEffect } from 'react';
import warning from "../assets/warning.svg"
import personimage from "../assets/personimage.svg"
import personyoga from "../assets/personyoga.svg"
import ladydumble from "../assets/ladydumble.svg"
import leftarrow from "../assets/leftarrow.svg"

import BottomBar from './BottomBar';
import { useNavigate } from 'react-router-dom';


const WorkoutTracker =()=>{
    const navigate = useNavigate()

    const tonavigate =()=>{
        navigate("/workoutschedule")
            }
            const backnavigate =()=>{
                navigate("/workoutgoals")
                    }
    useEffect(()=>{
     


            const options = {
                series: [{
                name: 'PRODUCT A',
                color:'#819CFF',
                data: [44, 55, 41, 67, 22, 43]
              }, {
                name: 'PRODUCT B',
                color:'#32CD32',
                data: [13, 23, 20, 8, 13, 27]
              },],
                chart: {
                type: 'bar',
                height: 200,
                stacked: true,
                
                toolbar: {
                  show: false
                },
                zoom: {
                  enabled: false
                }
              },
            
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 10,
                  columnWidth: "30%",
                  borderRadiusApplication: 'end', // 'around', 'end'
                  borderRadiusWhenStacked: 'last', // 'all', 'last'
                  dataLabels: {
                    
                    enabled: false // Disable data labels for bars
                }
    
                },
              },
              xaxis: {
                type: 'category',
                categories: [
                   
                    '12:00',"2:00" , '4:00', '6:00', '8:00', '10:00'
                  ],
                axisTicks: {
                    show: true, // Show axis ticks (the vertical lines)
                    borderType: 'dotted', // Set the border type of the ticks to dotted
                    color: '#888', // Color of the ticks
                    height: 6, // Height of the ticks
                    offsetX: 0,
                    offsetY: 0
                  },
                  axisBorder: {
                    color: '#89A1FF',
                          
                },
                  
              },
              grid: {
                borderColor: '#ddd', // Color of the grid lines
                strokeDashArray: 4 // Length of each dash in the grid lines
              },
              legend: {
                show: false 
              },
              dataLabels: {
                enabled: false,
              },
              yaxis: {
                show: false // Hide the y-axis completely
              },
              fill: {
                opacity: 1
              }
              };
            
              var chart = new ApexCharts(document.querySelector("#chart"), options);
              chart.render();
             
       // Clean up function
    return () => {
        chart.destroy();
    };
    },[])
    return(
        <div className="min-h-screen ">
        <div className="flex flex-col flex-1 overflow-y-auto">
        <h1 className="flex gap-2 text-2xl text-[#2C2B2B] font-bold ml-5 mt-10 text-center">
        <img src={leftarrow}  onClick={backnavigate} alt="leftarrow" className='w-5 h-5 mt-2'/>

           <span className='mx-auto'> Workout Tracker </span>
           <img src={leftarrow}  onClick={tonavigate} alt="leftarrow" className="w-5 h-5 ml-auto mt-2 transform rotate-180 mr-5" />

           </h1>

       <div id='chart' className='ml-5 mr-5' onClick={tonavigate}/>
       <div className=" ml-5 mr-5 py-4 text-sm rounded-2xl bg-gradient-to-r from-[#819cff47] to-[#10101000]  flex gap-2 ">
        <img src={warning} alt="warning" className='ml-2'/>You've burned fewer calories than yesterday. Time to get moving! </div>

        </div>
        <div className="flex flex-col mt-5">

<h1 className="text-xl text-[#2C2B2B] font-semibold ml-5 ">Upcoming Workout</h1>
<div className='rounded-xl  ml-5 mr-5 shadow-2xl mt-5 py-4'>
    <div className='flex gap-2'>
<img src={personimage} alt="personimage" className='ml-2'/>
<div className='flex flex-col'>
    <h1>Full Body Workout</h1>
  <h2 className=' text-xs text-[#7F7F7F]'>Today 3pm</h2>
  </div>
  <label className="inline-flex items-center cursor-pointer ml-auto mr-5">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
  </div>
</div>
<div className='rounded-xl  ml-5 mr-5 shadow-2xl mt-4 py-4'>
    <div className='flex gap-2'>
<img src={personyoga} alt="personyoga" className='ml-2'/>
<div className='flex flex-col'>
    <h1>Upper Body Workout</h1>
  <h2 className=' text-xs text-[#7F7F7F]'>4 Feb, 3:30 pm</h2>
  </div>
  <label className="inline-flex items-center cursor-pointer ml-auto mr-5">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
  </div>
</div>
<h1 className="text-xl text-[#2C2B2B] font-semibold ml-5 mt-4 ">What Do You Want to Train</h1>
<div className='flex bg-[#8CB1FF] rounded-xl mt-4 ml-5 mr-5'>
<div className='flex flex-col p-5'>
    <h1 className='text-sm'>Full Body Workout</h1>
  <h2 className=' text-xs text-black'>Arms</h2>
  <h2 className=' text-xs text-black'>Chest</h2>

  <h2 className=' text-xs text-black'>Back</h2>
  <h2 className=' text-xs text-black'>Legs</h2>

  </div>
   <img src={ladydumble} alt='nolady' className='ml-auto mr-3 mt-2' />
</div>

</div>


<BottomBar />
     
   
        </div>
    )
}

export default WorkoutTracker