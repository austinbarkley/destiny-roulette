import "./destiny-roulette.scss";

import { useState } from "react";
import { Button, Dialog, Grid, Typography } from "@mui/material";

import List from "./components/List";
import Spinning from "./components/Spinning";
import Results from "./components/Results";

import { rollWeaponsForUser } from "./helpers";
import {
  gameModes,
  exoticWeapons as defaultExoticWeapons,
  members as defaultMembers,
  rollTimeDuration,
  members,
} from "../../constants";

const DestinyRoulette = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isShowingResults, setIsShowingResults] = useState(false);

  const [exoticWeaponList] = useState(defaultExoticWeapons);
  const [memberList] = useState(defaultMembers);
  const [numberOfTeams] = useState(2);

  const [teams, setTeams] = useState([]);

  const getRandomTeamNumber = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createTeams = () => {
    const membersWithWeapons = members.map((userName) => {
      const memberWithWeapon = rollWeaponsForUser(userName, exoticWeaponList);

      return memberWithWeapon;
    });

    // TODO: make this dynamic
    let newTeams = [{ teamMembers: [] }, { teamMembers: [] }];

    membersWithWeapons.forEach((memberWithWeapon) => {
      const teamNumber = getRandomTeamNumber(0, numberOfTeams - 1);

      newTeams[teamNumber].teamMembers = [
        ...newTeams[teamNumber].teamMembers,
        memberWithWeapon,
      ];
    });

    setTeams(newTeams);
  };

  const onStartSpinningClick = () => {
    setIsSpinning(true);
    createTeams();

    setTimeout(() => {
      setIsSpinning(false);
      setIsShowingResults(true);
    }, rollTimeDuration);
  };

  const handleClose = () => {
    setIsSpinning(false);
    setIsShowingResults(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={isSpinning || isShowingResults}
        onClose={handleClose}
      >
        {isSpinning && <Spinning />}
        {isShowingResults && (
          <Results
            // TODO: fix this forced gameMode
            gameModeSelected="Vault of Glass"
            numberOfTeams={numberOfTeams}
            teams={teams}
          />
        )}
      </Dialog>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h1">Destiny Roulette</Typography>
          <Typography variant="subtitle1">
            Are you ready for a random, possibly challenging destiny experience.
          </Typography>
        </Grid>
        <Grid item container spacing={2} xs={12} direction="row">
          <Grid
            item
            container
            xs={12}
            md={4}
            direction="row"
            className="list-container"
          >
            <List items={gameModes} />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={4}
            direction="row"
            className="list-container"
          >
            <List items={exoticWeaponList} />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={4}
            direction="row"
            className="list-container"
          >
            <List items={memberList} />
          </Grid>
        </Grid>
        <Grid item container xs={12} md={4} justifyItems="center">
          <Button fullWidth variant="contained" onClick={onStartSpinningClick}>
            Spin The Wheel
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DestinyRoulette;
