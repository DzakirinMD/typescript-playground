export class Vector2 {
  constructor(public x: number, public y: number) {}

  add(otherVector2: Vector2) {
    return new Vector2(
      this.x + otherVector2.x, 
      this.y + otherVector2.y
      );
  }
}