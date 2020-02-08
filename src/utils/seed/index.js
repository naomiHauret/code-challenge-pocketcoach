// Generate data

export function seed(number) {

    const offers = {}
  
    const dd = new Date()
  
    for (let i = 0; i < number; i++) {
  
      offers[i] = {
  
        id: i,
  
        date: new Date(dd.setMinutes(dd.getMinutes() + i * number)),
  
        amount: Math.random() * number,
  
        bid: 9.5 + Math.random(),
  
      }
  
    }
  
    return offers
  
  }