import React from 'react';
import styled from "styled-components";

const Movies = () => {
    return (
        <Container>
            <h4>Recommended for You </h4>
            <Content>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_2908d1d1.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_b391e803.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_f5b81842.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_671adb01.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_f4103eaa.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_ff90c14f.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>
                <Wrap>
                    <img src={'https://lumiere-a.akamaihd.net/v1/images/image_517212da.jpeg?region=0,0,540,810&width=320'} alt="img"/>
                </Wrap>

            </Content>
        </Container>
    );
};

export default Movies;
const Container = styled.div`
    
`
const Content = styled.div`
    display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
    
`
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  &:hover {
    
    border: 3px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
  }
    
`
