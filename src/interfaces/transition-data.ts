export interface TransitionProps {
  id: string;
  description: string;
  price: number;
  date: string;
}

export interface TransitionResponse {
  transitions: TransitionProps[];
}
