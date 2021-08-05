/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.
Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi1',
  model: 'A6',
  year: 2005,
  color: 'white',
};


function showObjectKeys() {
  console.log(Object.keys(audi));
}

showObjectKeys()



// Nesigavo per arrow funkciją parašyt, ir nesupratau kodėl

// showObjectKeys = audi => console.log(Object.keys(audi))

