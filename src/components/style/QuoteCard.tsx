import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const QuoteCard = ({content, author, link}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography component="div">
          {content}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={link}>Learn More</a></Button>
      </CardActions>
    </Card>
    );
};

export default QuoteCard;
