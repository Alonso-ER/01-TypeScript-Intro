

export function whatsMyTime<T>( argument: T ): T{

    return argument;
}

const amIString = whatsMyTime<string>('Hola Mundo');

const amINumber = whatsMyTime<number>(1+2);

const amIArray = whatsMyTime<string[]>(['Hola','Mundo'])

const amIBoolean = whatsMyTime<boolean>(true);

console.log(amIString.split(' '));

console.log(amINumber.toFixed(2));

console.log(amIArray.join('-'));

console.log(amIBoolean);







