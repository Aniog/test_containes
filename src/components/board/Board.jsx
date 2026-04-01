import React, { useState, useEffect } from 'react'
import { Plus, Settings, ArrowLeft, X } from 'lucide-react'
import List from '@/components/list/List'
import { listApi, boardApi } from '@/api/trello-api'
import { cn } from '@/lib/utils'

const Board = ({ board, onBack, onEditBoard, className }) => {
  const [lists, setLists] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAddList, setShowAddList] = useState(false)
  const [newListTitle, setNewListTitle] = useState('')

  useEffect(() => {
    if (board?.id) {
      fetchLists()
    }
  }, [board?.id])

  const fetchLists = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const responseData = await listApi.getByBoardId(board.id)
      const dataPayload = responseData?.data || {}
      setLists(dataPayload.list || [])
    } catch (err) {
      console.error('Failed to fetch lists:', err)
      setError(err.message || 'Failed to load lists')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateList = async () => {
    if (!newListTitle.trim()) return

    try {
      const maxPosition = lists.length > 0 ? Math.max(...lists.map(l => l.data?.position || 0)) : 0
      
      const listData = {
        title: newListTitle.trim(),
        board_id: board.id,
        position: maxPosition + 1
      }

      const responseData = await listApi.create(listData)
      
      if (responseData?.success) {
        const createdList = responseData.data
        setLists(prev => [...prev, createdList])
        setNewListTitle('')
        setShowAddList(false)
      }
    } catch (err) {
      console.error('Failed to create list:', err)
      alert('Failed to create list: ' + err.message)
    }
  }

  const handleEditList = (list) => {
    const newTitle = prompt('Enter new list title:', list.data?.title)
    if (newTitle && newTitle.trim() !== list.data?.title) {
      updateList(list.id, { title: newTitle.trim() })
    }
  }

  const updateList = async (listId, updates) => {
    try {
      const responseData = await listApi.update(listId, updates)
      
      if (responseData?.success) {
        const updatedList = responseData.data
        setLists(prev => prev.map(list => list.id === listId ? updatedList : list))
      }
    } catch (err) {
      console.error('Failed to update list:', err)
      alert('Failed to update list: ' + err.message)
    }
  }

  const handleDeleteList = async (listId) => {
    try {
      const responseData = await listApi.delete(listId)
      
      if (responseData?.success) {
        const deletedId = responseData.data.id
        setLists(prev => prev.filter(list => list.id !== deletedId))
      }
    } catch (err) {
      console.error('Failed to delete list:', err)
      alert('Failed to delete list: ' + err.message)
    }
  }

  const boardStyle = {
    backgroundColor: board.data?.background_color || '#0079bf'
  }

  return (
    <div 
      className={cn("min-h-screen p-4", className)}
      style={boardStyle}
    >
      {/* Board header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onBack}
            className="text-white hover:bg-white/20 p-2 rounded transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-white text-lg sm:text-xl font-bold">
            {board.data?.title || 'Untitled Board'}
          </h1>
        </div>
        
        <button
          onClick={() => onEditBoard && onEditBoard(board)}
          className="text-white hover:bg-white/20 p-2 rounded transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Board description */}
      {board.data?.description && (
        <div className="mb-4">
          <p className="text-white/90 text-sm max-w-2xl">
            {board.data.description}
          </p>
        </div>
      )}

      {/* Lists container */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {loading && (
          <div className="text-white text-center py-8 w-full">
            Loading lists...
          </div>
        )}

        {error && (
          <div className="text-red-200 bg-red-900/50 p-4 rounded-lg border border-red-700">
            Error: {error}
          </div>
        )}

        {!loading && !error && lists.length === 0 && !showAddList && (
          <div className="text-white/70 text-center py-8 w-full">
            No lists yet. Create your first list to get started!
          </div>
        )}

        {!loading && !error && lists.map(list => (
          <List
            key={list.id}
            list={list}
            onEditList={handleEditList}
            onDeleteList={handleDeleteList}
            className="relative"
          />
        ))}

        {/* Add list section */}
        {showAddList ? (
          <div className="bg-gray-100 rounded-lg p-3 w-72 sm:w-80 flex-shrink-0">
            <input
              type="text"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              placeholder="Enter list title..."
              className="w-full p-2 text-sm border border-gray-300 rounded mb-2 outline-none focus:border-blue-500"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCreateList()
                }
                if (e.key === 'Escape') {
                  setShowAddList(false)
                  setNewListTitle('')
                }
              }}
            />
            <div className="flex items-center gap-2">
              <button
                onClick={handleCreateList}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Add List
              </button>
              <button
                onClick={() => {
                  setShowAddList(false)
                  setNewListTitle('')
                }}
                className="text-gray-500 hover:text-gray-700 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddList(true)}
            className="bg-white/20 hover:bg-white/30 text-white rounded-lg p-3 w-72 sm:w-80 flex-shrink-0 flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add a list</span>
            <span className="sm:hidden">Add list</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Board