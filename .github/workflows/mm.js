[
    { id: 1, name: 'Joseph' },
    { id: 2, name: 'Evalyne' },
    {},
    { id: null },
    { id: 'undefined' },
    true,
    { id: 3, name: 'Christopher' }
  ]
  let newArray = arrayofObjects.filter(obj => obj.id !== undefined && obj.name !== undefined)
  console.log(newArray)
  