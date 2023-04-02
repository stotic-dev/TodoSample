interface Countory extends Named{
    readonly id: number
    people: number
    member: string[]

    birthMember: (...memberNames: string[]) => void
}

interface Named{
    name: string
}

class Japan implements Countory{
    people: number;

    constructor(public name: string, readonly id: number, public member: string[] = []){
        this.people = member.length;
    }

    birthMember(...memberNames: string[]){
        this.member = [...this.member, ...memberNames];
    }
}

export const exsample_03 = (() => {
    // let jp: Partial<Countory> = {
    //     id: 1,
    //     people: 0,
    //     member: [],
    //     birthMember(...memberNames) {
    //         const oldMember = this.member ? this.member : [];
    //         this.member = [...oldMember, ...memberNames];
    //         console.log(memberNames);
    //         console.log(this.member);
    //     },
    // }

    // jp.name = "Japen";

    // console.log(jp);

    // const completeJp = jp as Countory
    // console.log(completeJp);
    // completeJp.birthMember("taichi", "inoue", "hajime", "yasuda", "nakamura");

    // console.log(completeJp);

    // completeJp.birthMember("zonbi", "zonbi2");

    // console.log(completeJp);

    const japan = new Japan("japan", 1);
    const proxy = new Proxy(japan, {
        get: (target, name, receiver) => {
            console.log(target, name, receiver);
            if(typeof name === "string"){
                return Reflect.get(target, name);
            }
        }
    })
    console.log(japan);

    japan.birthMember("taichi", "inoue", "hajime", "yasuda", "nakamura");

    console.log(japan);

    console.log(proxy.id);
})