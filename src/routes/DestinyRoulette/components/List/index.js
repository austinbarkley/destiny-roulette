import "./list.scss";

import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

const List = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((mode, index) => {
        return (
          <Grid item key={index} xs={12}>
            <Typography variant="body1">{mode}</Typography>
          </Grid>
        );
      })}
    </>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default List;
