import { useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material';
import {SideBar} from '../components';

const Feed = () => {
  const currentDate = new Date();

  return (
    <Stack
      sx={{flexDirection: {sx:"column", md: "row"}}}
    >
      <Box
        sx={{height:{sx:'auto', md:'92vh'}, borderRight:'apx solid #3d3d3d', px: {sx: 0, md: 2}}}
      >
        <SideBar/>
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          {`Copyright ${currentDate.getFullYear()} Prooheckcp`}
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed