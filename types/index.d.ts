declare type RootLayoutProps = React.PropsWithChildren;

declare type OffersCardProps = {
  title: string;
  subtitle: string;
  actionButton: string | React.ReactNode;
  body: string | React.ReactNode;
};

declare type Movie = {
  id?: number;
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
  className?: string;
};

declare type SmallMovieCardProps = { movie: Movie };

declare type CarouselCardProps = {
  movie: Movie;
  index: number;
};

declare type CarouselContextProps = {
  center: number;
  length: number;
  setCenter: (index: number) => void;
};
