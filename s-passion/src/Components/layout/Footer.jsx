import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { LinkedIn, Twitter, Email } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: LinkedIn, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Email, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} S-Passion Computers Academy. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={2}>
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <IconButton
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                color="inherit"
                sx={{ color: '#5a5a5cff',
                  '&:hover': { color: '#434185ff' } }}
              >
                <Icon />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;