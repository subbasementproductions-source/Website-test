export interface Film {
    title: string;
    image: string;
    bg: string;
    videoId: string;
    href?: string;
    year: string;
    label?: string;
}

export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
}

export interface Commercial {
    id: string;
    campaignName: string;
    trailerUrl: string;
    screenGrabs: string[];
}

export interface Person {
    name: string;
    role: string;
    bio: string;
    image: string;
}
