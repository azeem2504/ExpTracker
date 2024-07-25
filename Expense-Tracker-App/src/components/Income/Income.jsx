import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import Form from '../Form/Form';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
  const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

  useEffect(() => {
    getIncomes()
  }, [])

  return (
    <IncomeStyle>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="total-income">Total Income: ${totalIncome()}</div>
        <div className="income-content">
          <div className="form-container">
              <Form/>

          </div>
          <div className="incomes">
              {incomes.map((income) => {
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
                    deleteItem={deleteIncome}
                />
              })}
          </div>
        </div>
                
      </InnerLayout>
    </IncomeStyle>
  )
}
const IncomeStyle = styled.div`
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


export default Income
