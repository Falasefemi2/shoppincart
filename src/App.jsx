import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransactionList from './components/AddTransactionList'



const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
    <TransactionList />
    <AddTransactionList />
      </div>
    </div>
  )
}

export default App