import { Point } from '../classes/point.class';

export class Segment {
    constructor(
        public context: CanvasRenderingContext2D,
        public position: Point,
        public direction: 'vertical' | 'horizontal'
    ) {}

    private static readonly wid = 0.23; // Base height ratio
    private static readonly len = 1; // Base width ratio
    private static readonly mult = 100; // Size multiplier - Change this to change the size of the numbers

    public static height: number = Segment.wid * Segment.mult;
    public static width: number = Segment.len * Segment.mult;

    public static padding: number = Segment.height * 0.08;

    public active: boolean = true;

    public draw(): void {
        this.context.save();

        this.context.fillStyle = `rgba(255,255,255,${
            this.active ? 0.8 : 0.04
        })`;

        this.context.translate(this.position.x, this.position.y);

        if (this.direction !== 'horizontal') {
            this.context.rotate(Math.PI / 2);
        }

        this.context.beginPath();
        this.context.moveTo(Segment.padding, 0);
        this.context.lineTo(
            Segment.height / 2,
            -Segment.height / 2 + Segment.padding
        );
        this.context.lineTo(
            Segment.width - Segment.height / 2,
            -Segment.height / 2 + Segment.padding
        );
        this.context.lineTo(Segment.width - Segment.padding, 0);
        this.context.lineTo(
            Segment.width - Segment.height / 2,
            Segment.height / 2 - Segment.padding
        );
        this.context.lineTo(
            Segment.height / 2,
            Segment.height / 2 - Segment.padding
        );
        this.context.closePath();

        this.context.fill();

        this.context.restore();
    }

    public update(): void {
        this.draw();
    }
}
