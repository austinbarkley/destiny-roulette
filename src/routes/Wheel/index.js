import "./Wheel.scss";

import React, { useState } from "react";
import { Button } from "@mui/material";
import { Wheel } from "react-custom-roulette";

import {
  colorList,
  primaries,
  secondaries,
  heavies,
  gameModes,
} from "../../constants";

const getRandomArrayIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

const formatOptions = (arrayOfOptions) => {
  return arrayOfOptions.map((option) => {
    const randomColor = getRandomArrayIndex(colorList);

    return {
      option: option,
      // style: { backgroundColor: colorList[randomColor] },
    };
  });
};

const exoticWeaponList = formatOptions(primaries.concat(secondaries, heavies));
const gameModesList = formatOptions(gameModes);

const spinDelay = 10 * 1000;

const RandomWheel = () => {
  const [isWeaponsSpinning, setIsWeaponsSpinning] = useState(false);
  const [isGameModesSpinning, setIsGameModesSpinning] = useState(false);

  const [exoticWeaponIndex, setExoticWeaponIndex] = useState(0);
  const [gameModesIndex, setGameModesIndex] = useState(0);

  const [showResults, setShowResults] = useState(0);

  const handleSpinClick = () => {
    const newExoticWeaponIndex = getRandomArrayIndex(exoticWeaponList);
    setExoticWeaponIndex(newExoticWeaponIndex);

    const newGameModeIndex = getRandomArrayIndex(gameModes);
    setGameModesIndex(newGameModeIndex);

    setShowResults(false);
    setIsGameModesSpinning(true);
  };

  const handleOnStopIsGameModesSpinning = () => {
    // stop current wheel
    setIsGameModesSpinning(false);

    // next action
    setIsWeaponsSpinning(true);
  };

  const handleOnStopWeaponsSpinning = () => {
    // stop current wheel
    setIsWeaponsSpinning(false);

    // start next wheel
    setShowResults(true);
  };

  return (
    <>
      <div className="wheel-group-container">
        <div className="wheel-container">
          <Wheel
            backgroundColors={colorList}
            radiusLineWidth={1}
            outerBorderWidth={1}
            fontSize={12}
            innerRadius={15}
            mustStartSpinning={isGameModesSpinning}
            prizeNumber={gameModesIndex}
            data={gameModesList}
            onStopSpinning={handleOnStopIsGameModesSpinning}
          />
        </div>
        <div className="wheel-container">
          <Wheel
            backgroundColors={colorList}
            radiusLineWidth={1}
            outerBorderWidth={1}
            fontSize={12}
            innerRadius={15}
            mustStartSpinning={isWeaponsSpinning}
            prizeNumber={exoticWeaponIndex}
            data={exoticWeaponList}
            onStopSpinning={handleOnStopWeaponsSpinning}
          />
        </div>
      </div>

      <Button onClick={handleSpinClick}>SPIN</Button>

      {showResults && (
        <p>
          We are playing {gameModesList[gameModesIndex].option} and using
          {exoticWeaponList[exoticWeaponIndex].option}
        </p>
      )}
    </>
  );
};

export default RandomWheel;
