import React, { Component } from "react";
import ToastFormContext from "./ToastFormContext";
import { toastTypes } from "../../Utils/toastTypes"

class ToastFormProvider extends Component {
  state = {
    toastList: [],
    toastPosition: "",
    toastType: "",
    toastDelay: 5000,
  };
  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  showToast = (e) => {
    e.preventDefault();
    const {toastList,toastType}=this.state;
    this.setState({
      toastList: [...toastList,toastTypes[toastType]],
    });
  };
  clearAllToast = (e) => {
    e.preventDefault();
    this.setState({
      toastList: [],
    });
  };
  setToastList=(index)=>{
    const {toastList}=this.state;
    this.setState({
      toastList: [...toastList.filter((_,i) => i !== index)],
    })
  }

  render() {
    return (
      <ToastFormContext.Provider
        value={{
          toastList: this.state.toastList,
          toastPosition: this.state.toastPosition,
          toastType: this.state.toastType,
          toastDelay: this.state.toastDelay,
          handleFormChange: this.handleFormChange,
          showToast: this.showToast,
          clearAllToast: this.clearAllToast,
          setToastList: this.setToastList,
        }}
      >
        {this.props.children}
      </ToastFormContext.Provider>
    );
  }
}

export default ToastFormProvider;
