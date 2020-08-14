import styled, { keyframes, css } from "styled-components";

const toastInRight = keyframes`
from {
    transform: translateX(100%);
    
  }
  to {
    transform: translateX(0);
  }
`;
const toastInLeft = keyframes`
from {
    transform: translateX(-100%);
    
  }
  to {
    transform: translateX(0);
  }
`;
const toastInCenterTop = keyframes`
from {
    transform: translateY(-100%);
    
  }
  to {
    transform: translateY(0);
  }
`;
const toastInCenterBottom = keyframes`
from {
    transform: translateY(100%);
    
  }
  to {
    transform: translateY(0);
  }
`;

const placements = {
  "top-left": css`
    top: 16px;
    left: 16px;
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  `,
  "top-center": css`
    top: 16px;
    left: 40%;
    transition: transform 6s ease-in-out;
    animation: ${toastInCenterTop} 0.7s;
  `,
  "top-right": css`
    top: 16px;
    right: 16px;
    transition: transform 6s ease-in-out;
    animation: ${toastInRight} 0.7s;
  `,
  "bottom-left": css`
    bottom: 16px;
    left: 16px;
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  `,
  "bottom-center": css`
    bottom: 16px;
    left: 40%;
    transition: transform 6s ease-in-out;
    animation: ${toastInCenterBottom} 0.7s;
  `,
  "bottom-right": css`
    bottom: 16px;
    right: 16px;
    transition: transform 0.6s ease-in-out;
    animation: ${toastInRight} 0.7s;
  `,
};
export const Types = {
  default: css`
    background: white;
    color: black;
  `,
  dark: css`
    background: black;
    color: white;
  `,
  success: css`
    background: #5cb85c;
    color: white;
  `,
  error: css`
    background: #d9534f;
    color: white;
  `,
  info: css`
    background: #5bc0de;
    color: white;
  `,
  warning: css`
    background: #f0ad4e;
    color: white;
  `,
};
const progressBackground = {
  default: css`
    background: linear-gradient(
      124deg,
      #ff2400,
      #e81d1d,
      #e8b71d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3,
      #dd00f3
    );
  `,
  dark: css`
    background: purple;
  `,
  success: css`
    background: green;
  `,
  error: css`
    background: red;
  `,
  info: css`
    background: blue;
  `,
  warning: css`
    background: orangered;
  `,
};

export const ToastWrapper = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  ${(props) =>
    props.position &&
    css`
      ${placements[props.position]}
    `}
`;
export const ToastContainer = styled.div`
  ${(props) =>
    props.type &&
    css`
      ${Types[props.type]}
    `}
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  width: 300px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  ${(props) =>
    props.position &&
    css`
      ${placements[props.position]}
    `}
  :hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
export const ToastButton = styled.button`
  position: relative;
  right: -0.3em;
  top: -0.3em;
  float: right;
  font-weight: 700;
  color: ${(props) => (props.type === "default" ? "#000" : "#fff")};
  outline: none;
  border: none;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.8;
  line-height: 1;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
`;
export const ToastTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;
export const ToastContent = styled.p`
  margin: 0;
  text-align: left;
  height: 18px;
  margin-left: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5%;
  width: ${(props) => props.width + "%"};
  ${(props) =>
    props.type &&
    css`
      ${progressBackground[props.type]}
    `}
`;
export const ToastIcon = styled.div`
  float: left;
  margin-right: 15px;
  font-size: 30px;
`;
