import React from 'react'
import { DetailsContainer, DetailsWrapper } from '../../styles/AdminDashboardStyle/TransactionDetailsStyle'

const TransactionDetails = () => {
  return (
    <DetailsWrapper>
        <div className="details_header">
        Transaction Details 
        </div>
        <hr />
        {/* TimeStamp,
        Sender Email,
        Sender Phone Number, 
        Sender Full name
        Mobile Network Provider 
        Amount Sent 
        Amount To Receive  

        Transaction Status: 

        Transaction operator
        - Transaction approve by: Admin username
        - Time Approve  */}
        <DetailsContainer>
            <div className="detailsHeader"> </div>
            <div className="detail"> </div>

        </DetailsContainer>

    </DetailsWrapper>
  )
}

export default TransactionDetails