import React from "react";
import styled from "styled-components";
import { FaSlack } from "react-icons/fa";
import { darkContentColor, hoverEffect, contentColor } from "../utils";
function JoinSlack() {
  return (
    <Container>
        <ContentContainer>
            <Slack>
                <FaSlack />
            </Slack>
            <SlackText>
                Join slack channel
            </SlackText>
            <SlackJoin>Join Now</SlackJoin>
        </ContentContainer>
    </Container>
  );
}


const Container = styled.div`
 height: 115%;
 background: ${darkContentColor};
 margin-top: 2.4rem;
 border-radius: 1rem;
 width: 14rem;

 &:hover{
    box-shadow: ${hoverEffect};
 }

 @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Slack = styled.div`
 display: flex;
 justify-content: center;
 color: #eee;
 margin-top: .8rem;
 svg{
    height: 4.5rem;
    width: 4.7rem;
`;

const SlackText = styled.div`
 color: #eee;
`;

const SlackJoin = styled.div`
  background-color: ${contentColor};
  border: none;
  outline: none;
  margin-top: .8rem;
  padding: .7rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 1rem;
  }
`;


/*
 <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <SlackLogo>
            <FaSlack />
          </SlackLogo>
          <SlackText>
            <SlackHead>Engage with clients</SlackHead>
            <SlackFoot>Join slack channel</SlackFoot>
          </SlackText>
        </Slack>
        <SlackJoin>Join Now</SlackJoin>
      </CardContent>
    </JoinChannel>



const JoinChannel = styled.div`
  background-color: ${darkContentColor};
  height: 50%;
  margin-top: 6.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Slack = styled.div`
  display: flex;
`;

const SlackLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;

const SlackText = styled.div`
  color: white;
`;

const SlackHead = styled.h2`
  font-weight: 500;
`;
const SlackFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;
const SlackJoin = styled.button`
  background-color: ${contentColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
*/
export default JoinSlack;