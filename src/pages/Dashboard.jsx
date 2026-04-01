import React, { useState, useEffect } from 'react'
import { Plus, Grid, User, Settings, Calendar } from 'lucide-react'
import Board from '@/components/board/Board'
import { boardApi } from '@/api/trello-api'
import { cn } from '@/lib/utils'

const Dashboard = () => {
  const [boards, setBoards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedBoard, setSelectedBoard] = useState(null)
  const [showCreateBoard, setShowCreateBoard] = useState(false)
  const [newBoardData, setNewBoardData] = useState({
    title: '',
    description: '',
    background_color: '#0079bf'
  })

  useEffect(() => {
    fetchBoards()
  }, [])

  const fetchBoards = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const responseData = await boardApi.getAll()
      const dataPayload = responseData?.data || {}
      setBoards(dataPayload.list || [])
    } catch (err) {
      console.error('Failed to fetch boards:', err)
      setError(err.message || 'Failed to load boards')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateBoard = async () => {
    if (!newBoardData.title.trim()) return

    try {
      const boardData = {
        ...newBoardData,
        title: newBoardData.title.trim(),
        created_by: 'current-user' // In a real app, this would be the authenticated user ID
      }

      const responseData = await boardApi.create(boardData)
      
      if (responseData?.success) {
        const createdBoard = responseData.data
        setBoards(prev => [createdBoard, ...prev])
        setNewBoardData({ title: '', description: '', background_color: '#0079bf' })
        setShowCreateBoard(false)
      }
    } catch (err) {
      console.error('Failed to create board:', err)
      alert('Failed to create board: ' + err.message)
    }
  }

  const handleEditBoard = (board) => {
    const newTitle = prompt('Enter new board title:', board.data?.title)
    if (newTitle && newTitle.trim() !== board.data?.title) {
      updateBoard(board.id, { title: newTitle.trim() })
    }
  }

  const updateBoard = async (boardId, updates) => {
    try {
      const responseData = await boardApi.update(boardId, updates)
      
      if (responseData?.success) {
        const updatedBoard = responseData.data
        setBoards(prev => prev.map(board => board.id === boardId ? updatedBoard : board))
        if (selectedBoard?.id === boardId) {
          setSelectedBoard(updatedBoard)
        }
      }
    } catch (err) {
      console.error('Failed to update board:', err)
      alert('Failed to update board: ' + err.message)
    }
  }

  const handleDeleteBoard = async (boardId) => {
    if (!confirm('Are you sure you want to delete this board? This action cannot be undone.')) return

    try {
      const responseData = await boardApi.delete(boardId)
      
      if (responseData?.success) {
        const deletedId = responseData.data.id
        setBoards(prev => prev.filter(board => board.id !== deletedId))
        if (selectedBoard?.id === deletedId) {
          setSelectedBoard(null)
        }
      }
    } catch (err) {
      console.error('Failed to delete board:', err)
      alert('Failed to delete board: ' + err.message)
    }
  }

  const backgroundColors = [
    '#0079bf', '#d29034', '#519839', '#b04632', '#89609e', '#cd5a91', '#4bbf6b', '#00aecc'
  ]

  // If a board is selected, show the board view
  if (selectedBoard) {
    return (
      <Board
        board={selectedBoard}
        onBack={() => setSelectedBoard(null)}
        onEditBoard={handleEditBoard}
      />
    )
  }

  // Show dashboard with board list
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Grid className="w-8 h-8 text-blue-600" />
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Team Boards</h1>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Current User</span>
              </div>
              <div className="sm:hidden">
                <User className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Boards</h2>
          <p className="text-gray-600">Organize your projects and collaborate with your team</p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading boards...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-red-600 bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
            <p>Error: {error}</p>
            <button 
              onClick={fetchBoards}
              className="mt-2 text-sm text-red-700 hover:text-red-800 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Boards grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Create new board card */}
            {showCreateBoard ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <input
                  type="text"
                  value={newBoardData.title}
                  onChange={(e) => setNewBoardData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Board title"
                  className="w-full p-2 text-sm border border-gray-300 rounded mb-3 outline-none focus:border-blue-500"
                  autoFocus
                />
                <textarea
                  value={newBoardData.description}
                  onChange={(e) => setNewBoardData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Board description (optional)"
                  className="w-full p-2 text-sm border border-gray-300 rounded mb-3 outline-none focus:border-blue-500 resize-none"
                  rows={2}
                />
                <div className="mb-3">
                  <p className="text-xs text-gray-600 mb-2">Background Color:</p>
                  <div className="flex gap-2 flex-wrap">
                    {backgroundColors.map(color => (
                      <button
                        key={color}
                        onClick={() => setNewBoardData(prev => ({ ...prev, background_color: color }))}
                        className={cn(
                          "w-6 h-6 rounded border-2 transition-all",
                          newBoardData.background_color === color ? "border-gray-800 scale-110" : "border-gray-300"
                        )}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCreateBoard}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    Create Board
                  </button>
                  <button
                    onClick={() => {
                      setShowCreateBoard(false)
                      setNewBoardData({ title: '', description: '', background_color: '#0079bf' })
                    }}
                    className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowCreateBoard(true)}
                className="bg-gray-100 hover:bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-600 hover:text-gray-800 transition-all min-h-32"
              >
                <Plus className="w-8 h-8 mb-2" />
                <span className="font-medium">Create new board</span>
              </button>
            )}

            {/* Board cards */}
            {boards.map(board => (
              <div
                key={board.id}
                onClick={() => setSelectedBoard(board)}
                className="rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden group min-h-32"
                style={{ backgroundColor: board.data?.background_color || '#0079bf' }}
              >
                <div className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-2 group-hover:underline">
                      {board.data?.title || 'Untitled Board'}
                    </h3>
                    {board.data?.description && (
                      <p className="text-white/80 text-sm line-clamp-2">
                        {board.data.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-white/70 text-xs">
                      {new Date(board.created_at).toLocaleDateString()}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteBoard(board.id)
                      }}
                      className="opacity-0 group-hover:opacity-100 text-white/70 hover:text-white text-xs transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && boards.length === 0 && !showCreateBoard && (
          <div className="text-center py-12">
            <Grid className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No boards yet</h3>
            <p className="text-gray-600 mb-6">Create your first board to start organizing your projects</p>
            <button
              onClick={() => setShowCreateBoard(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Your First Board
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard