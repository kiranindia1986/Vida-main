import { useCallback, useEffect, useState } from 'react';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { blogApi } from 'src/api/blog';
import { RouterLink } from 'src/components/router-link';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import { BlogFilterDropdown } from './BlogFilterDropdown';
import { BlogPost } from './BlogPost';
import { NewPostCard } from './NewPostCard';

const useBlogSearch = () => {
  const [state, setState] = useState({
    filters: {
      name: undefined,
      category: [],
      status: [],
      inStock: undefined,
    },
    page: 0,
    rowsPerPage: 5,
  });

  const handleFiltersChange = useCallback((filters) => {
    setState((prevState) => ({
      ...prevState,
      filters,
    }));
  }, []);

  const handlePageChange = useCallback((event, page) => {
    setState((prevState) => ({
      ...prevState,
      page,
    }));
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setState((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10),
    }));
  }, []);

  return {
    handleFiltersChange,
    handlePageChange,
    handleRowsPerPageChange,
    state,
  };
};

const usePosts = () => {
  const isMounted = useMounted();
  const [posts, setPosts] = useState([]);

  const handlePostsGet = useCallback(async () => {
    try {
      const response = await blogApi.getPosts();
      if (isMounted()) {
        setPosts(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    handlePostsGet();
  }, []);

  return posts;
};

const Page = () => {
  const productsSearch = useBlogSearch();
  const posts = usePosts();

  usePageView();

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth="xl">
          <NewPostCard />
          <Typography variant="h4">Recent Blogs</Typography>
          {/* <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
            variant="body1"
          >
            Discover the latest news, tips and user research insights from Acme.
          </Typography>
          <Typography
            color="text.secondary"
            variant="body1"
          >
            You will learn about web infrastructure, design systems and devops APIs best practices.
          </Typography> */}
          <BlogFilterDropdown onFiltersChange={productsSearch.handleFiltersChange} />

          <Divider sx={{ mb: 1 }} />

          <Grid
            container
            spacing={4}
          >
            {posts?.map((post) => (
              <Grid
                key={post.title}
                xs={12}
              >
                <BlogPost
                  authorAvatar={post.author.avatar}
                  authorName={post.author.name}
                  category={post.category}
                  cover={post.cover}
                  publishedAt={post.publishedAt}
                  readTime={post.readTime}
                  shortDescription={post.shortDescription}
                  title={post.title}
                  comments={post.comments}
                  isLiked={post.isLiked}
                  likes={post.likes}
                  sx={{ height: '100%' }}
                />
              </Grid>
            ))}
          </Grid>

          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{
              mt: 4,
              mb: 8,
            }}
          >
            <Button
              disabled
              startIcon={
                <SvgIcon>
                  <ArrowLeftIcon />
                </SvgIcon>
              }
            >
              Newer
            </Button>
            <Button
              endIcon={
                <SvgIcon>
                  <ArrowRightIcon />
                </SvgIcon>
              }
            >
              Older posts
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
