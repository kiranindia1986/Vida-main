import { addDays, subDays, subHours, subMinutes } from 'date-fns';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { useSettings } from 'src/hooks/use-settings';
import { OverviewBanner } from 'src/sections/dashboard/Home/OverviewBanner';

import { currentDate, getCurrentDateDirection } from '../../utils/date';
import { OverviewNotifications } from 'src/sections/dashboard/Home/OverviewNotifications';
import { OverviewMessages } from 'src/sections/dashboard/Home/OverviewMessages';

const now = new Date();

const Page = () => {
  const settings = useSettings();

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="center"
              >
                <Typography variant="h5">{currentDate}</Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
              >
                <Typography variant="h4">{getCurrentDateDirection()}, Kiran</Typography>
              </Stack>
            </Grid>

            <Grid xs={12}>
              <OverviewBanner />
            </Grid>

            <Grid
              xs={12}
              md={6}
            >
              <OverviewNotifications />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <OverviewMessages />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;
