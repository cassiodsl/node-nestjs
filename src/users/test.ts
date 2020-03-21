export class Agenda {
    private name: string;
}

export interface IJob {
    test();
}

interface IQueue<T> {
    run(job: Agenda, done: (err?: Error) => void): Promise<void>;
}

// tslint:disable-next-line: max-classes-per-file
abstract class Queue<T> implements IQueue<T> {
    public abstract run(job: Agenda, done: (err?: Error) => void): Promise<void>; // This will be implemented in classes
}

// tslint:disable-next-line: max-classes-per-file
class Q extends Queue<IJob> {
    public run(job: Agenda, done: (err?: Error) => void): Promise<void> {
        // impl
        return null;
    }
    // async run(job, done) {
    //     // test
    // } // implementation
}

// tslint:disable-next-line: max-classes-per-file
class RunsQ {
    private test: Q;

    constructor() {
        this.test = new Q;
    }

    public myTest(): void {
        this.test.run({}, null);
    }
}
