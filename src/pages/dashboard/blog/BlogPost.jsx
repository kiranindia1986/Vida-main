import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
import { getInitials } from 'src/utils/get-initials';
import { Button, Divider, SvgIcon, styled } from '@mui/material';

import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import { BlogSocialMedia } from './BlogSocialMedia';

export const BlogPost = (props) => {
  const {
    authorAvatar,
    authorName,
    category,
    cover,
    publishedAt,
    readTime,
    shortDescription,
    title,
    comments,
    isLiked,
    likes,
    ...other
  } = props;

  const formattedPublishedAt = format(publishedAt, 'MMM d, yyyy');

  return (
    <Card {...other}>
      <CardContent>
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Link
              color="text.primary"
              component={RouterLink}
              href={paths.dashboard.blog.postDetails}
              variant="h5"
            >
              {title}
            </Link>
          </Stack>

          <Button
            style={{ marginLeft: 'auto' }}
            align="right"
            color="inherit"
            endIcon={
              <SvgIcon>
                <Edit02Icon />
              </SvgIcon>
            }
            href={paths.dashboard.blog.postEdit}
            variant="button"
          >
            Edit
          </Button>
        </Stack>

        <Typography
          color="text.secondary"
          sx={{
            height: 48,
            mt: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
          variant="body1"
        >
          {shortDescription}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip label={category} />
        </Box>

        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Avatar src={authorAvatar}>{getInitials(authorName)}</Avatar>
            <Typography variant="subtitle2">
              By {authorName} • {formattedPublishedAt}
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: 3 }} />

        <BlogSocialMedia
          comments={comments}
          isLiked={isLiked}
          likes={likes}
        />
      </CardContent>
    </Card>
  );
};

BlogPost.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  publishedAt: PropTypes.number.isRequired,
  readTime: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
};
