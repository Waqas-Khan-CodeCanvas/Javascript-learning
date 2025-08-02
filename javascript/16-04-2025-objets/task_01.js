const companyInfo = {
    companyName: "TechVision Solutions",
    founded: 2010,
    headquarters: {
      address: {
        street: "123 Innovation Blvd",
        city: "San Francisco",
        state: "CA",
        postalCode: "94103",
        country: "USA",
      },
      phone: "+1 415-555-1234",
      email: "info@techvisionsolutions.com",
    },
}
console.log("The Compnay Name is : ",companyInfo['companyName']);
console.log("The year of company was founded : ",companyInfo['founded']);
console.log("The city where they company : ",companyInfo.address.city);
// console.log("The city where they company headquarters is located : ",companyInfo[address[city]]);
console.log("The phone number of the company : ",companyInfo['phone']);
