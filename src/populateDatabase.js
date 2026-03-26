import { createTulip } from './api/tulips.js'

// Sample tulip data - 9 beautiful varieties
const sampleTulips = [
  {
    name: "Red Emperor",
    color: "Red",
    bloom_time: "Early Spring",
    height: 35,
    description: "A stunning early bloomer with vibrant red petals that create a bold statement in any garden. Known for its large, cup-shaped flowers and strong stems.",
    planting_depth: 15,
    is_perennial: false
  },
  {
    name: "Queen of Night",
    color: "Purple",
    bloom_time: "Mid Spring",
    height: 60,
    description: "An elegant tulip with deep purple, almost black petals that shimmer in the sunlight. This variety adds mystery and sophistication to garden displays.",
    planting_depth: 18,
    is_perennial: false
  },
  {
    name: "Golden Apeldoorn",
    color: "Yellow",
    bloom_time: "Mid Spring",
    height: 55,
    description: "Bright golden-yellow blooms that bring sunshine to your garden. These robust tulips are perfect for naturalizing and return year after year.",
    planting_depth: 16,
    is_perennial: true
  },
  {
    name: "Pink Impression",
    color: "Pink",
    bloom_time: "Early Spring",
    height: 45,
    description: "Soft pink petals with a delicate fragrance. This variety is beloved for its romantic appearance and reliable blooming performance.",
    planting_depth: 15,
    is_perennial: false
  },
  {
    name: "White Triumphator",
    color: "White",
    bloom_time: "Late Spring",
    height: 70,
    description: "Tall, elegant white tulips with lily-shaped flowers. Their pure white petals and graceful form make them perfect for formal garden settings.",
    planting_depth: 20,
    is_perennial: false
  },
  {
    name: "Orange Emperor",
    color: "Orange",
    bloom_time: "Early Spring",
    height: 40,
    description: "Vibrant orange blooms that capture the warmth of spring sunshine. These early bloomers are perfect for brightening up the garden after winter.",
    planting_depth: 15,
    is_perennial: false
  },
  {
    name: "Blue Parrot",
    color: "Blue",
    bloom_time: "Late Spring",
    height: 65,
    description: "Unique blue-purple petals with fringed edges that create a parrot-like appearance. This exotic variety adds texture and intrigue to any tulip collection.",
    planting_depth: 18,
    is_perennial: false
  },
  {
    name: "Black Hero",
    color: "Black",
    bloom_time: "Late Spring",
    height: 50,
    description: "Deep burgundy-black double flowers that are almost velvety in appearance. This dramatic tulip creates stunning contrast in garden beds.",
    planting_depth: 16,
    is_perennial: false
  },
  {
    name: "Spring Green",
    color: "Green",
    bloom_time: "Mid Spring",
    height: 48,
    description: "Unique green and white striped petals that offer something completely different. This variety is prized by collectors for its unusual coloring.",
    planting_depth: 16,
    is_perennial: false
  }
]

// Function to populate the database
export const populateDatabase = async () => {
  console.log('Starting to populate database with sample tulips...')
  
  const results = []
  
  for (let i = 0; i < sampleTulips.length; i++) {
    const tulip = sampleTulips[i]
    console.log(`Adding tulip ${i + 1}/9: ${tulip.name}`)
    
    try {
      const result = await createTulip(tulip)
      if (result.success) {
        console.log(`✅ Successfully added: ${tulip.name}`)
        results.push({ success: true, tulip: tulip.name })
      } else {
        console.error(`❌ Failed to add ${tulip.name}:`, result.error)
        results.push({ success: false, tulip: tulip.name, error: result.error })
      }
    } catch (error) {
      console.error(`❌ Error adding ${tulip.name}:`, error)
      results.push({ success: false, tulip: tulip.name, error: error.message })
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  
  const successful = results.filter(r => r.success).length
  console.log(`\n🌷 Database population complete: ${successful}/${sampleTulips.length} tulips added successfully`)
  
  return results
}

// Export sample data for reference
export { sampleTulips }