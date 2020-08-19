import React, { useState, useEffect, useContext } from "react";
import {
  ToastContainer,
  ToastWrapper,
  ToastButton,
  ToastTitle,
  ToastContent,
  ProgressBar,
  ToastIcon,
} from "./Toast.styled";
import ToastFormContext from "../Contexts/ToastFormContext/ToastFormContext";

const Toast = () => {
  const { setToastList, toastList, toastPosition, toastDelay } = useContext(
    ToastFormContext
  );
  const [list, setList] = useState(toastList);
  const [timer, setTimer] = useState(0);
  const [focusedToast, setFocusedToast] = useState(null);
  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);
  useEffect(() => {
    const steps = setInterval(() => {
      setToastList(
        toastList.map((toast,i) => {
          if (toast.timer >= toastDelay) {
            deleteToast(i);
            return;
          } else if (toast.id !== focusedToast) {
            toast.timer = toast.timer + 1000;
            return toast;
          } else {
            return toast;
          }
        })
      );
      console.log("1sec");
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(steps);
    };
  }, [timer]);
  const deleteToast = (index) => {
    setToastList(index);
    setList([...list.filter((_, i) => i !== index)]);
  };
  const stopToastTime = (index) => {
    setFocusedToast(index);
    console.log("mouseenter", index);
  };
  const restartToastTimer = () => {
    setFocusedToast(null);
    console.log("mouseleave");
  };
  return (
    <ToastWrapper position={toastPosition}>
      {list.map((toast, i) => (
        <ToastContainer
          key={i}
          type={toast.type}
          position={toastPosition}
          onMouseEnter={() => stopToastTime(toast.id)}
          onMouseLeave={() => restartToastTimer()}
        >
          <ToastButton type={toast.type} onClick={() => deleteToast(i)}>
            X
          </ToastButton>
          <ToastIcon>
            <i className={toast.icon}></i>
          </ToastIcon>
          <div>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastContent>{toast.content}</ToastContent>
          </div>
          <ProgressBar
            type={toast.type}
            width={((toast.timer / 1000) * 100) / (toastDelay / 1000)}
          ></ProgressBar>
        </ToastContainer>
      ))}
    </ToastWrapper>
  );
};
export default Toast;
