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
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(0);
        setProgress(progress + 10);
      }
    }, toastDelay);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, toastDelay, list]);
  const deleteToast = (index) => {
    setToastList(index);
    setList([...list.filter((_, i) => i !== index)]);
  };
  const stopToastTime = () => {
    console.log("mouseenter");
  };
  const restartToastTimer = () => {
    console.log("mouseleave");
  };
  return (
    <ToastWrapper position={toastPosition}>
      {list.map((toast, i) => (
        <ToastContainer
          key={i}
          type={toast.type}
          position={toastPosition}
          onMouseEnter={() => stopToastTime()}
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
          <ProgressBar type={toast.type} width={progress}></ProgressBar>
        </ToastContainer>
      ))}
    </ToastWrapper>
  );
};
export default Toast;
