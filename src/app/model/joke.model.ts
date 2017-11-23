export class Joke {
    public setup: string;
    public punchline: string;
    public isVisible: boolean;

    constructor(setup:string, punchline:string) {
        this.setup = setup;
        this.punchline = punchline;
        this.isVisible = true;
    }

    toggle() {
        this.isVisible = !this.isVisible;
    }
}