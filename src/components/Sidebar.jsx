import React from 'react'
import styled from 'styled-components'
import { darkContentColor } from '../utils'
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { HiInboxIn } from "react-icons/hi";
import { MdWidgets } from "react-icons/md";
import Badges from './Badges'


const Sidebar = () => {
  return (
    <Container>
        <ProfileContainer>
            <img src='avatar-1.svg' />
            <Name>Dipayan Bose</Name>
            <Badges content="Pro Level" />
        </ProfileContainer>
        <LinksContainer>
          <Links>
            <Link>
              <RiHomeLine />
              <h3>Dashboard</h3>
            </Link>
            <Link>
              <RiFileCopyLine />
              <h3>Projects</h3>
            </Link>
            <Link>
              <FaWallet />
              <h3>Invoices</h3>
            </Link>
            <Link>
              <AiOutlinePieChart />
              <h3>Reports</h3>
            </Link>
            <Link>
              <HiInboxIn />
              <h3>Inbox</h3>
            </Link>
            <Link>
              <MdWidgets />
              <h3>Widgets</h3>
            </Link>
          </Links>
        </LinksContainer>
    </Container>
  )
}

const Container = styled.div`
 width: 20%;
 height: 100% !important;
 border-radius: 2rem;
 background-color: #1c3458;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 3rem;
 @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`

const ProfileContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;

img{
  border-radius: 6rem;
  margin-top:20%;
}
`

const Name = styled.div`
 font-size: 1.5rem;
 font-weight: 400;
 margin-top: .9rem;
 color: #eee;
`

const LinksContainer = styled.div`
 background-color: ${darkContentColor};
 height: 100%;
 width: 100%;
 border-radius: 2rem;
`

const Links = styled.ul`
 list-style-type: none;
 display: flex;
 flex-direction: column;
 padding-top: 2rem;
 height: 60%;
`

const Link = styled.li`
 margin-left: 25%;
 margin-bottom: 1.3rem;
 display: flex;
 gap: 1rem;
 color: #e4e4e4;
 cursor: pointer;

 h3{
  font-weight: 300;
 }
`


export default Sidebar