
import {Bar} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data 1',
                    data: [20, 40, 24, 15, 2, 28, 7],
                    borderColor: 'rgba(220, 119, 85, 1)',
                    backgroundColor: 'rgba(220, 119, 85, 1)'

                },
                {
                    label: 'data 2',
                    data: [2, 10, 34, 15, 10, 55, 10],
                    borderColor: 'rgba(220, 119, 85, 1)',
                    backgroundColor: 'rgba(246, 198, 92, 1)'

                },
                {
                    label: 'data 3',
                    data: [4, 39, 64, 8, 18, 35, 7],
                    borderColor: 'rgba(220, 119, 85, 1)',
                    backgroundColor: 'rgba(158, 128, 241, 1)'

                }
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: "true",
                    text: "Groovy Stats",
                    color: 'rgba(220, 119, 85, 1)',
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
        <div>
            <Bar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}