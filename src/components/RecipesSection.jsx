import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const recipes = [
  {
    id: 'scrambled',
    name: 'Creamy Scrambled Eggs',
    description: 'Slow-cooked over gentle heat with butter and cream for the silkiest texture.',
    time: '5 min',
    difficulty: 'Easy',
    imgId: 'recipe-img-s1a2b3',
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    description: 'Poached eggs on toasted English muffins with Canadian bacon and hollandaise sauce.',
    time: '20 min',
    difficulty: 'Medium',
    imgId: 'recipe-img-e4c5d6',
  },
  {
    id: 'frittata',
    name: 'Italian Frittata',
    description: 'A thick, open-faced omelette loaded with vegetables, cheese, and fresh herbs.',
    time: '25 min',
    difficulty: 'Easy',
    imgId: 'recipe-img-f7e8g9',
  },
  {
    id: 'souffle',
    name: 'Classic Soufflé',
    description: 'A light, airy French masterpiece that rises dramatically in the oven.',
    time: '45 min',
    difficulty: 'Hard',
    imgId: 'recipe-img-o0h1i2',
  },
  {
    id: 'shakshuka',
    name: 'Shakshuka',
    description: 'Eggs poached in a spiced tomato and pepper sauce — a Middle Eastern classic.',
    time: '30 min',
    difficulty: 'Easy',
    imgId: 'recipe-img-k3j4k5',
  },
  {
    id: 'deviled',
    name: 'Deviled Eggs',
    description: 'Hard-boiled eggs filled with a creamy, tangy yolk mixture. A party favorite.',
    time: '20 min',
    difficulty: 'Easy',
    imgId: 'recipe-img-d6l7m8',
  },
]

const difficultyColor = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-red-100 text-red-700',
}

export default function RecipesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#fffbf2] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            id="recipes-label"
            className="text-amber-600 uppercase tracking-[0.25em] text-xs mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            In the Kitchen
          </p>
          <h2
            id="recipes-title"
            className="text-4xl md:text-5xl font-bold text-[#2c1a0e]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Beloved Egg Recipes
          </h2>
          <p
            id="recipes-subtitle"
            className="text-[#5a3e2b] mt-4 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            From quick weekday breakfasts to elegant dinner party showstoppers, eggs shine in every role.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="overflow-hidden h-52">
                <img
                  alt={recipe.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={recipe.imgId}
                  data-strk-img={`[recipe-desc-${recipe.id}] [recipe-name-${recipe.id}] [recipes-subtitle] [recipes-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColor[recipe.difficulty]}`} style={{ fontFamily: "'Lato', sans-serif" }}>
                    {recipe.difficulty}
                  </span>
                  <span className="text-[#5a3e2b]/60 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                    ⏱ {recipe.time}
                  </span>
                </div>
                <h3
                  id={`recipe-name-${recipe.id}`}
                  className="text-xl font-bold text-[#2c1a0e] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {recipe.name}
                </h3>
                <p
                  id={`recipe-desc-${recipe.id}`}
                  className="text-[#5a3e2b] text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {recipe.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
