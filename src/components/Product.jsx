import React from "react";
import styled from "styled-components";
import { BsCart4, BsHeart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { popularProducts } from "../productData";

const WholeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
`;

const Circle = styled.div``;

const Image = styled.img`
  height: 75%;
`;

const Info = styled.div``;

const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <WholeContainer>
      <Circle />
      {popularProducts.map((item) => {
        const { id, img } = item;
        return (
          <Container key={id}>
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
