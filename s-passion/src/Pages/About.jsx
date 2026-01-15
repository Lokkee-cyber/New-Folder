import { Box, Grid, Typography } from "@mui/material";
import reactImg from '../assets/react.png';
import React from '../assets/react.png';

export default function About() {
  return (
    <Box  sx={{ p: 3, margin: '0 auto',
      bgcolor: '#f0f8ff',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)'
     }} md={{ p: 1, mt: 3, maxWidth: '720px' }}>
      <Box maxWidth={'1080px'}>
        <h1>About Us</h1>
      <p>Welcome to S-Passion! We are dedicated to providing top-notch computer services, training, and products to help you stay ahead in the digital world. Our mission is to empower individuals and businesses with the knowledge and tools they need to succeed in today's technology-driven environment.</p>
      <p>At S-Passion, we believe that technology is a powerful enabler of growth and innovation. Whether you're looking to enhance your computer skills through our comprehensive training programs, seeking reliable repair services, or in need of the latest computer products, we've got you covered.</p>
      <p>Our team of experienced professionals is passionate about technology and committed to delivering exceptional service and support to our clients. We continuously strive to stay updated with the latest industry trends and advancements to ensure that we provide the best solutions tailored to your needs.</p>
      <p>Thank you for choosing S-Passion as your trusted partner in technology. We look forward to helping you achieve your goals and unlock your full potential in the digital age.</p>
    
    
    <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Our Mission
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        At S-Passion, our mission is to empower individuals and businesses by providing exceptional computer services, training, and products. We are committed to fostering a culture of continuous learning and innovation, enabling our clients to thrive in an ever-evolving digital landscape. Through our dedication to quality, integrity, and customer satisfaction, we strive to be the go-to resource for all your technology needs.
      </Typography>

      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Our Vision
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Our vision at S-Passion is to be a leading provider of comprehensive computer solutions that inspire and empower individuals and organizations worldwide. We envision a future where technology is accessible to all, driving innovation, growth, and positive change. By continuously evolving our services and embracing emerging technologies, we aim to create a connected community where knowledge and passion for technology flourish.
      </Typography>
      </Box>

      <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        Meet the Team
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        
        <Grid item xs={16} md={6} sx={{bgcolor: '#d8d2d2ff', borderRadius: 3, p:2}}>
          <Box
            component="img"
            src={reactImg}
            alt="Team Member"
            sx={{ width: 250, height: 150, borderRadius: '50%' }}
            ></Box>
          <Typography variant="h6" sx={{textAlign: 'center'}}>John Doe</Typography>
          <Typography variant="body2" sx={{textAlign: 'center'}}>Founder & CEO</Typography>
        </Grid>
        <Grid item xs={16} md={6}  sx={{bgcolor: '#d8d2d2ff', borderRadius: 3, p:2}}>
           <Box
            component="img"
            src={React}
            alt="Team Member"
            sx={{ width: 250, height: 150, borderRadius: '50%' }}
            ></Box>
          <Typography variant="h6" sx={{textAlign: 'center'}}>Jane Smith</Typography>
          <Typography variant="body2" sx={{textAlign: 'center'}}>Chief Technology Officer</Typography>
        </Grid>
        <Grid item xs={16} md={6} sx={{bgcolor: '#d8d2d2ff', borderRadius: 3, p:2}}>
          <Box
            component="img"
            src={React}
            alt="Team Member"
            sx={{ width: 250, height: 150, borderRadius: '50%' }}
            ></Box>
          <Typography variant="h6"  sx={{textAlign: 'center'}}>Mike Johnson</Typography>
          <Typography variant="body2" sx={{textAlign: 'center'}}>Head of Marketing</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

