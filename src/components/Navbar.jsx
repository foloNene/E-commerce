import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Container = styled.div`
  height: 60px;
  @media only screen and ();
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bolder;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

// const ShoppingCart = styled.div`
// font-size: 20px;

// `

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input />
            <BsSearch style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Nene</Logo>
        </Center>
        <Right>
          <MenuItem> REGISTER </MenuItem>
          <MenuItem> SIGN IN </MenuItem>
          <MenuItem>
            {" "}
            <AiOutlineShoppingCart />{" "}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
