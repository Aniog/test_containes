import React, { useState, useEffect } from 'react'
import { Plus, MoreHorizontal, X } from 'lucide-react'
import Card from '@/components/card/Card'
import CardModal from '@/components/card/CardModal'
import { cardApi } from '@/api/trello-api'
import { cn } from '@/lib/utils'

const List = ({ list, onEditList, onDeleteList, onCreateCard, onEditCard, onDeleteCard, className }) => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAddCard, setShowAddCard] = useState(false)
  const [newCardTitle, setNewCardTitle] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [showCardModal, setShowCardModal] = useState(false)

  useEffect(() => {
    if (list?.id) {
      fetchCards()
    }
  }, [list?.id])

  const fetchCards = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const responseData = await cardApi.getByListId(list.id)
      const dataPayload = responseData?.data || {}
      setCards(dataPayload.list || [])
    } catch (err) {
      console.error('Failed to fetch cards:', err)
      setError(err.message || 'Failed to load cards')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateCard = async () => {
    if (!newCardTitle.trim()) return

    try {
      const maxPosition = cards.length > 0 ? Math.max(...cards.map(c => c.data?.position || 0)) : 0
      
      const cardData = {
        title: newCardTitle.trim(),
        list_id: list.id,
        position: maxPosition + 1
      }

      const responseData = await cardApi.create(cardData)
      
      if (responseData?.success) {
        const createdCard = responseData.data
        setCards(prev => [...prev, createdCard])
        setNewCardTitle('')
        setShowAddCard(false)
        onCreateCard && onCreateCard(createdCard)
      }
    } catch (err) {
      console.error('Failed to create card:', err)
      alert('Failed to create card: ' + err.message)
    }
  }

  const handleEditCard = (card) => {
    setSelectedCard(card)
    setShowCardModal(true)
  }

  const handleUpdateCard = (updatedCard) => {
    setCards(prev => prev.map(card => card.id === updatedCard.id ? updatedCard : card))
    onEditCard && onEditCard(updatedCard)
  }

  const handleDeleteCard = async (cardId) => {
    try {
      const responseData = await cardApi.delete(cardId)
      
      if (responseData?.success) {
        const deletedId = responseData.data.id
        setCards(prev => prev.filter(card => card.id !== deletedId))
        onDeleteCard && onDeleteCard(deletedId)
      }
    } catch (err) {
      console.error('Failed to delete card:', err)
      alert('Failed to delete card: ' + err.message)
    }
  }

  const handleToggleComplete = async (cardId, isCompleted) => {
    try {
      const responseData = await cardApi.update(cardId, { is_completed: isCompleted })
      
      if (responseData?.success) {
        const updatedCard = responseData.data
        setCards(prev => prev.map(card => card.id === cardId ? updatedCard : card))
      }
    } catch (err) {
      console.error('Failed to update card:', err)
      alert('Failed to update card: ' + err.message)
    }
  }

  return (
    <>
      <div className={cn("bg-gray-100 rounded-lg p-3 w-72 sm:w-80 flex-shrink-0", className)}>
        {/* List header */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 text-sm">
            {list.data?.title || 'Untitled List'} ({cards.length})
          </h2>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-500 hover:text-gray-700 p-1 rounded transition-colors"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Cards container */}
        <div className="space-y-2 mb-3 max-h-96 overflow-y-auto">
          {loading && (
            <div className="text-center py-4 text-gray-500 text-sm">
              Loading cards...
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm p-2 bg-red-50 rounded border border-red-100">
              Error: {error}
            </div>
          )}

          {!loading && !error && cards.length === 0 && (
            <div className="text-center py-4 text-gray-500 text-sm">
              No cards yet
            </div>
          )}

          {!loading && !error && cards.map(card => (
            <Card
              key={card.id}
              card={card}
              onEdit={handleEditCard}
              onDelete={handleDeleteCard}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </div>

        {/* Add card section */}
        {showAddCard ? (
          <div className="bg-white rounded-lg p-2 border border-gray-200">
            <textarea
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              placeholder="Enter a title for this card..."
              className="w-full p-2 text-sm border-none outline-none resize-none"
              rows={2}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleCreateCard()
                }
                if (e.key === 'Escape') {
                  setShowAddCard(false)
                  setNewCardTitle('')
                }
              }}
            />
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={handleCreateCard}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Add Card
              </button>
              <button
                onClick={() => {
                  setShowAddCard(false)
                  setNewCardTitle('')
                }}
                className="text-gray-500 hover:text-gray-700 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddCard(true)}
            className="w-full flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 p-2 rounded transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            Add a card
          </button>
        )}

        {/* List menu */}
        {showMenu && (
          <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20 min-w-32">
            <button
              onClick={() => {
                onEditList && onEditList(list)
                setShowMenu(false)
              }}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Edit List
            </button>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to delete this list and all its cards?')) {
                  onDeleteList && onDeleteList(list.id)
                }
                setShowMenu(false)
              }}
              className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              Delete List
            </button>
          </div>
        )}
      </div>

      {/* Card Modal */}
      <CardModal
        card={selectedCard}
        isOpen={showCardModal}
        onClose={() => {
          setShowCardModal(false)
          setSelectedCard(null)
        }}
        onUpdate={handleUpdateCard}
        onDelete={handleDeleteCard}
      />
    </>
  )
}

export default List