import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
function Navbar() {
  return (
    <NavbarContainer>
      <Text>
        Heyy,
        <span> Welcome to the site </span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for projects" />
      </InputContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h1`
  color: black;
  span {
    font-weight: 300;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default Navbar;














/*import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';


const Navbar = () => {
  return (
    <NavbarContainer>
        <Text>
            Heyy,
            <span> welcome to the site </span>
        </Text>
        <InputContainer>
          <Icon>
            <FiSearch />
          </Icon>
          <Input type="text" placeholder="Search" />
        </InputContainer>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 10%;
`

const Text = styled.h1`
 span{
    font-weight: 500;
    color: #666;
 }
`

const InputContainer = styled.div`
 display: flex;
`

const Icon = styled.div`
 height: 3rem;
 width: 3rem;
 background-color: #dce4ff;
 display: flex;
 justify-content: center;
 align-items: center;

`

const Input = styled.div`

`

export default Navbar */