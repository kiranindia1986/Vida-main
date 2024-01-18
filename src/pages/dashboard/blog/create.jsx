import { useCallback, useMemo, useState } from 'react';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { BreadcrumbsSeparator } from 'src/components/breadcrumbs-separator';
import { FileDropzone } from 'src/components/file-dropzone';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import { fileToBase64 } from 'src/utils/file-to-base64';
import Editor from './../../../components/quill-editor';
import { MultiSelect } from 'src/components/multi-select';

const initialCover = '/assets/covers/abstract-1-4x3-large.png';

const categoryOptions = [
  {
    label: 'Company News',
    value: 'companynews',
  },
  {
    label: 'Service Updates',
    value: 'serviceupdated',
  },
  {
    label: 'Extra Shifts',
    value: 'extrashifts',
  },
  {
    label: 'Leave Requests',
    value: 'leaverequests',
  },
  {
    label: 'General messages',
    value: 'generalmessages',
  },
];

const Page = () => {
  const [cover, setCover] = useState(initialCover);
  const [chips, setChips] = useState([]);

  usePageView();

  const handleCoverDrop = useCallback(async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  }, []);

  const handleCategoryChange = useCallback((values) => {
    setChips((prevChips) => {
      const valuesFound = [];

      // First cleanup the previous chips
      const newChips = prevChips.filter((chip) => {
        if (chip.field !== 'category') {
          return true;
        }

        const found = values.includes(chip.value);

        if (found) {
          valuesFound.push(chip.value);
        }

        return found;
      });

      // Nothing changed
      if (values.length === valuesFound.length) {
        return newChips;
      }

      values.forEach((value) => {
        if (!valuesFound.includes(value)) {
          const option = categoryOptions.find((option) => option.value === value);

          newChips.push({
            label: 'Category',
            field: 'category',
            value,
            displayValue: option.label,
          });
        }
      });

      return newChips;
    });
  }, []);

  const categoryValues = useMemo(
    () => chips.filter((chip) => chip.field === 'category').map((chip) => chip.value),
    [chips]
  );

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Typography variant="h3">Create a new post</Typography>
            <Breadcrumbs separator={<BreadcrumbsSeparator />}>
              <Link
                color="text.primary"
                component={RouterLink}
                href={paths.dashboard.index}
                variant="subtitle2"
              >
                Dashboard
              </Link>
              <Link
                color="text.primary"
                component={RouterLink}
                href={paths.dashboard.blog.index}
                variant="subtitle2"
              >
                Blog
              </Link>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Create
              </Typography>
            </Breadcrumbs>
          </Stack>
          <Card
            elevation={16}
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              mb: 8,
              mt: 6,
              px: 3,
              py: 2,
            }}
          >
            <Typography variant="subtitle1">Hello, Kiran</Typography>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Button
                color="inherit"
                component={RouterLink}
                href={paths.dashboard.blog.index}
              >
                Cancel
              </Button>
              <Button
                component={RouterLink}
                href={paths.dashboard.blog.postDetails}
                variant="contained"
              >
                Publish changes
              </Button>
            </Stack>
          </Card>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={4}
                  >
                    <Typography variant="h6">Basic details</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    md={8}
                  >
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Post title"
                        name="title"
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ height: '500px' }}>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={4}
                  >
                    <Typography variant="h6">Content</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    md={8}
                  >
                    {/* <QuillEditor
                      placeholder="Write something"
                      sx={{ height: 330 }}
                    /> */}
                    <Editor />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={4}
                  >
                    <Typography variant="h6">Other Details</Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    lg={8}
                  >
                    <Stack spacing={3}>
                      <MultiSelect
                        label="Select Category"
                        onChange={handleCategoryChange}
                        options={categoryOptions}
                        value={categoryValues}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Stack>
          <Box
            sx={{
              display: {
                sm: 'none',
              },
              mt: 2,
            }}
          >
            <Button
              component={RouterLink}
              href={paths.dashboard.blog.postDetails}
              variant="contained"
            >
              Publish changes
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Page;
