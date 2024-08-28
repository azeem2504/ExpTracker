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
        <h2 className="total-income">Total Income: <span>₹ {totalIncome()}</span></h2>        
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
                    indicatorColor="var(--color-green)"
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
      .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2rem;
            font-weight: 600;
            color: var(--color-green);
        }
    }
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
