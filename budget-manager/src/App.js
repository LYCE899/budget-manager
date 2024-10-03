import React, { useState } from 'react';
import Chart from './components/Chart';
import './App.css';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const categories = [
        { name: 'Food', color: '#FF6384' },
        { name: 'Transport', color: '#36A2EB' },
        { name: 'Rent', color: '#FFCE56' },
        { name: 'Clothes', color: '#4BC0C0' },
        { name: 'Outings', color: '#9966FF' }
    ];

    const handleAddExpense = () => {
        const newExpense = { amount, date, category };
        setExpenses([...expenses, newExpense]);
        setAmount('');
        setDate('');
        setCategory('');
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Welcome to your Budget Management App</h1>
            </header>
            
            <div className="form-container">
                <input 
                    type="number" 
                    placeholder="Enter Amount" 
                    value={amount} 
                    onChange={e => setAmount(e.target.value)} 
                />
                <input 
                    type="date" 
                    value={date} 
                    onChange={e => setDate(e.target.value)} 
                />
                <select 
                    value={category} 
                    onChange={e => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat.name} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddExpense}>Send</button>
            </div>
            
            <Chart expenses={expenses} categories={categories} />

            <footer className="app-footer">
                <p>&copy; 2024 Budget Management App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
