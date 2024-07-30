import React from 'react';
import { Box, Stack } from '@mui/material';

export default function Page() {
  const items = ["potato","cabbage","garlic","ginger","carrot"];

  return (
    <Box width="100vw" height="100vh">
      <Stack width="800px" height="600px" spacing={2} alignItems="center" justifyContent="center">
        {items.map((i) => (
          <Box key={i} 
          width="100vw" 
          height="100vh"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"f0f0f0"}
          >
            {
              i
            }
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
