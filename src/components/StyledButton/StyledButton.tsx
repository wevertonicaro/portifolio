import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const StyledButtonComponent = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledLinkComponent = styled("a")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, href }) => {
  if (href) {
    return (
      <StyledLinkComponent href={href}>
        {children}
      </StyledLinkComponent>
    );
  }

  return (
    <StyledButtonComponent onClick={onClick}>
      {children}
    </StyledButtonComponent>
  );
};

export default StyledButton;
