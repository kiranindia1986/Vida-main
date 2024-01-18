import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Bell01Icon from '@untitled-ui/icons-react/build/esm/Bell01';

import SvgIcon from '@mui/material/SvgIcon';

import { CardContent, Grid, Typography } from '@mui/material';

export const OverviewNotifications = () => {
  const info = [
    {
      id: 1,
      icon: <Bell01Icon />,
      name: 'New Nofication from Company News',
      unread: true,
    },
    {
      id: 2,
      icon: <Bell01Icon />,
      name: 'New Nofication from Service update',
      unread: true,
    },
    {
      id: 3,
      icon: <Bell01Icon />,
      name: 'New Nofication from Company News',
      unread: true,
    },
    {
      id: 4,
      icon: <Bell01Icon />,
      name: 'New Nofication from Service update',
      unread: true,
    },
    {
      id: 5,
      icon: <Bell01Icon />,
      name: 'Old Nofication from Company News',
      unread: false,
    },
    {
      id: 6,
      icon: <Bell01Icon />,
      name: 'Old Nofication from Service update',
      unread: false,
    },
    {
      id: 7,
      icon: <Bell01Icon />,
      name: 'Old Nofication from Company News',
      unread: false,
    },
    {
      id: 8,
      icon: <Bell01Icon />,
      name: 'Old Nofication from Service update',
      unread: false,
    },
  ];
  return (
    <Card>
      <CardHeader title="Notifications" />
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
