

function merge<T extends string | number>(val1: T, val2: T): T{
    console.log(val1);
    console.log(val2);
    return val1;
}

function mergeObject<T extends {}, U>(obj1: T, obj2: U){
    const mergeObj = Object.assign(obj1, obj2);
    return mergeObj
}

function getProp<T extends {}, U extends keyof T>(target: T, key: U){
    return target[key];
}

interface HasId{
    type: string
}

class GenericSample<T extends HasId>{
    a: string
    private items: T[]

    constructor(){
        this.a = "a";
        this.items = []
    }

    addItem(item: T){
        this.items.push(item);
        console.log(this.items);
    }

    removeItem(item: T){
        if(this.items.indexOf(item) != -1){
            const removedItem = this.items.splice(this.items.indexOf(item), 1);
            console.log(`removed ${removedItem}`);
            console.log(`after Items: ${this.items}`);
        }else{
            console.log(`no removed Item: ${item}`);
        }
    }

    get nowItem(){
        return this.items;
    }

    get length(){
        return this.items.length;
    }
}

export const example_04 = (() => {
    // merge("aaa","bbb");

    // const obj1 = {
    //     prop1: "prop1"
    // };

    // const obj2 = {
    //     prop2: "prop2"
    // };

    // const obj3 = mergeObject(obj1, obj2);
    // console.log(obj3);

    // const prop1 = getProp(obj1, "prop1");
    // console.log(prop1);

    const typeObj1 = {
        type: "aa"
    }

    const typeObj2: HasId= {
        type: "qq"
    }

    const typeObj3 = {
        type: "uu",
        name: "bb"
    }

    const typeObj4 = {
        name: "cc"
    }

    const generic = new GenericSample();
    generic.addItem(typeObj1);
    generic.addItem(typeObj2);
    generic.addItem(typeObj3);
    // generic.addItem(typeObj4);
    console.log("length: ",generic.length);
    console.log("items: ",generic.nowItem);

    generic.removeItem(typeObj2);
    console.log("items: ",generic.nowItem);

    const type3_copy = {...typeObj3};
    generic.removeItem(type3_copy);
    console.log("items: ",generic.nowItem);

    for(const item in generic.nowItem){
        console.log("item loop: ",generic.nowItem[item]);
    }

})