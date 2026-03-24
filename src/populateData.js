import { createTulip } from './api/tulips.js'

// Sample tulip data - 8 beautiful varieties
const sampleTulips = [
  {
    name: "Red Emperor",
    color: "red",
    description: "A stunning early-blooming tulip with vibrant red petals and a bold presence. Perfect for creating dramatic spring displays in your garden.",
    bloom_time: "Early Spring",
    height: 14,
    image_url: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop",
    planting_depth: 6,
    sun_requirement: "Full Sun",
    is_featured: true
  },
  {
    name: "Purple Prince",
    color: "purple",
    description: "An elegant deep purple tulip that adds royal sophistication to any garden. Its rich color deepens as the flower matures.",
    bloom_time: "Mid Spring",
    height: 16,
    image_url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
    planting_depth: 6,
    sun_requirement: "Full Sun",
    is_featured: false
  },
  {
    name: "Golden Apeldoorn",
    color: "yellow",
    description: "Bright golden-yellow blooms that bring sunshine to your garden. These cheerful tulips are reliable bloomers year after year.",
    bloom_time: "Mid Spring",
    height: 18,
    image_url: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=300&fit=crop",
    planting_depth: 7,
    sun_requirement: "Full Sun",
    is_featured: true
  },
  {
    name: "White Triumphator",
    color: "white",
    description: "Pure white lily-flowered tulips with elegant pointed petals. These graceful flowers add sophistication and purity to spring gardens.",
    bloom_time: "Late Spring",
    height: 20,
    image_url: "https://images.unsplash.com/photo-1615887023516-c7d2c6a44e08?w=400&h=300&fit=crop",
    planting_depth: 7,
    sun_requirement: "Partial Sun",
    is_featured: false
  },
  {
    name: "Pink Diamond",
    color: "pink",
    description: "Soft pink petals with a delicate fragrance. These romantic tulips create beautiful bouquets and add gentle color to garden borders.",
    bloom_time: "Mid Spring",
    height: 15,
    image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    planting_depth: 6,
    sun_requirement: "Full Sun",
    is_featured: true
  },
  {
    name: "Orange Emperor",
    color: "orange",
    description: "Vibrant orange blooms that create a warm, welcoming atmosphere. These bold tulips are perfect for autumn-themed spring displays.",
    bloom_time: "Early Spring",
    height: 13,
    image_url: "https://images.unsplash.com/photo-1615887023516-c7d2c6a44e08?w=400&h=300&fit=crop",
    planting_depth: 5,
    sun_requirement: "Full Sun",
    is_featured: false
  },
  {
    name: "Black Pearl",
    color: "black",
    description: "Deep burgundy-black petals that appear almost black in certain light. This dramatic tulip adds mystery and elegance to any garden.",
    bloom_time: "Late Spring",
    height: 17,
    image_url: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=300&fit=crop",
    planting_depth: 6,
    sun_requirement: "Partial Sun",
    is_featured: false
  },
  {
    name: "Lavender Dream",
    color: "lavender",
    description: "Soft lavender petals with a subtle sweet fragrance. These dreamy tulips create a calming presence in cottage gardens and romantic landscapes.",
    bloom_time: "Early Summer",
    height: 19,
    image_url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
    planting_depth: 7,
    sun_requirement: "Partial Shade",
    is_featured: false
  }
]

// Function to populate the database
export const populateTulipDatabase = async () => {
  console.log('Starting to populate tulip database...')
  
  for (let i = 0; i < sampleTulips.length; i++) {
    const tulip = sampleTulips[i]
    console.log(`Adding tulip ${i + 1}/8: ${tulip.name}`)
    
    try {
      const result = await createTulip(tulip)
      if (result.success) {
        console.log(`✅ Successfully added: ${tulip.name}`)
      } else {
        console.error(`❌ Failed to add ${tulip.name}:`, result.error)
      }
    } catch (error) {
      console.error(`❌ Error adding ${tulip.name}:`, error)
    }
    
    // Small delay to avoid overwhelming the API
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  
  console.log('Finished populating tulip database!')
}

// Auto-run if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment - expose function globally
  window.populateTulipDatabase = populateTulipDatabase
}