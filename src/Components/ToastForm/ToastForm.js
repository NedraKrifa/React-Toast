import React from "react";
import ToastFormContext from "../Contexts/ToastFormContext/ToastFormContext";
import {
  Input,
  InputRadio,
  Button,
  FormGroupRadio,
  FormNumber,
} from "./toastForm.styled";
export default function ToastForm() {
  return (
    <ToastFormContext.Consumer>
      {({
        toastPosition,
        toastDelay,
        toastType,
        handleFormChange,
        showToast,
        clearAllToast,
      }) => (
        <form>
          <FormGroupRadio>
            <div>
              <label>Position</label>
              <div>
                {[
                  "top-left",
                  "top-right",
                  "top-center",
                  "bottom-left",
                  "bottom-right",
                  "bottom-center",
                ].map((position) => (
                  <div>
                    <InputRadio
                      type="radio"
                      name="toastPosition"
                      checked={toastPosition === position}
                      value={position}
                      onChange={(e) => handleFormChange(e)}
                    />
                    <label>{position}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label>Type</label>
              <div>
                {["info", "success", "warning", "error", "default", "dark"].map(
                  (type) => (
                    <div>
                      <InputRadio
                        type="radio"
                        name="toastType"
                        checked={toastType === type}
                        value={type}
                        onChange={(e) => handleFormChange(e)}
                      />
                      <label>{type}</label>
                    </div>
                  )
                )}
              </div>
            </div>
          </FormGroupRadio>
          <FormNumber>
            <label>Delay(ms)</label>
            <Input
              type="number"
              name="toastDelay"
              value={toastDelay}
              placeholder="Your Toast delay"
              min="0"
              onChange={(e) => handleFormChange(e)}
            />
          </FormNumber>
          <Button
            type="submit"
            value="Show Toast"
            toastType={toastType}
            onClick={(e) => showToast(e)}
          />
          <Button
            type="submit"
            value="Clear All"
            onClick={(e) => clearAllToast(e)}
          />
        </form>
      )}
    </ToastFormContext.Consumer>
  );
}
