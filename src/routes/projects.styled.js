import styled from "styled-components";
import _default from "../themes/default";

export const Container = styled.div`
  // background: #171636;
  //   background: linear-gradient(
  //     343.07deg,
  //     rgba(132, 59, 206, 0.06) 5.71%,
  //     rgba(132, 59, 206, 0) 64.83%
  //   );
  // background: linear-gradient(
  //   343.07deg,
  //   rgba(18, 18, 18, 1) 5.71%,
  //   // rgba(0, 170, 255, 0.125) 64.83%
  // );
  background: linear-gradient(#121212, #191919);
  // background: linear-gradient(#121212, #07293d);
  // background: linear-gradient(#121212, #041620);
  overflow: hidden;
  // height: 100%;
  height: 100%;
  // background: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => "white"};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  //   color: ${({ theme }) => theme.text_secondary};
  color: ${({ theme }) => "#white"};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  // border: 0.1px solid ${({ theme }) => theme.primary};
  // border: 0.1px solid ${({ theme }) => theme.text_secondary};
  // color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_secondary};
  border-bottom: 1px solid gray;
  // border-top: 1px solid gray;
  font-size: 16px;
  // border: 1px solid red;
  // border-radius: 6px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButtonLeft = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    // background: ${theme.primary + 50};
    // background: ${theme.text_secondary};
    // background: #71797e;
    border-radius: 6px 0px 0px 6px;
    color: ${theme.text_primary};
    // color: #202020
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 6px;
  }
`;

export const ToggleButtonMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  padding: 8px 18px;
  // border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    // background: ${theme.primary + 50};
    // background: ${theme.text_secondary};
    // background: #71797e;
    background: #00aaff;
    // border-radius: 5px;
    color: ${theme.text_primary};
    `}
  &:hover {
    // background: ${({ theme }) => theme.primary + 8};
    color: white;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 6px;
  }
`;

export const ToggleButtonRight = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    // background: ${theme.primary + 50};
    // background: ${theme.text_secondary};
    background: #71797e;
    border-radius: 0px 6px 6px 0px;
    color: ${theme.text_primary};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 6px;
  }
`;

export const Divider = styled.div`
  // width: 1.5px;
  // // background: ${({ theme }) => theme.primary};
  // background: ${({ theme }) => theme.text_secondary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // border: 1px solid red;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;
