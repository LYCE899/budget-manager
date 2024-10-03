import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ expenses, categories }) => {
    // Calcul du total des dépenses
    const totalExpenses = expenses.reduce((total, exp) => total + parseFloat(exp.amount), 0);

    const data = {
        labels: categories.map(cat => cat.name),
        datasets: [{
            data: categories.map(cat => 
                expenses
                    .filter(exp => exp.category === cat.name)
                    .reduce((total, exp) => total + parseFloat(exp.amount), 0)
            ),
            backgroundColor: categories.map(cat => cat.color),
        }],
    };

    return (
        <div className="chart-container">
            <h2>Expense Chart</h2>
            {/* Affichage du total des dépenses */}
            <h3>Total Expenses: {totalExpenses} USD</h3>
            <Pie data={data} options={{ maintainAspectRatio: false }} />
        </div>
    );
};

export default Chart;
