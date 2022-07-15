interface Shape {

    height: number;
    width?: number;
    depth: number;
    baseRadius?: number;

    volume: () => number;
    area: () => number;
}

export class Cuboid implements Shape {

    height: number = 0;
    width: number = 0;
    depth: number = 0;

    constructor(height: number, width: number, depth: number) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    volume = () => this.height * this.width * this.depth;
    area = () => 2* (this.height * this.width * this.depth);
}