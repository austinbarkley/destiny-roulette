import { rollRandomWeapon } from "./";

export const rollWeaponsForUser = (userName, weaponList) => {
  return {
    userName: userName,
    weapon: rollRandomWeapon(weaponList),
  };
};
