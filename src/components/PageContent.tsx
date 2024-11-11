import { ReactNode } from 'react';
import classes from './PageContent.module.css';

export default function PageContent({
  image,
  title,
  children,
}: {
  image?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className={classes.content}>
      {image && <img src={image} alt={title} className={classes.image} />}
      <h1>{title}</h1>
      {children}
    </main>
  );
}
