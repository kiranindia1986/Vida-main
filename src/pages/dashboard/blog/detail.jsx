import { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { blogApi } from 'src/api/blog';
import { RouterLink } from 'src/components/router-link';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';

import { BlogPost } from './BlogPost';
import { NewPostCard } from './NewPostCard';

const usePost = () => {
  const isMounted = useMounted();
  const [post, setPost] = useState(null);

  const handlePostGet = useCallback(async () => {
    try {
      const response = await blogApi.getPosts();

      if (isMounted()) {
        setPost(response[0]);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      handlePostGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return post;
};

const Page = () => {
  const post = usePost();

  usePageView();

  if (!post) {
    return null;
  }

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
          <Typography variant="h4">Blog Details</Typography>

          <Divider sx={{ my: 3 }} />

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
        </Container>
      </Box>
    </>
  );
};

export default Page;
