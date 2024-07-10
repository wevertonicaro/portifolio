import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import styled from '@mui/material/styles/styled';

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

const StyledModal = styled(Modal)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(5px)',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3, 4, 3),
  borderRadius: '10px',
  textAlign: 'center',
}));

const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:weverton.dev@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561994087588', '_blank');
  };

  return (
    <StyledModal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <ModalContent>
        <Typography variant="h6" component="h2" id="contact-modal-title" textAlign="center">
          Contact Me
        </Typography>
        <Grid container display="flex" justifyContent="center" spacing={3}>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box mt={2} display="flex" justifyContent="space-around">
              <Button startIcon={<MailOutlineIcon />} variant="contained" color="primary" onClick={handleEmailClick}>
                Email
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box mt={2} display="flex" justifyContent="space-around">
              <Button startIcon={< WhatsAppIcon />} variant="contained" color="secondary" onClick={handleWhatsAppClick}>
                WhatsApp
              </Button>
            </Box>
          </Grid>
        </Grid>
      </ModalContent>
    </StyledModal>
  );
};

export default ContactModal;
