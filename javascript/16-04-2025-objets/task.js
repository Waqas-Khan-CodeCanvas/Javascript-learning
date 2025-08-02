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
      phone: "‪+1 415-555-1234‬",
      email: "info@techvisionsolutions.com",
    },
    employees: [
      {
        id: 101,
        name: "Alice Johnson",
        position: "CEO",
        department: "Executive",
        contact: {
          email: "alice.j@techvisionsolutions.com",
          phone: "‪+1 415-555-5678‬",
        },
        skills: ["Leadership", "Strategic Planning", "Public Speaking"],
      },
      {
        id: 102,
        name: "Robin Hood",
        position: "CTO",
        department: "Technology",
        contact: {
          email: "bob.s@techvisionsolutions.com",
          phone: "‪+1 415-555-8765‬",
        },
        skills: ["Cloud Computing", "AI/ML", "DevOps"],
      },
    ],
    departments: [
      {
        name: "Technology",
        head: "Bob Smith",
        teams: [
          {
            teamName: "AI Research",
            members: ["Emily Carter", "John Lee"],
            currentProjects: [
              {
                projectName: "Smart Assistant",
                deadline: "2025-06-30",
                status: "In Progress",
              },
              {
                projectName: "Vision AI",
                deadline: "2025-12-15",
                status: "Planning",
              },
            ],
          },
          {
            teamName: "Web Development",
            members: ["Sarah Parker", "David Wilson"],
            currentProjects: [
              {
                projectName: "E-commerce Platform",
                deadline: "2025-03-31",
                status: "Testing",
              },
            ],
          },
        ],
      },
      {
        name: "Marketing",
        head: "Karen Davis",
        teams: [
          {
            teamName: "Social Media",
            members: ["Nina Taylor", "Paul Adams"],
            campaigns: ["Tech Expo 2025", "Summer Discounts"],
          },
        ],
      },
    ],
    products: [
      {
        name: "Vision AI",
        category: "Software",
        price: 499.99,
        features: [
          "Object Detection",
          "Facial Recognition",
          "Real-Time Analysis",
        ],
      },
      {
        name: "Smart Assistant",
        category: "Hardware",
        price: 149.99,
        features: ["Voice Control", "Smart Home Integration", "Custom Skills"],
      },
    ],
    financials: {
      revenue: 15000000,
      expenses: 12000000,
      profit: 3000000,
      currency: "USD",
    },
    partners: [
      { name: "CloudX", type: "Cloud Provider", since: 2018 },
      { name: "InnovateHub", type: "R&D Partner", since: 2020 },
    ],
    certifications: ["ISO 9001", "ISO 27001", "GDPR Compliant"],
  };
  
  for (let i = 0; i < companyInfo.employees.length; i++) {
    console.log(companyInfo.employees[i].name, companyInfo.employees[i].position);
  }

  for (let i = 0; i < companyInfo.products.length; i++) {
    console.log(`${companyInfo.products[i].name} (${companyInfo.products[i].category})  $${companyInfo.products[i].price}`);
  }