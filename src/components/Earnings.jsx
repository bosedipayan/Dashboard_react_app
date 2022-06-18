import React from 'react'
import styled from 'styled-components'
import { contentColor, hoverEffect } from '../utils';
import { IoPieChartSharp } from 'react-icons/io5';


const Earnings = () => {
  return (
    <EarningsCard>
        <CardContent>
            <Chart>
                <IoPieChartSharp />
            </Chart>
            <EarningsText>Earnings Chart</EarningsText>
            <EarningsIncrease>+70% since last month</EarningsIncrease>
        </CardContent>
    </EarningsCard>
  )
}

const EarningsCard = styled.div`
 height: 100%;
 width: 14rem;
 background-color: ${contentColor};
 padding: 1rem;
 border-radius: 1rem;
 color: white;
 transition: 0.4s ease-in-out;

 &:hover{
    box-shadow: ${hoverEffect};
 }

 @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`

const CardContent = styled.div`
 margin: 1rem;
`

const Chart = styled.div`
 display: flex;
 justify-content: center;
 svg{
    height: 5.5rem;
    width: 6rem;
 }
`

const EarningsText = styled.h3`
 text-align: center;
 font-weight: normal;
 padding: 0.4rem 0;
`

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`


export default Earnings