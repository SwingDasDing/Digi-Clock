import { Point } from '../classes/point.class';
import { Segment } from './Segment.class';

export class SegNumber {
    constructor(
        public context: CanvasRenderingContext2D,
        public position: Point,
        public number: number = 0
    ) {
        this.segments.push(
            new Segment(this.context, new Point(0, 0), 'horizontal'),
            new Segment(this.context, new Point(Segment.width, 0), 'vertical'),
            new Segment(
                this.context,
                new Point(Segment.width, Segment.width),
                'vertical'
            ),
            new Segment(
                this.context,
                new Point(0, Segment.width * 2),
                'horizontal'
            ),
            new Segment(this.context, new Point(0, Segment.width), 'vertical'),
            new Segment(this.context, new Point(0, 0), 'vertical'),
            new Segment(this.context, new Point(0, Segment.width), 'horizontal')
        );
    }
    private static encoding = new Map<number, number>([
        [0, 0x7e],
        [1, 0x30],
        [2, 0x6d],
        [3, 0x79],
        [4, 0x33],
        [5, 0x5b],
        [6, 0x5f],
        [7, 0x70],
        [8, 0x7f],
        [9, 0x7b]
    ]);

    private segments: Segment[] = [];

    public draw(): void {
        this.context.save();
        this.context.translate(this.position.x, this.position.y);
        this.segments.forEach(seg => {
            seg.update();
        });

        this.context.restore();
    }

    public update(): void {
        this.segments.forEach((seg, i) => {
            seg.active = !!(
                (SegNumber.encoding.get(this.number) >> (6 - i)) &
                1
            );
        });

        this.draw();
    }
}
