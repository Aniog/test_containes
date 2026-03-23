// Sample data seeding for the gaming website
// This would typically be run once to populate the database with initial data

import { supabase } from './api/postgrest-client.js'

// Sample games data
const sampleGames = [
  {
    data: {
      title: "Cyberpunk 2077",
      description: "An open-world, action-adventure RPG set in the dark future of Night City.",
      platform: "Steam",
      genre: "RPG",
      price: 29.99,
      original_price: 59.99,
      discount_percentage: 50,
      image_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      rating: 8.5,
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      is_featured: true,
      is_on_sale: true,
      stock_quantity: 100,
      release_date: "2020-12-10"
    }
  },
  {
    data: {
      title: "The Witcher 3: Wild Hunt",
      description: "A story-driven open world RPG set in a visually stunning fantasy universe.",
      platform: "Steam",
      genre: "RPG",
      price: 9.99,
      original_price: 39.99,
      discount_percentage: 75,
      image_url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      rating: 9.3,
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      is_featured: true,
      is_on_sale: true,
      stock_quantity: 150,
      release_date: "2015-05-19"
    }
  },
  {
    data: {
      title: "Halo Infinite",
      description: "Master Chief returns in the most expansive Master Chief story yet.",
      platform: "Xbox",
      genre: "Action",
      price: 39.99,
      image_url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop",
      rating: 8.7,
      developer: "343 Industries",
      publisher: "Microsoft Studios",
      is_featured: true,
      stock_quantity: 200,
      release_date: "2021-12-08"
    }
  }
]

// Sample deals data
const sampleDeals = [
  {
    data: {
      game_title: "Elden Ring",
      platform: "Steam",
      original_price: 59.99,
      sale_price: 35.99,
      discount_percentage: 40,
      deal_type: "Weekly Sale",
      start_date: "2024-03-20T00:00:00Z",
      end_date: "2024-03-27T23:59:59Z",
      image_url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
      is_active: true,
      is_featured: true,
      genre: "Action RPG",
      rating: 9.2,
      store_url: "https://store.steampowered.com"
    }
  },
  {
    data: {
      game_title: "God of War",
      platform: "PlayStation",
      original_price: 49.99,
      sale_price: 19.99,
      discount_percentage: 60,
      deal_type: "Flash Sale",
      start_date: "2024-03-22T00:00:00Z",
      end_date: "2024-03-25T23:59:59Z",
      image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      is_active: true,
      is_featured: true,
      genre: "Action",
      rating: 9.0,
      store_url: "https://store.playstation.com"
    }
  }
]

// Sample news data
const sampleNews = [
  {
    data: {
      headline: "Steam Summer Sale 2024 Breaks Records",
      content: "Valve's annual Steam Summer Sale has broken previous records with over 50,000 games on discount...",
      summary: "This year's Steam Summer Sale features unprecedented discounts across thousands of titles.",
      platform: "Steam",
      category: "Sale",
      source: "GameHub News",
      author: "Alex Johnson",
      image_url: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=600&fit=crop",
      published_date: "2024-03-23T10:00:00Z",
      is_breaking: false,
      is_featured: true
    }
  },
  {
    data: {
      headline: "PlayStation 6 Development Confirmed",
      content: "Sony has officially confirmed that development of the PlayStation 6 console is underway...",
      summary: "Sony confirms next-generation console development with expected release in 2028.",
      platform: "PlayStation",
      category: "Hardware",
      source: "Gaming Weekly",
      author: "Sarah Chen",
      image_url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop",
      published_date: "2024-03-22T14:30:00Z",
      is_breaking: true,
      is_featured: true
    }
  }
]

// Sample articles data
const sampleArticles = [
  {
    data: {
      title: "The Evolution of Open-World Gaming",
      content: "Open-world games have transformed dramatically over the past decade...",
      excerpt: "Exploring how open-world design has evolved and what the future holds for this popular genre.",
      author: "Mike Rodriguez",
      category: "Opinion",
      tags: ["open-world", "game-design", "analysis"],
      featured_image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      published_date: "2024-03-20",
      is_published: true,
      is_featured: true,
      read_time: 8,
      view_count: 1250
    }
  },
  {
    data: {
      title: "Cyberpunk 2077: Phantom Liberty Review",
      content: "CD Projekt Red's latest expansion brings Night City back to life...",
      excerpt: "Our comprehensive review of Cyberpunk 2077's major expansion and how it addresses the base game's issues.",
      author: "Emma Thompson",
      category: "Review",
      tags: ["cyberpunk-2077", "expansion", "review"],
      featured_image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      published_date: "2024-03-18",
      is_published: true,
      is_featured: true,
      read_time: 12,
      view_count: 2100
    }
  }
]

// Function to seed the database
export const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...')

    // Seed games
    for (const game of sampleGames) {
      const { error } = await supabase
        .from('GameItem')
        .insert(game)
      
      if (error) {
        console.error('Error seeding game:', error)
      } else {
        console.log('Seeded game:', game.data.title)
      }
    }

    // Seed deals
    for (const deal of sampleDeals) {
      const { error } = await supabase
        .from('Deal')
        .insert(deal)
      
      if (error) {
        console.error('Error seeding deal:', error)
      } else {
        console.log('Seeded deal:', deal.data.game_title)
      }
    }

    // Seed news
    for (const news of sampleNews) {
      const { error } = await supabase
        .from('NewsItem')
        .insert(news)
      
      if (error) {
        console.error('Error seeding news:', error)
      } else {
        console.log('Seeded news:', news.data.headline)
      }
    }

    // Seed articles
    for (const article of sampleArticles) {
      const { error } = await supabase
        .from('Article')
        .insert(article)
      
      if (error) {
        console.error('Error seeding article:', error)
      } else {
        console.log('Seeded article:', article.data.title)
      }
    }

    console.log('Database seeding completed!')

  } catch (error) {
    console.error('Error during database seeding:', error)
  }
}

// Uncomment the line below to run the seeding
// seedDatabase()