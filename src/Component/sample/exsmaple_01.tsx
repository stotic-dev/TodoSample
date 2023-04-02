type user = {
    name: string,
    age: number,
    hobby: string,
    type?: userType
}

enum userType{
    general = "general",
    employee = "employee",
    mad = "mad",
}

export const example_01 = () => {
    const str = "str1";

    dispStr(str);
    dispStr("str2");

    const user1:user = {
        name: "taichi",
        age: 24,
        hobby: "develop IOS App",
    }

    const user2:user ={
        name: "hasegawa",
        age: 24,
        hobby: "game",
        type: userType.employee
    }

    dispUser(user1);
    dispUser(user2);
}

function dispStr(str: string){
    console.log(str);
}

function dispUser({name, age, hobby, type}: user){
    console.log(name, age, hobby);

    if(type){
        console.log(`このユーザーのタイプは${type}です。`)
    }
}