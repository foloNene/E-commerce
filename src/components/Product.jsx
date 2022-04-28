import React from "react";
import styled from "styled-components";
import { BsCart4, BsHeart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { popularProducts } from "../productData";

const WholeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-color: white;
  color: white;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <WholeContainer>
      {popularProducts.map((item) => {
        const { id, img } = item;
        return (
          <Container key={id}>
            <Circle />
            <Image src={img} alt="" />
            <Info>
              <Icon>
                <BsCart4 />
              </Icon>
              <Icon>
                <BiSearch />
              </Icon>
              <Icon>
                <BsHeart />
              </Icon>
            </Info>
          </Container>
        );
      })}
      {/* <Image src={item.img} /> */}
    </WholeContainer>
  );
};

export default Product;
