import 'regenerator-runtime/runtime';
import { Colon } from './canvas-assets/colon.class';
import { SegNumber } from './canvas-assets/seg-number.class';
import { Segment } from './canvas-assets/Segment.class';
import { Point } from './classes/point.class';

class Main {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private numbers: SegNumber[];
    private colons: Colon[];
    private segSpacing = Segment.width * 1.4;

    private _redSlider: HTMLInputElement;
    private _greenSlider: HTMLInputElement;
    private _blueSlider: HTMLInputElement;

    private clockCenter = new Point(
        this.segSpacing * 3 + (Segment.height * 1.8) / 2,
        Segment.width
    );

    constructor() {
        this._canvas = document.querySelector('#canvasEl');

        this._redSlider = document.querySelector(
            '#colorRRange'
        ) as HTMLInputElement;
        this._greenSlider = document.querySelector(
            '#colorGRange'
        ) as HTMLInputElement;
        this._blueSlider = document.querySelector(
            '#colorBRange'
        ) as HTMLInputElement;

        this.init();
    }

    public init(): void {
        this.initialiseControls();

        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;

        this.colons = [
            new Colon(
                this._context,
                new Point(this.segSpacing * 2, Segment.width)
            ),
            new Colon(
                this._context,
                new Point(
                    this.segSpacing * 4 + Segment.height * 1.8,
                    Segment.width
                )
            )
        ];

        this.numbers = [
            new SegNumber(this._context, new Point(0, 0)),
            new SegNumber(this._context, new Point(this.segSpacing, 0)),
            new SegNumber(
                this._context,
                new Point(this.segSpacing * 2 + Segment.height * 1.8, 0)
            ),
            new SegNumber(
                this._context,
                new Point(this.segSpacing * 3 + Segment.height * 1.8, 0)
            ),
            new SegNumber(
                this._context,
                new Point(this.segSpacing * 4 + Segment.height * 3.6, 0)
            ),
            new SegNumber(
                this._context,
                new Point(this.segSpacing * 5 + Segment.height * 3.6, 0)
            )
        ];

        this.update();
        setInterval(() => {
            this.update();
        }, 1000);
    }

    public update(): void {
        this._context.save();

        this._context.fillStyle = 'black';
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);

        this._context.translate(-this.clockCenter.x, -this.clockCenter.y);
        this._context.translate(
            this._canvas.width / 2,
            this._canvas.height / 2
        );

        const date = new Date();
        const digits: string[] = [];
        digits.push(...this.numToDigits(date.getHours()));
        digits.push(...this.numToDigits(date.getMinutes()));
        digits.push(...this.numToDigits(date.getSeconds()));

        this.numbers.forEach((num, i) => {
            num.number = parseInt(digits[i]);
            num.update();
        });

        this.colons.forEach(col => {
            col.update();
        });

        this._context.restore();
    }

    private numToDigits(num: number): string[] {
        return num
            .toString()
            .padStart(2, '0')
            .split('');
    }

    private initialiseControls() {
        this._redSlider.oninput = (e: Event) =>
            (Segment.red = parseInt(this._redSlider.value));
        this._greenSlider.oninput = (e: Event) =>
            (Segment.green = parseInt(this._greenSlider.value));
        this._blueSlider.oninput = (e: Event) =>
            (Segment.blue = parseInt(this._blueSlider.value));
    }
}

const app = new Main();
