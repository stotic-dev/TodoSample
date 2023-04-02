function Autobind(target: any, name: string, descripter: PropertyDescriptor){
    const orignalMethod = descripter.value

    const newDescriptor: PropertyDescriptor = {
        enumerable: descripter.enumerable,
        configurable: true,
        get: function(){
            return orignalMethod.bind(this);
        }
    }

    return newDescriptor;
}

function Log2(target: any){
    console.log('class デコレータ');
    console.log(target);
}

const Log3 = (label: string) => {
    console.log(`${label}: start`);

    return function(target: any, name: string){
        console.log('prop デコレータ', name);
    }
}

@Log2
class DecolaterSample{

    @Log3("log3")
    prop1: string

    constructor(prop1: string){
        this.prop1 = prop1;
    }

    @Autobind
    sample(){
        console.log(this.prop1);
    }
}


export type Prop1 = {
    onClickAction: (event: any) => void
}

export const Exsample_05 = ((prop: Prop1) => {
    const { onClickAction } = prop;

    const deco = new DecolaterSample("sample");

    return (
        <div>
            <button onClick={onClickAction}>ボタン</button>
            <button onClick={deco.sample}>ボタン2</button>
        </div>
    )
})