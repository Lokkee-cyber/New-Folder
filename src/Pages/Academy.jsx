import { Box, Typography, Card, CardContent, Button, Chip, List, ListItem, ListItemIcon, ListItemText, Divider, Grid, IconButton } from "@mui/material";
import { Email, Phone, LocationOn, CheckCircle, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";

const contactInfo = [
    {
      icon: <Email color="primary" />,
      title: 'Email',
      value: 'info@spassion.com',
      link: 'mailto:info@spassion.com'
    },
    {
      icon: <Phone color="primary" />,
      title: 'Phone',
      value: '+2348037487006',
      link: 'tel:+2348037487006'
    },
    {
      icon: <LocationOn color="primary" />,
      title: 'Ilorin',
      value: 'Ilorin, Nigeria'
    }
  ];

const courses = [
     {
    title: 'WEB DEVELOPMENT',
    duration: '12 WEEKS (3 Days A Week)',
    price: 100000,
    displayPrice: '₦100,000',
    details: [
      'Intro to installation tools',
      'CSS, HTML, JAVASCRIPT',
      'Version Control System (GitHub)',
      'Frontend Framework',
      'Deployment',
      'Final Project and Build Portfolio',
    ],
    icon: '🌐',
    level: 'Intermediate',
  },
  {
    title: 'DATA ANALYSIS',
    duration: '12 WEEKS (3 Days A Week)',
    price: 80000,
    displayPrice: '₦80,000',
    details: [
      'EXCEL',
      'SPSS',
      'STATA',
      'EVIEWS',
      'POWER B.I',
      'SQL',
    ],
    icon: '📊',
    level: 'Advanced',
  },
  {
    title: 'GRAPHICS DESIGN',
    duration: '8 WEEKS (3 Days A Week)',
    price: 70000,
    displayPrice: '₦70,000',
    details: [
      'Design Theory',
      'Smartphone Design',
      'Photoshop',
      'Illustrator',
      'Coreldraw',
      'Branding',
    ],
    icon: '🎨',
    level: 'Beginner',
  },
  {
    title: 'COMPUTER LITERACY',
    duration: '12 WEEKS (3 Days A Week)',
    price: 50000,
    displayPrice: '₦50,000',
    details: [
      'Introduction to Computer',
      'Hardware and Software',
      'Operating System',
      'Microsoft Packages',
      'The Internet',
      'System maintenance',
    ],
    icon: '💻',
    level: 'Beginner',
  },
  {
    title: 'COMPUTER REPAIR',
    duration: '12 WEEKS (3 Days A Week)',
    price: 80000,
    displayPrice: '₦80,000',
    details: [
      'Computer hardware component',
      'Hardware troubleshoting',
      'Software installation',
      'Repair and Maintenance',
      'Basic networking',
      'Virus removal',
    ],
    icon: '🔧',
    level: 'Intermediate',
  },
  {
    title: 'SUMMER TRAINING FOR KIDS',
    duration: '8 WEEKS (5 Days A Week)',
    price: 100000,
    displayPrice: '₦100,000',
    details: [
      'Artificial intelligence(AI)',
      'Data Analysis', 
      'Computer Literacy',
      'Graphics Design',
      'Web Development Basics',
      'Final Project',
    ],
    icon: '👶',
    level: 'Beginner',
  },
];

export default function Academy() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      paddingBottom: 4,
    }}>
      {/* Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #141452ff 0%, #1f1e8aff 100%)',
          color: 'white',
          padding: { xs: 3, md: 1.5 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            marginBottom: 0.5,
            fontSize: { xs: '2rem', md: '1.5rem' },
          }}
        >
          Professional Courses
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 300,
            maxWidth: 600,
            margin: '0 auto',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
          }}
        >
          Learn from industry experts. Choose from our comprehensive selection of courses designed to enhance your skills.
        </Typography>
      </Box>

      {/* Slideshow Section */}
      <Box sx={{ padding: { xs: 2, md: 0.5 }, maxWidth: 1200, margin: '0' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            minHeight: 470,
          }}
        >
          {/* Previous Button */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              backgroundColor: '#141452ff',
              color: 'white',
              fontSize: { xs: '0.5rem', md: '2rem' },
              padding: { xs: 0.6, md: 2 },
              ml: { xs: 0.5, md: 10, sm: 5 },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#1f1e8aff',
                transform: 'scale(1.1)',
              },
            }}
          >
            <ChevronLeft sx={{ fontSize: '2.5rem' }} />
          </IconButton>

          {/* Course Card Slideshow */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              perspective: '1000px',
            }}
          >
            <Card
              sx={{
                width: { xs: '20px', sm: '400px', md: '500px' },
                height: { xs: '400px', sm: '500px', md: '600px' },
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                transition: 'all 0.5s ease-in-out',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                overflow: 'hidden',
              }}
            >
              {/* Header with icon and level badge */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #141452ff 0%, #1f1e8aff 100%)',
                  color: 'white',
                  padding: 1.5,
                  position: 'relative',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.4 }}>
                  <Typography variant="h3" sx={{ fontSize: '2rem' }}>
                    {courses[currentSlide].icon}
                  </Typography>
                  <Chip
                    label={courses[currentSlide].level}
                    size="small"
                    sx={{
                      backgroundColor: getLevelColor(courses[currentSlide].level),
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {courses[currentSlide].title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                  {courses[currentSlide].duration}
                </Typography>
              </Box>

              {/* Course Content */}
              <CardContent sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
                {/* Price Section */}
                <Box sx={{ mb: 2, pb: 2, borderBottom: '2px solid #f0f0f0' }}>
                  <Typography variant="caption" sx={{ color: '#666', fontSize: '0.8rem' }}>
                    COURSE FEE
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#B12704',
                      mt: 0.5,
                    }}
                  >
                    {courses[currentSlide].displayPrice}
                  </Typography>
                </Box>

                {/* Course Details */}
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: '#141452ff' }}>
                  What You'll Learn:
                </Typography>
                <List sx={{ padding: 0 }}>
                  {courses[currentSlide].details.map((detail, i) => (
                    <ListItem key={i} sx={{ padding: '6px 0', minHeight: 'auto' }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle sx={{ fontSize: '18px', color: '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={detail}
                        primaryTypographyProps={{
                          sx: { fontSize: '0.95rem', color: '#333' },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              {/* Action Button */}
              <Box sx={{ padding: 2, paddingTop: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  href="tel:+2348037487006"
                  sx={{
                    backgroundColor: '#FFD814',
                    color: '#0F1111',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '14px',
                    padding: '12px',
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: '#F7CA00',
                    },
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
            </Card>
          </Box>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: '#141452ff',
              color: 'white',
              fontSize: { xs: '0.5rem', md: '2rem' },
              padding: { xs: 0.6, md: 2 },
              mr: { xs: 0.5, md: 10, sm: 5 },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#1f1e8aff',
                transform: 'scale(1.1)',
              },
            }}
          >
            <ChevronRight sx={{ fontSize: '2.5rem' }} />
          </IconButton>
        </Box>

        {/* Slide Indicators */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            marginTop: 3,
          }}
        >
          {courses.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: index === currentSlide ? 32 : 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: index === currentSlide ? '#141452ff' : '#ccc',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#141452ff',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Contact Section */}
      <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: 1400, margin: '0 auto' }}>
        <Divider sx={{ marginY: 4 }} />
        
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            marginBottom: 4,
            color: '#141452ff',
          }}
        >
          Ready to Enroll?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            color: '#666',
            maxWidth: 600,
            margin: '0 auto 2rem',
          }}
        >
          Contact us today to start your learning journey. Our team is ready to help you choose the perfect course.
        </Typography>

        <Grid container spacing={3} justifyContent="center" sx={{ mb: { xs: 0.6, sm: 0.8, md: 1 } }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  padding: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 2,
                      '& svg': {
                        fontSize: '2.5rem',
                        color: '#141452ff',
                      },
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {info.title}
                  </Typography>
                  {info.link ? (
                    <Button
                      href={info.link}
                      sx={{
                        color: '#0066C0',
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {info.value}
                    </Button>
                  ) : (
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {info.value}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

const getLevelColor = (level) => {
  switch(level) {
    case 'Beginner':
      return '#4CAF50';
    case 'Intermediate':
      return '#FF9800';
    case 'Advanced':
      return '#F44336';
    default:
      return '#2196F3';
  }
};
