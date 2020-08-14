import styled,{ css } from "styled-components";
import { Types } from "../Toast/Toast.styled";

export const InputRadio = styled.input`
  display: none;
  -webkit-appearance: none;
  background-color: #282c34;
  border: 2px solid #fa2ce9;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 30px;
  :checked {
    background: #fa2ce9;
  }
  :checked + label {
    color: #fa2ce9;
  }
`;
export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  margin-left: 40px;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
export const Button = styled.input`
  border:none;
  width: 200px;
  height: 50px;
  font-size:20px;
  box-shadow: 0 0 10px #999;
  margin-left: 25px;
  margin-top: 30px;
  ${(props) =>
    props.toastType &&
    css`
      ${Types[props.toastType]}
    `}
`;
export const FormGroupRadio = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-around;
  padding: 30px 0;
  border: solid;
`;
export const FormNumber = styled.div`
  margin: 15px 60px;
`;
