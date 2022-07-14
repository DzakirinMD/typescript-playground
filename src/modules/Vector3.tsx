export class Vector3 {
    constructor(public x: number, public y: number, public z: number) {}
  
    add(otherVector3: Vector3) {
      return new Vector3(
        this.x + otherVector3.x,
        this.y + otherVector3.y,
        this.z + otherVector3.z
      );
    }
  }