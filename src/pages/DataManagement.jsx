import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Database, Search, Filter, Eye, Trash2, Star, Calendar, Clock, User, Gamepad2, Loader2, AlertCircle } from 'lucide-react'
import { formatDate, getPlatformColor } from '@/lib/utils'

const DataManagement = () => {
  const [favoriteGames, setFavoriteGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [filteredGames, setFilteredGames] = useState([])
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const platforms = ['All', 'Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Mobile', 'Other']

  useEffect(() => {
    fetchFavoriteGames()
  }, [])

  useEffect(() => {
    filterGames()
  }, [favoriteGames, searchTerm, selectedPlatform])

  const fetchFavoriteGames = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('FavoriteGame')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      const gamesList = dataPayload.list || []
      
      // Sort by creation date (newest first)
      const sortedGames = gamesList.sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      )
      
      setFavoriteGames(sortedGames)
    } catch (err) {
      console.error('Failed to fetch favorite games:', err)
      setError(err.message || 'Failed to load favorite games')
    } finally {
      setLoading(false)
    }
  }

  const filterGames = () => {
    let filtered = favoriteGames

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(game =>
        game.data?.game_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.data?.visitor_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.data?.reason?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by platform
    if (selectedPlatform !== 'All') {
      filtered = filtered.filter(game => game.data?.platform === selectedPlatform)
    }

    setFilteredGames(filtered)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this entry?')) return

    try {
      const { error } = await supabase
        .from('FavoriteGame')
        .delete()
        .eq('id', id)

      if (error) throw error

      // Remove from local state
      setFavoriteGames(prev => prev.filter(game => game.id !== id))
      alert('Entry deleted successfully')
    } catch (err) {
      console.error('Failed to delete entry:', err)
      alert('Failed to delete entry')
    }
  }

  const openModal = (entry) => {
    setSelectedEntry(entry)
    setShowModal(true)
  }

  const closeModal = () => {
    setSelectedEntry(null)
    setShowModal(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
          <AlertCircle size={20} />
          <span>Error: {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Database className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Data Management</h1>
          </div>
          <p className="text-gray-600">
            Manage and view all favorite game submissions from visitors
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Gamepad2 className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{favoriteGames.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <User className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Unique Visitors</p>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(favoriteGames.map(g => g.data?.visitor_name)).size}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">
                  {favoriteGames.filter(g => g.data?.rating).length > 0 
                    ? (favoriteGames.reduce((sum, g) => sum + (g.data?.rating || 0), 0) / 
                       favoriteGames.filter(g => g.data?.rating).length).toFixed(1)
                    : 'N/A'
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Play Hours</p>
                <p className="text-2xl font-bold text-gray-900">
                  {favoriteGames.reduce((sum, g) => sum + (g.data?.play_time || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search games, visitors, or reasons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Platform Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {filteredGames.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {favoriteGames.length === 0 
                  ? 'No favorite game submissions yet.' 
                  : 'No entries match your search criteria.'
                }
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Visitor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Game
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Platform
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Play Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredGames.map((game) => (
                    <tr key={game.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {game.data?.visitor_name || 'Anonymous'}
                          </div>
                          {game.data?.visitor_email && (
                            <div className="text-sm text-gray-500">
                              {game.data.visitor_email}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {game.data?.game_name || 'Unknown Game'}
                        </div>
                        {game.data?.genre && (
                          <div className="text-sm text-gray-500">
                            {game.data.genre}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white ${getPlatformColor(game.data?.platform)}`}>
                          {game.data?.platform || 'Unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {game.data?.rating ? (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">{game.data.rating}/10</span>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">No rating</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {game.data?.play_time ? `${game.data.play_time}h` : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(game.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openModal(game)}
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(game.id)}
                            className="text-red-600 hover:text-red-900 p-1"
                            title="Delete Entry"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal for viewing details */}
        {showModal && selectedEntry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Game Details
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Visitor Name</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.visitor_name || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.visitor_email || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Game Name</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.game_name || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Platform</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.platform || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Play Time</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.play_time ? `${selectedEntry.data.play_time} hours` : 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Rating</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.rating ? `${selectedEntry.data.rating}/10` : 'No rating'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Genre</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.genre || 'Not specified'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Play Date</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.last_play_date ? formatDate(selectedEntry.data.last_play_date) : 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Favorite Aspect</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.favorite_aspect || 'Not specified'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Would Recommend</label>
                      <p className="text-sm text-gray-900">{selectedEntry.data?.would_recommend ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why they love this game</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">
                      {selectedEntry.data?.reason || 'No reason provided'}
                    </p>
                  </div>

                  <div className="text-xs text-gray-500 pt-4 border-t">
                    Submitted on: {formatDate(selectedEntry.created_at)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DataManagement