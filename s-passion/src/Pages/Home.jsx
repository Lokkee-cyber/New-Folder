import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ p: 2, bgcolor: '#f0f8ff',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)' }}>
      <Typography variant="h1"
       sx={{ mb: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#080808ff',
        mt: 10,
        color: '#141452ff',
        fontSize: { xs: '2.5rem', md: '3.5rem' },
      }}>
        Welcome to S-Passion 
      </Typography>


      <Typography variant="body1"
       sx={{
        fontSize: { xs: '1rem', md: '1.25rem' },
        color: '#141452ff',
        textAlign: 'center',
        maxWidth: 800,
        margin: '0 auto',
        mb: 4,
      }}>
        Join to explore the world of computers and coding where passion becomes innovation.
      </Typography>

      <Button 
        variant="contained" 
        component={Link}
        to="/shop"
        sx={{ mt: 4,
        bgcolor: '#141452ff',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        fontSize: { xs: '1rem', md: '1.25rem' },
        padding: { xs: '10px 20px', md: '15px 30px' },
        borderRadius: 5,
        textDecoration: 'none',
        '&:hover': {
                    bgcolor: '#7a7a7eff',
                    boxShadow: '0 4px 16px #1976d244',
                    color: '#0d0d0eff',
                  },
        }}>
        Get Started
      </Button>

        <Box 
          sx={{ mt: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        animation: "bounce 2s infinite",
        "@keyframes bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      }}
    >
      <KeyboardArrowDownIcon fontSize="large" />
      <KeyboardArrowDownIcon fontSize="large" />
    </Box>

        <Typography variant="body2" 
        sx={{ mt: 2,
        textAlign: 'center',
        color: '#666666ff'
        }}>
          Scroll down to explore more
        </Typography>

       
     <Grid container spacing={2} sx={{ mt: 4, textAlign: 'center', justifyContent: 'center' }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              About S-Passion
            </Typography>
            <Typography variant="body2" sx={{ color: '#666666ff', mb: 2 }}>
              Learn more about our mission to provide quality computer services, training, and products.
            </Typography>
            <Button 
              variant="outlined" 
              component={Link}
              to="/about"
              size="small"
              sx={{ textTransform: 'none', fontSize: '0.95rem' }}
            >
              View More...
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Academy Courses
            </Typography>
            <Typography variant="body2" sx={{ color: '#666666ff', mb: 2 }}>
              Professional computer training programs for all skills levels
                     from basic computer literacy to advanced technical certifications.
            </Typography>
            <Button 
              variant="outlined" 
              component={Link}
              to="/academy"
              size="small"
              sx={{ textTransform: 'none', fontSize: '0.95rem' }}
            >
              View Courses
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Computer Repair Services
            </Typography>
            <Typography variant="body2" sx={{ color: '#666666ff', mb: 2 }}>
              Fast, reliable computer repair services. Hardware diagnostics, 
                    software troubleshooting, and data recovery solutions.
            </Typography>
            <Button 
              variant="outlined" 
              component={Link}
              to="/contact"
              size="small"
              sx={{ textTransform: 'none', fontSize: '0.95rem' }}
            >
              Call Now
            </Button>
          </Box>
        </Grid>
         <Grid item xs={12} md={4}>
          <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Computer Shop
            </Typography>
            <Typography variant="body2" sx={{ color: '#666666ff', mb: 2 }}>
              Latest laptop, desktops, and accessories from top brands from year 2010 till date.
            </Typography>
            <Button 
              variant="outlined" 
              component={Link}
              to="/shop"
              size="small"
              sx={{ textTransform: 'none', fontSize: '0.95rem' }}
            >
              Visit Store
            </Button>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

