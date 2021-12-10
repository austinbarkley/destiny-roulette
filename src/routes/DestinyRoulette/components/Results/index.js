import PropTypes from "prop-types";
import { DialogContent, DialogTitle, Grid, Typography } from "@mui/material";

import { Team } from "./components";

const Results = (props) => {
  const { gameModeSelected, teams } = props;

  return (
    <>
      <DialogTitle>Final Results</DialogTitle>
      <DialogContent>
        <Grid item container xs={12} spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3">{gameModeSelected}</Typography>
          </Grid>

          {teams.map((team, index) => {
            const teamNumber = index + 1;
            const teamName = `Team ${teamNumber}`;

            return (
              <Grid key={teamName} item container spacing={2} xs={12} md={6}>
                <Team team={team} teamName={teamName}></Team>
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
    </>
  );
};

Results.propTypes = {
  gameModeSelected: PropTypes.string.isRequired,
  numberOfTeams: PropTypes.number.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      teamMembers: PropTypes.arrayOf(
        PropTypes.shape({
          userName: PropTypes.string,
          weapon: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Results;
