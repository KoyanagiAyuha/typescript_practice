export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example1;
