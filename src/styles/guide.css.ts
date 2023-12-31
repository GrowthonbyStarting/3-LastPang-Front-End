import { createVar, globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const header = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  width: `100%`,
  height: 24,
});

export const hover = style({
  ':hover': {
    cursor: `pointer`,
    opacity: 0.9,
  },
});

export const progressBar = style({
  position: `relative`,
  width: `100%`,
  height: theme.space['2xs'],
  backgroundColor: theme.colors.grey[200],
  borderRadius: theme.radii.sm,
});

export const progressStep = createVar();

export const progress = style({
  position: `absolute`,
  width: progressStep,
  height: theme.space['2xs'],
  borderRadius: theme.radii.sm,
  backgroundColor: theme.colors.primary.main,
});

export const progressText = style({
  display: `flex`,
  justifyContent: 'flex-end',
  fontSize: theme.fontSize.md,
  fontWeight: theme.fontWeights.bold,
  marginBottom: theme.space['2xs'],
});

export const heading = style({
  fontSize: theme.fontSize.xl,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.heading,
  marginLeft: theme.space.xs,
  marginBottom: theme.space.lg,
});

export const caption = style({
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeights.regular,
  color: theme.colors.primary.main,
  marginLeft: theme.space.xs,
});

export const cardWrapper = style({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `left`,
  padding: theme.space.sm,
  marginTop: theme.space.md,
  borderRadius: theme.radii.lg,
  boxShadow: theme.boxShadow.md,
});

export const card = style({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `left`,
  padding: theme.space.md,
  borderRadius: theme.radii.lg,
  border: `1px solid ${theme.colors.primary.main}`,
  marginBottom: theme.space.sm,
});

globalStyle(`${card}:last-child`, {
  marginBottom: theme.space.lg,
});

globalStyle(`${card} h2`, {
  fontSize: theme.fontSize.lg,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.primary.main,
});

globalStyle(`${card} p`, {
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeights.regular,
  color: theme.colors.body,
});
