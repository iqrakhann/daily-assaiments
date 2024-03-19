

  // EXAMPLE 01

   type user = {
    streetName:string,
    city:string,
    country:string,
    zipcode:string,
   };

    let user = {
        streetName: "1OA",
        city: "karachi",
        country: "pakistan",
        zipcode: "75420",
    };
     console.log(user);

// **EXAMPLER** 02
 
let guest: string[] = ["guest1","guest2"]

 interface guest {
    name:string,
    invite:string,
    eventday:string,
    guestcount:string,
};

let guest1 = {
    name:"amna",
    invite:"for A dinner",
    eventday:"sunday",
    guestcount:"3 person each house",
};

 let guest2 = {
    name:"fatima",
    invite:"for A lunch",
    eventday:"friday",
    guestcount:"5 person each house"
 };
 
  console.log(guest1);
  console.log(guest2);

// EXAMPLE 03

// ** QUADEAZAM HOUL LIFE **

interface QUADEAZAM {
    name:string,
    fatherName:string,
    motherName:string,
    daughterNAme:string,
    age:string,
    born:string,
    aducation:string,
    Hobbies:string,
    founder:string,
    earlyeduc:string,
    president:string,
    died:string,
    tomb:string,


}

let QUADEAZAM = {
    name: "Quadeazam muhammad Ali jinnah",
    fatherName: "poonjah jinnah",
    motherName: "Mithibai jinnah",
    daughterName: "Dinna Wadia",
    age: "72 years",
    born: "25th dec 1876 in karachi",
    aducation: "England for higher education",
    Hobbies: "read books",
    founder: "founder of pakistan",
    earlyeduc: "in karachi and then he want to england",
    president: "Muslim league 1934",
    died: "11 September 1948",
    tomb: "Mazar e Quaid(karachi)",

};

console.log(QUADEAZAM);