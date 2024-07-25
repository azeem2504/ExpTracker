import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import Form from '../Form/Form';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext()

  useEffect(() => {
    getExpenses()
  }, [])

  return (
    <ExpenseStyle>
      <InnerLayout>
        <h1>Expenses</h1>
        <div className="total-income">Total Expenses: ${totalExpense()}</div>
        <div className="income-content">
          <div className="form-container">
              <ExpenseForm/>

          </div>
          <div className="incomes">
              {expenses.map((income) => {
                const {_id, title, amount, date, category, description, type} = income;
                return <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    deleteItem={deleteExpense}
                />
              })}
          </div>
        </div>
                
      </InnerLayout>
    </ExpenseStyle>
  )
}
const ExpenseStyle = styled.div`
      display: flex;
      overflow: auto;
      .income-content{
        display: flex;
        overflow: hidden;
        gap: 2rem;
      }
      .incomes{
        flex: 1;
      }
`;


export default Expenses
