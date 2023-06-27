import React, { useContext, useState } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PostCard from '@/components/PostCard'
import Pagination from '@/components/Pagination'
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '@/contexts/AuthContext'
import { PAGE_COUNT, POST_API_ENDPOINT } from '@/config/variants'
import useApi from '@/hooks/ApiHooks'
import { IPost } from '@/types'

const Post: React.FC = () => {
  const [data, loading, error] = useApi<IPost>(POST_API_ENDPOINT);

  const { name } = useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastPost = currentPage * PAGE_COUNT
  const indexOfFirstPost = indexOfLastPost - PAGE_COUNT
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading || error) {
    return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={40}
      >
        {loading && <CircularProgress />}
        {error &&
          <Typography
            variant="h3"
            component="h4"
            color="error"
          >
            Error: {error.message}
          </Typography>}
      </Box>
  }

  return (
    <>
      <Typography variant="h3" mt={2} mb={2}>Welcome, {name}!</Typography>

      <Grid container spacing={3}>
        {currentPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <PostCard data={post} />
          </Grid>
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
      >
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / PAGE_COUNT)}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  )
}

export default Post
