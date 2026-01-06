export const products = [
  {
    id: "p1",
    name: "EcoSafe Packaging",
    category: "Packaging",
    producer: "Green Solutions Ltd.",
    status: "Published",
    updatedAt: "2024-03-15",
    declaredBy: "Green Solutions Ltd.",
    declaredOn: "2024-03-15",
    evidenceCount: 3,
    versions: [
      { version: 1, status: "Draft", date: "2024-03-01" },
      { version: 2, status: "Published", date: "2024-03-15" }
    ]
  },
  {
    id: "p2",
    name: "Organic Cotton Fabric",
    category: "Textiles",
    producer: "Natural Fibers Co.",
    status: "Submitted",
    updatedAt: "2024-03-10",
    declaredBy: "Natural Fibers Co.",
    declaredOn: "2024-03-10",
    evidenceCount: 2,
    versions: [
      { version: 1, status: "Draft", date: "2024-02-20" },
      { version: 2, status: "Submitted", date: "2024-03-10" }
    ]
  },
  {
    id: "p3",
    name: "Biodegradable Cleaner",
    category: "Cleaning Products",
    producer: "EnviroChem Inc.",
    status: "Draft",
    updatedAt: "2024-02-28",
    declaredBy: "EnviroChem Inc.",
    declaredOn: "2024-02-28",
    evidenceCount: 0,
    versions: [{ version: 1, status: "Draft", date: "2024-02-28" }]
  }
];
