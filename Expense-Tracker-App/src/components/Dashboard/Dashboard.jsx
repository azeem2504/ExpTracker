import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import { dollar } from '../../utils/Icons';

function Dashboard() {
  const {totalIncome, totalExpense, totalBalance} = useGlobalContext()
  return (
    <DashboardStyle>
      <InnerLayout>
        <h1>Dashboard</h1>
        <div className="amount-con">

          <div className="income">
            <h2>Total Income</h2>
            <p>
              {dollar} {totalIncome()}
            </p>
          </div>  
          <div className="expense">
            <h2>Total Expense</h2>
            <p>
              {dollar} {totalExpense()}
            </p>
          </div>
          <div className="balance">
               <h2>Total Balance</h2>
               <p>
                    {dollar} {totalBalance()}
                </p>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyle>
  )
}
const DashboardStyle = styled.div`
      .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }
              }
`;

export default Dashboard
