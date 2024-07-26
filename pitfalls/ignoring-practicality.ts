class Temperature {
  private celsius: number;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  toFahrenheit(): number {
    return (this.celsius * 9) / 5 + 32;
  }

  toKelvin(): number {
    return this.celsius + 273.15;
  }
}

const temp = new Temperature(25);
console.log(temp.toFahrenheit());
console.log(temp.toKelvin());

// rather this
function convertToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function convertToKelvin(celsius: number): number {
  return celsius + 273.15;
}

const celsius = 25;
console.log(convertToFahrenheit(celsius));
console.log(convertToKelvin(celsius));
