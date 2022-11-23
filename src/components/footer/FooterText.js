import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import {
  HeartIcon

} from '../content/SponsorButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'absolute',
    bottom: theme.spacing(1),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const FooterText = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href='https://www.patreon.com/user?u=80763584'
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <HeartIcon />
      <Typography variant='body1'>
        <TextDecrypt text={' Sponsor'} />
      </Typography>
    </Link>
  );
};
