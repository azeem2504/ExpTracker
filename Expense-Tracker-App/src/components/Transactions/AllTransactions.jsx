import React from 'react'
import styled from 'styled-components'

function AllTransactions() {
  return (
    <AllTransactionsStyle>
      <h2>All Transactions</h2>
    </AllTransactionsStyle>
  )
}
const AllTransactionsStyle = styled.div`
    h2{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default AllTransactions
