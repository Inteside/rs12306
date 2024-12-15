export interface TrainInfo {
    trainNumber: string;
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    seats: {
      specialClass: string;
      firstClass: string;
      secondClass: string;
      softSleeper: string;
      hardSleeper: string;
      hardSeat: string;
      noSeat: string;
    };
  }