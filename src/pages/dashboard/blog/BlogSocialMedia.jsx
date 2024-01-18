import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import AnnotationIcon from '@untitled-ui/icons-react/build/esm/Annotation';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { BlogComments } from './BlogComments';
import { BlogAddNewComments } from './BlogAddNewComments';
import { Grid } from '@mui/material';

export const BlogSocialMedia = (props) => {
  const { comments, isLiked: isLikedProp, likes: likesProp } = props;
  const [isLiked, setIsLiked] = useState(isLikedProp);
  const [likes, setLikes] = useState(likesProp);

  const handleLike = useCallback(() => {
    setIsLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  }, []);

  const handleUnlike = useCallback(() => {
    setIsLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={2}
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <div>
              <Stack
                alignItems="center"
                direction="row"
              >
                {isLiked ? (
                  <Tooltip title="Unlike">
                    <IconButton onClick={handleUnlike}>
                      <SvgIcon
                        sx={{
                          color: 'error.main',
                          '& path': {
                            fill: (theme) => theme.palette.error.main,
                            fillOpacity: 1,
                          },
                        }}
                      >
                        <HeartIcon />
                      </SvgIcon>
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Like">
                    <IconButton onClick={handleLike}>
                      <SvgIcon>
                        <HeartIcon />
                      </SvgIcon>
                    </IconButton>
                  </Tooltip>
                )}
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                >
                  {likes}
                </Typography>

                <Tooltip title="Comments">
                  <IconButton>
                    <SvgIcon>
                      <AnnotationIcon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                >
                  {comments.length}
                </Typography>
              </Stack>
            </div>
          </Stack>
        </Grid>
        <Grid
          item
          xs={10}
        >
          <BlogAddNewComments />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />
      <Stack
        spacing={3}
        alignItems="flex-end"
      >
        {comments.map((comment) => {
          return (
            <BlogComments
              authorAvatar={comment.author.avatar}
              authorName={comment.author.name}
              createdAt={comment.createdAt}
              key={comment.id}
              message={comment.message}
            />
          );
        })}
      </Stack>
      <Divider sx={{ my: 3 }} />
    </>
  );
};

BlogSocialMedia.propTypes = {
  authorAvatar: PropTypes.string,
  authorName: PropTypes.string,
  comments: PropTypes.array,
  createdAt: PropTypes.number,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  media: PropTypes.string,
  message: PropTypes.string,
};
