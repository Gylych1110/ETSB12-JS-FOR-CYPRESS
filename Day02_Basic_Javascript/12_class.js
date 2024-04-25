class SmartPhone{
  constructor(brand, model, year, features, specifications){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.features = features;
    this.specifications = specifications;
  }

  getInfo(){
    return `The ${this.brand} ${this.model} released is ${this.year}
    is a flagship smartphone with ${this.specifications.RAM} of RAM.`;
  }
}

let smartPhone = new SmartPhone(
  "Samsung", 
  "Galaxy S24",
  2023,
  ["5G Connection", "AI", "HD Camera", "HD Display"],
  {
    processor:"Exynos 2400",
    RAM: "12 GB or 16GB",
    storage:"128GB, 256GB or 512GB"
  }
)

console.log(smartPhone.getInfo());