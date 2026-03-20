import React, { useState, useEffect } from 'react'
import { getContactSubmissions, updateContactStatus } from '../api/contact.js'
import { Mail, User, MessageSquare, Clock, CheckCircle, AlertCircle, Archive } from 'lucide-react'

const ContactAdmin = () => {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      setError('')
      
      const result = await getContactSubmissions()
      
      if (result.success) {
        const dataPayload = result.data?.data || {}
        setSubmissions(dataPayload.list || [])
      } else {
        setError(result.error || 'Failed to load submissions')
      }
    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const result = await updateContactStatus(id, newStatus)
      
      if (result.success) {
        // Update local state
        setSubmissions(prev => 
          prev.map(item => 
            item.id === id ? { ...item, status: newStatus } : item
          )
        )
      } else {
        alert('Failed to update status: ' + result.error)
      }
    } catch (error) {
      console.error('Status update failed:', error)
      alert('Failed to update status')
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new': return <Clock className="w-4 h-4 text-blue-500" />
      case 'read': return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'replied': return <Mail className="w-4 h-4 text-purple-500" />
      case 'archived': return <Archive className="w-4 h-4 text-gray-500" />
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'read': return 'bg-green-100 text-green-800'
      case 'replied': return 'bg-purple-100 text-purple-800'
      case 'archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-yellow-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-yellow-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
            <AlertCircle size={20} />
            <span>Error: {error}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-yellow-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <Mail className="w-10 h-10 text-pink-500" />
            Contact Submissions
          </h1>
          <p className="text-gray-600">
            Manage and respond to contact form submissions from your tulip website.
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No contact submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-400">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-500" />
                    <h3 className="text-lg font-semibold text-gray-800">{submission.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(submission.status)}`}>
                      {getStatusIcon(submission.status)}
                      {submission.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {submission.created_at && new Date(submission.created_at).toLocaleDateString()}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{submission.email}</span>
                  </div>
                  {submission.subject && (
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{submission.subject}</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">{submission.message}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleStatusUpdate(submission.id, 'read')}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors"
                  >
                    Mark as Read
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(submission.id, 'replied')}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 transition-colors"
                  >
                    Mark as Replied
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(submission.id, 'archived')}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  >
                    Archive
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactAdmin