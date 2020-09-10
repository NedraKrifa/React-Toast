import React from "react";
import ToastForm from "./Components/ToastForm/ToastForm";
import ToastFormProvider from "./Components/Contexts/ToastFormContext/ToastFormProvider";
import Toast from "./Components/Toast/Toast";
import { AppContainer } from "./App.styled";

const App = () => {
  return (
    <ToastFormProvider>
      <AppContainer>
        <h1>React Toast Component</h1>
        <ToastForm />
        <Toast />
      </AppContainer>
    </ToastFormProvider>
  );
};

export default App;
