import { getRandomArrayIndex } from "./";

export const rollRandomWeapon = (weaponList) => {
  const selectedWeaponIndex = getRandomArrayIndex(weaponList);

  return weaponList[selectedWeaponIndex];
};
