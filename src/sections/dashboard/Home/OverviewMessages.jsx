import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Mail0IconRead from 'src/icons/untitled-ui/duocolor/mail-03';
import Mail03IconNew from 'src/icons/untitled-ui/duocolor/mail-04';

import SvgIcon from '@mui/material/SvgIcon';

import { CardContent, Grid, Typography } from '@mui/material';

export const OverviewMessages = () => {
  const info = [
    {
      id: 1,
      icon: <Mail03IconNew />,
      name: 'New Nofication from Company News',
      unread: true,
    },
    {
      id: 2,
      icon: <Mail03IconNew />,
      name: 'New Nofication from Service update',
      unread: true,
    },
    {
      id: 3,
      icon: <Mail03IconNew />,
      name: 'New Nofication from Company News',
      unread: true,
    },
    {
      id: 4,
      icon: <Mail03IconNew />,
      name: 'New Nofication from Service update',
      unread: true,
    },
    {
      id: 5,
      icon: <Mail0IconRead />,
      name: 'Old Nofication from Company News',
      unread: false,
    },
    {
      id: 6,
      icon: <Mail0IconRead />,
      name: 'Old Nofication from Service update',
      unread: false,
    },
    {
      id: 7,
      icon: <Mail0IconRead />,
      name: 'Old Nofication from Company News',
      unread: false,
    },
    {
      id: 8,
      icon: <Mail0IconRead />,
      name: 'Old Nofication from Service update',
      unread: false,
    },
  ];
  return (
    <Card>
      <CardHeader title="Messages" />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={2}
        >
          {info.map((item, key) => {
            return (
              <Grid
                item
                xs={12}
                md={12}
                key={key}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="inherit">
                    <SvgIcon
                      fontSize="medium"
                      sx={{
                        color: 'neutral[800]',
                        '& path': {
                          fill: (theme) =>
                            item.unread ? theme.palette.neutral[800] : theme.palette.neutral[100],
                          fillOpacity: 2,
                        },
                      }}
                      color="action"
                    >
                      {item.icon}
                    </SvgIcon>
                  </IconButton>
                  <Typography variant={item.unread ? 'subtitle1' : 'body2'}>{item.name}</Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};
