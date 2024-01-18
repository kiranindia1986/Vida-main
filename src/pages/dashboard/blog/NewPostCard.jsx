import { Button, Card, Typography } from '@mui/material';
import React from 'react';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';

export const NewPostCard = () => {
  return (
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
      <Button
        component={RouterLink}
        href={paths.dashboard.blog.postCreate}
        variant="contained"
      >
        New Post
      </Button>
    </Card>
  );
};
