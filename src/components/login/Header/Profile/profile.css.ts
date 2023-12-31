import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const profileContainer = style({
  height: `100px`,
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  gap: `0.2rem`,
  borderTop: `1px solid ${theme.colors.line}`,
  borderBottom: `1px solid ${theme.colors.line}`,
  paddingLeft: `15px`,
  overflowX: `auto`,
});

export const profileWrapper = style({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  marginRight: 6,
  cursor: `pointer`,
  transition: `opacity 0.2s ease-in-out`,
  ':hover': {
    opacity: 0.9,
  },
});

export const avatar = style({
  position: `relative`,
  overflow: `hidden`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `60px`,
  height: `60px`,
  flexShrink: `0`,
  borderRadius: `50%`,
});

export const featuredAvatar = style({
  border: `3px solid ${theme.colors.primary.main}`,
});

export const profileName = style({
  color: theme.colors.caption,
  fontSize: theme.fontSize.xs,
});

export const featuredName = style({
  color: theme.colors.primary.main,
});

export const profileAddBtn = style({
  background: `none`,
  border: `none`,
  cursor: `pointer`,
  padding: `12px 7px 32.79px`,
});
