//  المركبات
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  //  السيارة
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  //  الطيّارة
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  //  الموظف
  class Employee {
    constructor(name, id, dateOfbirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfbirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfbirth, licenseID) {
      super(name, id, dateOfbirth);
      this.licenseID = licenseID;
    }
  }
  class Pilot extends Employee {
    constructor(name, id, dateOfbirth, licenseID) {
      super(name, id, dateOfbirth);
      this.licenseID = licenseID;
    }
  }
  //  الحجز
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  const reservations = [];
  
  const car1 = new Car("Car 1", "Toyota", 1, "Gas");
  const car2 = new Car("Car 2", "Camry", 2, "Electric");
  const car3 = new Car("Car 3", "Nissan", 3, "Gas");
  
  const airplane1 = new Airplane("Airplane 1", "Boeing747", 4, "Commercial");
  const airplane2 = new Airplane("Airplane 2", "Airbus A300", 5, "Private");
  
  function check(employeeId, vehicleId) {
    const employee = reservations.find(reservation => reservation.employeeId === employeeId);
    const vehicle = reservations.find(reservation => reservation.vehicleId === vehicleId);
  
    if (employee && vehicle) {
      if ((employee instanceof Pilot && vehicle instanceof Car) || (employee instanceof Driver && vehicle instanceof Airplane)) {
        console.log("Mismatch: Pilot with Car or Driver with Airplane.");
      } else {
        console.log("Match: Reservation created successfully.");
        const reservationID = reservations.length + 1;
        const reservation = new Reservation(new Date(), employeeId, vehicleId, reservationID);
        reservations.push(reservation);
      }
    } else {
      console.log("Employee or Vehicle not found.");
    }
  }
  
  check(1, 1);  
  check(4, 2); 
  check(5, 4);  

  console.log("Reservations:");
  reservations.map(reservation => console.log(reservation));
  