import { populateDatabase } from './populateDatabase.js'

// Run the database population
populateDatabase().then((results) => {
  console.log('Database population results:', results)
}).catch((error) => {
  console.error('Error populating database:', error)
})