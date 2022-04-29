import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  heght: 40px;
  background-colour: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter </Title>
      <Description>
        stay trending!!! Get the latest update from the fashion world..
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <AiOutlineSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
