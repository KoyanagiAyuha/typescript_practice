export {};

const kansu = () => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown: number = numberUnknown + 10;
  console.log(sumUnknown);
}
