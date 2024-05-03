export type TimeFrame = {
    current: number,
    previous: number
}

export type Data = {
        title: string;
        timeframes: {
            daily: TimeFrame;
            weekly: TimeFrame;
            monthly: TimeFrame;
        };
}