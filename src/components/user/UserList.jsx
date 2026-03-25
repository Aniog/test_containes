import React from 'react'
import { User, Mail, Phone, MapPin, Building, Calendar, Heart, CheckCircle, X } from 'lucide-react'

const UserCard = ({ user, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Not provided'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getGenderDisplay = (gender) => {
    const genderMap = {
      'male': 'Male',
      'female': 'Female',
      'other': 'Other',
      'prefer_not_to_say': 'Prefer not to say'
    }
    return genderMap[gender] || 'Not specified'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {user.data?.first_name} {user.data?.last_name}
            </h3>
            <p className="text-gray-500 text-sm">
              Registered: {formatDate(user.created_at)}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          {onEdit && (
            <button
              onClick={() => onEdit(user)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Edit user"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(user.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete user"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <Mail className="h-4 w-4 mr-3 text-blue-500" />
          <span className="text-sm">{user.data?.email || 'No email provided'}</span>
        </div>
        
        {user.data?.phone && (
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-3 text-green-500" />
            <span className="text-sm">{user.data.phone}</span>
          </div>
        )}
        
        {(user.data?.city || user.data?.country) && (
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-3 text-red-500" />
            <span className="text-sm">
              {[user.data?.city, user.data?.country].filter(Boolean).join(', ') || 'Location not provided'}
            </span>
          </div>
        )}
      </div>

      {/* Personal Details */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-500">Gender:</span>
          <p className="font-medium text-gray-900">{getGenderDisplay(user.data?.gender)}</p>
        </div>
        
        <div>
          <span className="text-gray-500">Date of Birth:</span>
          <p className="font-medium text-gray-900">{formatDate(user.data?.date_of_birth)}</p>
        </div>
      </div>

      {/* Professional Information */}
      {(user.data?.occupation || user.data?.company) && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Building className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Professional</span>
          </div>
          {user.data?.occupation && (
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Role:</span> {user.data.occupation}
            </p>
          )}
          {user.data?.company && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Company:</span> {user.data.company}
            </p>
          )}
        </div>
      )}

      {/* Interests */}
      {user.data?.interests && user.data.interests.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Heart className="h-4 w-4 mr-2 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Interests</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {user.data.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Status Indicators */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4 text-xs">
          {user.data?.newsletter_subscription && (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-3 w-3 mr-1" />
              <span>Newsletter</span>
            </div>
          )}
          {user.data?.terms_accepted && (
            <div className="flex items-center text-blue-600">
              <CheckCircle className="h-3 w-3 mr-1" />
              <span>Terms Accepted</span>
            </div>
          )}
        </div>
        
        <div className="text-xs text-gray-400">
          ID: {user.id}
        </div>
      </div>
    </div>
  )
}

const UserList = ({ users, loading, error, onEdit, onDelete, onRefresh }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading users...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <X className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-lg font-medium text-red-900 mb-2">Error Loading Users</h3>
          <p className="text-red-700 mb-4">{error}</p>
          {onRefresh && (
            <button
              onClick={onRefresh}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    )
  }

  if (!users || users.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
          <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-4">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Users Found</h3>
          <p className="text-gray-600">No users have been registered yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Registered Users ({users.length})
        </h2>
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        )}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default UserList