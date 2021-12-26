import React from 'react';
import styled from "styled-components";

const Detail = () => {
    return (
        <Container>
           <Background>
               <img src="https://d23.com/app/uploads/2018/05/1180w-600h_052918_bao-short-info-from-pixar-day-780x440.jpg" alt="img"/>
           </Background>
            <ImageTitle>
                <img src={'/images/disney-logo-png.png'} alt="img"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={'/images/play-icon-black.png'} alt="play"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src={'/images/play-icon-white.png'} alt="play"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                   <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="img"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 - 7m - Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever
            </Description>

        </Container>
    );
};

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    
`
const ImageTitle = styled.div`
    height: 30vh;
  min-height: 170px;
  width: 35vh;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
    display: flex;
  align-items: center;
    
`
const PlayButton = styled.button`
    border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  
  &:hover {
    background: rgb(198, 198, 198);
  }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    width: 44px;
  margin-right: 16px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
    
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`
