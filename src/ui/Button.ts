import { styled } from '../stitches.config';

export const Button = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$2',

  variants: {
    size: {
      md: {
        px: '$3',
        py: '$1',
        br: '$1',
      },
      lg: {
        px: '$4',
        py: '$3',
        br: '$1',
      },
    },
    color: {
      gray: {
        color: '$gray1',
        backgroundColor: '$gray11',
        '&:hover': {
          backgroundColor: '$gray12',
        },
      },
      orange: {
        color: 'white',
        backgroundColor: '$orange9',
        '&:hover': {
          backgroundColor: '$orange10',
        },
      },
      explorer: {
        color: '$gray1',
        backgroundColor: '#5623E8',
        transition: 'background-color 150ms ease-in-out',
        '&:hover': {
          backgroundColor: '#3E1BA4',
        },
        '&:disabled': {
          backgroundColor: '#C0B1E9',
        },
      },
    },
    variant: {
      solid: {},
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
  compoundVariants: [
    {
      color: 'gray',
      variant: 'ghost',
      css: {
        backgroundColor: 'transparent',
        color: '$gray11',
        '&:hover': {
          backgroundColor: '$gray4',
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
      },
    },
    {
      color: 'orange',
      variant: 'ghost',
      css: {
        backgroundColor: 'transparent',
        color: '$orange11',
        '&:hover': {
          backgroundColor: '$orange4',
        },
        '&:active': {
          backgroundColor: '$orange5',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'gray',
    variant: 'solid',
  },
});
