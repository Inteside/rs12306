export interface TrainInfo {
  trainNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  seats: Seats;
}

export interface Song {
  no: number;
  title: string;
  length: string;
  from: string;
}

export interface TicketPrice {
  data: {
    price: string;
  };
}
