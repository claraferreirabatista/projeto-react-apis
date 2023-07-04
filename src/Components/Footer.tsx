import { Box, Container, BoxProps } from "@chakra-ui/react";

interface FooterProps extends BoxProps {
  // Se houver alguma prop específica do Footer, você pode adicioná-la aqui.
  // Por exemplo:
  // additionalProp: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Box as="footer" role="contentinfo" bg="bg-accent" {...props}>
      <Container>Footer</Container>
    </Box>
  );
};
