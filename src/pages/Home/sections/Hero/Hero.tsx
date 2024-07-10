import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { useState } from 'react';
import Avatar from "../../../../assets/images/avatar.jpeg";
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';
import ContactModal from '../../../../components/ContactModal/ContactModal';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.breakpoints.up('xs') ? "100px" : "0",
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "75%",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImage src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography 
              color="primary.contrastText" 
              variant="h1" 
              textAlign="center">
              Weverton Icaro
            </Typography>
            <Typography 
              color="primary.contrastText" 
              variant="h3" 
              textAlign="center"
              pb={2}>
              I'm a Software Developer
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("DOWNLOAD")}>
                  <DownloadIcon />
                  <Typography>
                    Download CV
                  </Typography> 
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleModalOpen}>
                  <MailOutlineIcon />
                  <Typography>
                    Contact me
                  </Typography> 
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ContactModal open={modalOpen} handleClose={handleModalClose} />
    </StyledHero>
  );
};

export default Hero;
