export type TodoType = {
    id: number;
    room: string;
    devices?: DevType[];
};

export type DevType = {
    id: number;
    device: string;
    status: boolean;
    offPicture: string;
    onPicture: string;
};

