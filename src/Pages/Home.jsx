import { Box, Button, Grid, Typography, Container } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: 'About S-Passion',
      description: 'Learn more about our mission to provide quality computer services, training, and products.',
      link: '/about'
    },
    {
      title: 'Academy Courses',
      description: 'Professional computer training programs for all skills levels from basic literacy to advanced certifications.',
      link: '/academy'
    },
    {
      title: 'Repair Services',
      description: 'Fast, reliable computer repair services. Hardware diagnostics, software troubleshooting, and data recovery.',
      link: '/contact'
    },
    {
      title: 'Computer Shop',
      description: 'Latest laptops, desktops, and accessories from top brands with competitive pricing.',
      link: '/shop'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#f0f8ff',
      background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 5, md: 8 } }}>
        {/* Hero Section */}
        <Typography variant="h1"
          sx={{ 
            mb: 2,
            fontWeight: 'bold',
            color: '#141452ff',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
            textAlign: 'center',
            lineHeight: 1.2,
          }}>
          Welcome to S-Passion
        </Typography>

        <Typography variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' },
            color: '#141452ff',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            mb: 3,
            lineHeight: 1.6,
          }}>
          Join to explore the world of computers and coding where passion becomes innovation.
        </Typography>

        {/* CTA Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Button 
            variant="contained" 
            component={Link}
            to="/shop"
            size="large"
            sx={{ 
              bgcolor: '#141452ff',
              color: 'white',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 0.8, sm: 1, md: 1.5 },
              borderRadius: 3,
              textDecoration: 'none',
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#7a7a7eff',
                boxShadow: '0 8px 24px rgba(20, 20, 82, 0.3)',
                transform: 'translateY(-2px)',
              },
            }}>
            Get Started
          </Button>
        </Box>

        {/* Scroll Indicator */}
        <Box 
          sx={{ 
            mt: { xs: 2, sm: 3, md: 5 },
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
          <KeyboardArrowDownIcon sx={{ fontSize: { xs: 28, sm: 32, md: 40 }, color: '#141452ff' }} />
          <KeyboardArrowDownIcon sx={{ fontSize: { xs: 28, sm: 32, md: 40 }, color: '#141452ff', mt: -1 }} />
        </Box>

        <Typography variant="body2" 
          sx={{ 
            mt: 2,
            textAlign: 'center',
            color: '#666666ff',
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
          }}>
          Scroll down to explore more
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Box sx={{ 
                p: { xs: 1.5, sm: 2, md: 2.5 }, 
                mb: { xs: 4, sm: 5, md: 6 },
                border: '1px solid #ddd', 
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(10px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transform: 'translateY(-4px)',
                  bgcolor: 'rgba(255,255,255,0.8)',
                }
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 1.5, 
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                    fontWeight: 600,
                    color: '#141452ff'
                  }}>
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#555', 
                    mb: 2, 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                    flex: 1
                  }}>
                  {feature.description}
                </Typography>
                <Button 
                  variant="outlined" 
                  component={Link}
                  to={feature.link}
                  size="small"
                  fullWidth
                  sx={{ 
                    textTransform: 'none', 
                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                    color: '#141452ff',
                    borderColor: '#141452ff',
                    '&:hover': {
                      bgcolor: '#141452ff',
                      color: 'white',
                      borderColor: '#141452ff'
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

