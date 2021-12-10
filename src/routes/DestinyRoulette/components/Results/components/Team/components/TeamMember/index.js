import "./team-member.scss";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CasinoIcon from "@mui/icons-material/Casino";
import PropTypes from "prop-types";

import { colorList, exoticWeapons } from "../../../../../../../../constants";
import {
  getRandomArrayIndex,
  rollRandomWeapon,
} from "../../../../../../helpers";
import { useState } from "react";

const TeamMember = (props) => {
  const { member } = props;

  const [selectedWeapon, setSelectedWeapon] = useState(member.weapon);

  const backgroundColor = colorList[getRandomArrayIndex(colorList)];

  const rerollWeapon = () => {
    const newWeapon = rollRandomWeapon(exoticWeapons);

    setSelectedWeapon(newWeapon);
  };

  return (
    <li>
      <Box sx={{ width: 1 }} mb={1}>
        <Card raised style={{ backgroundColor: backgroundColor }}>
          <CardContent>
            <Grid item container justifyContent="space-between" xs={12}>
              <Grid item container alignItems="center" xs={12}>
                <Grid item xs={1}>
                  <Avatar sx={{ height: 20, width: 20 }}>
                    <PersonIcon fontSize="small" />
                  </Avatar>
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="body1">{member.userName}</Typography>
                </Grid>
              </Grid>

              <Grid item container alignItems="center" xs={12}>
                <Grid item xs={11}>
                  <Typography variant="body1">{selectedWeapon}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={rerollWeapon}>
                    <CasinoIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </li>
  );
};

TeamMember.propTypes = {
  member: PropTypes.shape({
    userName: PropTypes.string,
    weapon: PropTypes.string,
  }),
};

export default TeamMember;
