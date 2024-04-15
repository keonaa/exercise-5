import {Pie} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ["keona", "anders", "chelsea", "sebster", "henver", "tina"],
            datasets: [
                {
                    label: '# of lame',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor:  [
                        'rgba(158, 128, 180)',
                        'rgba(128, 158, 141)',
                        'rgba(58, 228, 141)',
                        'rgba(18, 168, 221)',
                        'rgba(118, 18, 211)',
                        'rgba(200, 128, 111)'
                    ],
                    backgroundColor: [
                        'rgba(158, 128, 180)',
                        'rgba(128, 158, 141)',
                        'rgba(58, 228, 141)',
                        'rgba(18, 168, 221)',
                        'rgba(118, 18, 211)',
                        'rgba(200, 128, 111)'
                    ], 
                    borderWidth: 1

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
            <div>
                <Pie data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}