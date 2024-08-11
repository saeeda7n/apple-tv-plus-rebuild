declare type RootLayoutProps = React.PropsWithChildren;

declare type OffersCardProps = {
  title: string;
  subtitle: string;
  actionButton: string | React.ReactNode;
  body: string | React.ReactNode;
};

declare type Movie = {
  image: string;
  shortDesc?: string;
  brand?: string;
  tag?: string;
  genre?: string;
  action?: string;
};

declare type AutoCarouselProps = {
  items: Movie[];
  duration: number;
};

declare type SmallMovieCardProps = { movie: Movie };
