import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import Cards from "./../Components/layout/Cards.jsx";

export default function Shop() {
  return (
    <Box sx={{ bgcolor: '#f0f8ff',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)' }}>
        
        
        <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
            }}>
           
            <Cards />
        </Box>
    </Box>
  )
}