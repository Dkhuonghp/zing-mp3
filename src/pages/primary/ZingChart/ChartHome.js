import React, { memo } from "react"
import { useSelector } from 'react-redux';

import { Chart } from "react-chartjs-2"
import {
   Chart as ChartJS,
   LineController,
   LineElement,
   PointElement,
   LinearScale,
   Title,
   CategoryScale,
   Legend,
   Tooltip,
} from "chart.js"

ChartJS.register(CategoryScale, LineController, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const CharHomeItem = memo(({ id }) => {

   
   const data = useSelector((state) => state.dataZingChart.dataZingChart);

    const EnCodeId = (num) => {
        let item = data?.RTChart?.items[num].encodeId
        return item
    }

    const DataChart0 = data?.RTChart?.chart?.items[EnCodeId(0)]
    const DataChart1 = data?.RTChart?.chart?.items[EnCodeId(1)]
    const DataChart2 = data?.RTChart?.chart?.items[EnCodeId(2)]

    const labels = data?.RTChart?.chart?.times.map((e) => e.hour + ':00')
    // const pointImage = new Image()
    // pointImage.url = data?.RTChart?.items[0].thumbnail
   
    const options = {
        animations: {
            radius: {
                duration: 500,
                easing: "linear",
                loop: (context) => context.active,
            },
        },
        datasetStrokeWidth: 10,
        pointDotStrokeWidth: 10,
        tooltipFillColor: "rgb(0,0,0)",
        interaction: {
            mode: "index",
            intersect: false,
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        tooltips: {
            enabled: true,
            mode: "x-axis",
            intersect: false,
            padding: 2,
            caretPadding: 4,
            usePointStyle: true,
        },
        hover: {
            mode: "dataset",
            intersect: false,
            includeInvisible: true,
        },
        scales: {
            y: {
                min: -100,
                max: `${data?.RTChart?.chart?.maxScore}`,
                display: false,
            },
            x: {
                ticks: {
                    callback: function (val, index) {
                    return index % 2 === 0 ? this.getLabelForValue(val) : ""
                    },
                    padding: 0,
                    textStrokeColor: "#fff",
                    color: "#96979B",
                },
                alignToPixels: true,
            },
        },
    }
    const datas = {
        labels,
        datasets: [
            {
                label: data?.RTChart?.items[0]?.title,
                data: DataChart0?.map((e) => e.counter),
                borderColor: "#4A90E2",
                backgroundColor: "#4A90E2",
                fill: false,
                tension: 0.5,
                borderWidth: 2,
                pointBorderWidth: 3,
                pointRadius: 3,
                pointHoverBackgroundColor: "#4A90E2",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 3,
                pointHoverRadius: 5.5,
                oder: 1,
                hoverRadius: 12,
                hoverBorderWidth: 3,
            },
            {
                label: data?.RTChart?.items[1]?.title,
                data: DataChart1?.map((e) => e.counter),
                borderColor: "#27BD9C",
                backgroundColor: "#27BD9C",
                fill: false,
                tension: 0.5,
                borderWidth: 2,
                pointBorderWidth: 3,
                pointRadius: 3,
                pointHoverBackgroundColor: "#27BD9C",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 3,
                pointHoverRadius: 5.5,
                hoverRadius: 12,
                oder: 2,
                hoverBorderWidth: 3,
            },
            {
                label: data?.RTChart?.items[2]?.title,
                data: DataChart2?.map((e) => e.counter),
                borderColor: "#A64250",
                backgroundColor: "#A64250",
                fill: false,
                tension: 0.5,
                borderWidth: 2,
                pointBorderWidth: 3,
                pointRadius: 3,
                pointHoverBackgroundColor: "#A64250",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 3,
                pointHoverRadius: 5.5,
                hoverRadius: 12,
                oder: 3,
                hoverBorderWidth: 3,
            },
        ],
    }
    return <Chart id={id} updateMode="resize" type="line" options={options} data={datas} />
})

export default CharHomeItem
