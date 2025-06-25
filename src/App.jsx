import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Cash");

  const handleAddExpense = () => {
    if (!description || !amount) {
      alert("Please enter a valid description and amount.");
      return;
    }
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleString(),
    };
    setExpenses([newExpense, ...expenses]);
    setDescription("");
    setAmount("");
    setType("Cash");
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '900px',
      margin: '50px auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333'
      }}>Expense Tracker</h1>

      <div style={{
        marginBottom: '20px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '16px'
          }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '16px'
          }}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '16px'
          }}
        >
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>
        <button
          onClick={handleAddExpense}
          style={{
            padding: '12px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            width: '100%',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Add Expense
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {expenses.map((expense) => (
          <div key={expense.id} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              margin: '0 0 10px',
              fontWeight: 'bold',
              fontSize: '18px',
              color: '#333'
            }}>{expense.description}</h2>
            <p style={{ margin: '0 0 5px', color: '#555' }}>Amount: ₹{expense.amount}</p>
            <p style={{ margin: '0 0 5px', color: '#555' }}>Type: {expense.type}</p>
            <p style={{ margin: '0 0 10px', color: '#555' }}>Date: {expense.date}</p>
            <button
              onClick={() => handleDeleteExpense(expense.id)}
              style={{
                padding: '8px 12px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseTracker;
