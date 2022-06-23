import { PropsWithChildren } from 'react';

type DescriptionProps = {
  color?: string;
};

export function Description(props: PropsWithChildren<DescriptionProps>) {
  const { color = 'green', children } = props;
  return <h2 style={{ color: color }}>{children}</h2>;
}
