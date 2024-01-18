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
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';

import SvgIcon from '@mui/material/SvgIcon';

import { CardContent, Grid, Typography } from '@mui/material';

export const OverviewBanner = () => {
  const info = [
    {
      id: 1,
      icon: <Star01Icon />,
      name: 'Company News',
      unread: 2,
    },
    {
      id: 2,
      icon: <Star01Icon />,
      name: 'Service Updates',
      unread: 0,
    },
    {
      id: 3,
      icon: <Star01Icon />,
      name: 'Extra Shifts',
      unread: 0,
    },
    {
      id: 4,
      icon: <Star01Icon />,
      name: 'Company News',
      unread: 2,
    },
    {
      id: 5,
      icon: <Star01Icon />,
      name: 'Service Updates',
      unread: 0,
    },
    {
      id: 6,
      icon: <Star01Icon />,
      name: 'Extra Shifts',
      unread: 0,
    },
    {
      id: 7,
      icon: <Star01Icon />,
      name: 'Company News',
      unread: 2,
    },
    {
      id: 8,
      icon: <Star01Icon />,
      name: 'Service Updates',
      unread: 0,
    },
    {
      id: 9,
      icon: <Star01Icon />,
      name: 'Extra Shifts',
      unread: 0,
    },
    {
      id: 10,
      icon: <Star01Icon />,
      name: 'Company News',
      unread: 2,
    },
    {
      id: 11,
      icon: <Star01Icon />,
      name: 'Service Updates',
      unread: 0,
    },
    {
      id: 12,
      icon: <Star01Icon />,
      name: 'Extra Shifts',
      unread: 0,
    },
  ];
  return (
    <Card>
      <CardHeader
        title="Teams"
        action={
          <IconButton color="inherit">
            <SvgIcon fontSize="small">
              <PlusIcon />
            </SvgIcon>
          </IconButton>
        }
      />
      <Divider />
      {/* <CardActions>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
        >
          Go to chat
        </Button>
      </CardActions> */}
      <CardContent>
        <Grid
          container
          spacing={2}
        >
          {info.map((item, key) => {
            return (
              <Grid
                item
                xs={6}
                md={3}
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
                  <Typography variant={item.unread ? 'subtitle1' : 'body2'}>
                    {item.name} {item.unread !== 0 ? `(${item.unread})` : null}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};
