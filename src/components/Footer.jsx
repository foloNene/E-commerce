import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
`;

const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgrey" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Nene.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, ut
          quae sed rerum, sit laboriosam nihil et quia vitae veniam corporis,
          quas quidem doloribus totam?
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <AiOutlineInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <AiOutlineTwitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <BsPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Term</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <GoLocation style={{ marginRight: "10px" }} />
          5, Amodu Street Ilaje, Bariga, Lagos.
        </ContactItem>
        <ContactItem>
          <AiOutlinePhone style={{ marginRight: "10px" }} />
          +2348026156Nene
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{ marginRight: "10px" }} />
          contact@Nene.gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
