import classes from "./Controler.module.css";
import CircularSlider from "@fseehawer/react-circular-slider";
import React, { useState } from "react";

function Controler() {
  const [currTemp, setCurrTemp] = useState(0);

  const increaseTempHandler = (e) => {
    if (currTemp >= 14) {
      return;
    } else {
      setCurrTemp((oldValue) => {
        const newValue = oldValue + 1;
        console.log(newValue);
        return newValue;
      });
    }
  };
  const decreaseTempHandler = (e) => {
    if (currTemp <= 0) {
      return;
    } else {
      setCurrTemp((oldValue) => {
        const newValue = oldValue - 1;
        console.log(newValue);
        return newValue;
      });
    }
  };

  const onChangeHandler = (value) => {
    switch (value) {
      case 16:
        setCurrTemp(0);
        break;
      case 17:
        setCurrTemp(1);
        break;
      case 18:
        setCurrTemp(2);
        break;
      case 19:
        setCurrTemp(3);
        break;
      case 20:
        setCurrTemp(4);
        break;
      case 21:
        setCurrTemp(5);
        break;
      case 22:
        setCurrTemp(6);
        break;
      case 23:
        setCurrTemp(7);
        break;
      case 24:
        setCurrTemp(8);
        break;
      case 25:
        setCurrTemp(9);
        break;
      case 26:
        setCurrTemp(10);
        break;
      case 27:
        setCurrTemp(11);
        break;
      case 28:
        setCurrTemp(12);
        break;
      case 29:
        setCurrTemp(13);
        break;
      case 30:
        setCurrTemp(14);
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.controler}>
      <CircularSlider
        min="16"
        max="30"
        hideKnob={true}
        label="Temperature"
        labelColor="white"
        appendToValue="°"
        progressSize="20"
        trackSize="20"
        progressColorFrom="#45A0EA"
        progressColorTo="#FF6E97"
        dataIndex={currTemp}
        data={[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]}
        onChange={(value) => onChangeHandler(value)}
      />

      <div className={classes.buttons}>
        <button className={classes.decreaseTemp} onClick={decreaseTempHandler}>
          - Decrease
        </button>
        <button className={classes.increaseTemp} onClick={increaseTempHandler}>
          + Increase
        </button>
      </div>
      <div className={classes.room}>Living Room</div>
    </div>
  );
}

export default Controler;
