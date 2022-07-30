import { extendTheme } from "@chakra-ui/react";

const colors = {
  mauve: {
    bg: "hsl(246, 6.0%, 9.0%)",
    low: "hsl(253, 4.0%, 63.7%)",
    high: "hsl(256, 6.0%, 93.2%)",
  },
  yellow: {
    low: "hsl(48, 100%, 47.0%)",
    high: "hsl(53, 100%, 91.0%)",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "hsl(246, 6.0%, 9.0%)",
        color: "hsl(256, 6.0%, 93.2%)",
      },
    },
  },
});

export default theme;
