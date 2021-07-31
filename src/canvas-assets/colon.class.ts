import { Point } from '../classes/point.class';
import { Segment } from './Segment.class';

export class Colon {
    constructor(
        public context: CanvasRenderingContext2D,
        public position: Point
    ) {}

    public size: number = Segment.height / 2;

    public active: boolean = true;

    public draw(): void {
        this.context.save();

        this.context.fillStyle = `rgba(255,255,255,${
            this.active ? 0.8 : 0.04
        })`;

        this.context.translate(this.position.x, this.position.y);

        this.context.beginPath();
        this.context.arc(0, -Segment.width / 2, this.size, 0, Math.PI * 2);
        this.context.arc(0, Segment.width / 2, this.size, 0, Math.PI * 2);
        this.context.closePath();

        this.context.fill();

        this.context.restore();
    }

    public update(): void {
        this.draw();
    }
}
