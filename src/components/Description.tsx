import { PropsWithChildren } from 'react';
import './Description.css';

type DescriptionProps = {
  color?: string;
  variant: 'lg' | 'md' | 'sm';
};

export function Description(props: PropsWithChildren<DescriptionProps>) {
  const { color = 'green', variant, children } = props;
  return (
    <h2 style={{ color: color }} className={`Description ${variant}`}>
      {children}
    </h2>
  );
}
