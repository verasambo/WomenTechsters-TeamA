import { Line } from 'react-chartjs-2'


function DistanceChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         
        datasets: [
            {
                label: 'Distance to pond (meters)',
                data: [30,45, 20, 33, 20, 20, 45, 29, 30,43, 50, 10],
                borderColor:['#2B708A'],
                backgroundColor: ['#2B708A'],
                pointBackgroundColor: '#2B708A',
                pointBorderColor: '#2B708A'
            }
        ]
    }
    const options ={
        scales: {
            y:{
                beginAtZero: true,
                max: 60,
                stepSize: 10
            }
        }
    }
    return (
       <Line data={data}  options={options} />
    )
}

export default DistanceChart
