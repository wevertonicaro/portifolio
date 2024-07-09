import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DownloadIcon from '@mui/icons-material/Download';
import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }))

  const StyledImage = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImage src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography 
                color="primary" 
                variant="h1" 
                textAlign="center">
                  Weverton Icaro
              </Typography>
              <Typography 
                color="primary" 
                variant="h2" 
                textAlign="center">
                  I'm a Software Developer
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button variant="outlined" endIcon={<DownloadIcon/>}>
                    Download CV 
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button variant="outlined" endIcon={<ContactPhoneIcon/>}>
                    Contact me 
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
