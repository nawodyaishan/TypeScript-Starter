export abstract class Person {
    private name: string;
    private age: number;

    protected constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


