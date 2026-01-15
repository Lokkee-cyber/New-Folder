import { Box, Container } from "@mui/material";
import Cards from "./../Components/layout/Cards.jsx";

export default function Shop() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#f0f8ff',
      background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)',
      py: { xs: 2, sm: 3, md: 4 },
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl">
        <Cards />
      </Container>
    </Box>
  );
}