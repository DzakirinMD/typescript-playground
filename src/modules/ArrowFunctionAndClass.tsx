export class ArrowFunctionAndClass {

    private height: number = 0;
    private width: number = 0;
    private depth: number = 0;

    constructor(height: number, width: number, depth: number) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    // Constructor can also be created combined with parameter like below.
	// constructor(private height: number, private width: number, private depth: number) {}

    // Normal Function
    normalFunction() {
        return( this.height * this.width * this.depth );
      }

    // Arrow Function
    volume = () => this.height * this.width * this.depth;

}