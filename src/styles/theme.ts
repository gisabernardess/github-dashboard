import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#FAFAFA',
      '400': '#A7A7A7',
      '500': '#6E6E6E',
    },
    blue: {
      '200': '#56CCF2',
      '300': '#2D9CDB',
      '400': '#2F80ED',
      '500': '#1D42A2',
      '900': '#2E3A53',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'blue.900',
      },
    },
  },
});
