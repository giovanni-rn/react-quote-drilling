import * as React from "react";
import Badge from "@mui/material/Badge";
import FavoriteIcon from '@mui/icons-material/Favorite';

const SimpleBadge = ({ favQuotes }) => {
  return (
    <Badge badgeContent={favQuotes.length} color="primary">
      <FavoriteIcon color="action" />
    </Badge>
  );
};

export default SimpleBadge;
