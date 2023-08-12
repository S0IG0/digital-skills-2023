import React from 'react';
import { Bar } from 'react-chartjs-2';

interface DataItem {
    section: string;
    plannedHours: number;
    actualHours: number;
    // Добавьте другие поля, если необходимо
}

interface ChartComponentProps {
    data: DataItem[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.section),
        datasets: [
            {
                label: 'План часов',
                data: data.map(item => item.plannedHours),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
                label: 'Фактически часов',
                data: data.map(item => item.actualHours),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="container mt-4">
            <h2>График сравнения плана и фактических часов</h2>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default ChartComponent;
