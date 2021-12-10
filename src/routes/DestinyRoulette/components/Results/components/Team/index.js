import React from "react";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import PropTypes from "prop-types";

import TeamMember from "./components/TeamMember";

export const Team = (props) => {
  const { team, teamName } = props;

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Card>
        <CardHeader title={teamName}></CardHeader>

        <CardContent>
          <ul style={{ paddingInlineStart: "0", listStyleType: "none" }}>
            {team.teamMembers.map((member, index) => {
              return <TeamMember key={`member-${index}`} member={member} />;
            })}
          </ul>
        </CardContent>
      </Card>
    </Box>
  );
};

Team.propTypes = {
  team: PropTypes.shape({
    teamMembers: PropTypes.arrayOf(
      PropTypes.shape({
        userName: PropTypes.string,
        weapon: PropTypes.string,
      })
    ),
  }),
  teamName: PropTypes.string,
};

export default Team;
