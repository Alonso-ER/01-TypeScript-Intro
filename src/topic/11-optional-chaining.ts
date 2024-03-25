export interface Passenger{
    name: string;
    family?: string[];

}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    family: ['Natalia','Elizabeth']
}

const printFamily = (passenger: Passenger): number => {
    const howManyFamily = passenger.family?.length || 0;
    // const howManyFamily = passenger.family!.length;

    console.log(passenger.name, howManyFamily)
    return howManyFamily;
}

printFamily(passenger1);
printFamily(passenger2)