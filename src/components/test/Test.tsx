export const Test = <T extends React.ElementType = 'div'>({
  as: Component = 'div',
  children,
  ...props
}: {
  as?: T;
  children: React.ReactNode;
} & React.ComponentProps<T>) => {
  return <Component {...props}>{children}</Component>;
};
