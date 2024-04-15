import styles from './VerticalBar.module.css';
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

export default function VerticalBar(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Sales $',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgba(220, 119, 85, 1)',
                    backgroundColor: 'rgba(158, 128, 241)'

                }
            ]
        })
        setChartOptions({
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
            <Bar data={chartData} options={chartOptions}/>
        </>
    )
}