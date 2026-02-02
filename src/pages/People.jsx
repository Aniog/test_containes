import React, { useEffect, useState } from 'react'
import { supabase } from "@/api/postgrest-client.js"
import { Loader2, AlertCircle, Search, Users, Mail, Phone, MapPin } from 'lucide-react'

const People = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')

  useEffect(() => {
    fetchPeople()
  }, [])

  const fetchPeople = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Person')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setPeople(dataPayload.list || [])

    } catch (err) {
      console.error('Fetch failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Filter people based on search term and department
  const filteredPeople = people.filter(person => {
    const matchesSearch = searchTerm === '' || 
      `${person.first_name} ${person.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesDepartment = selectedDepartment === '' || person.department === selectedDepartment
    
    return matchesSearch && matchesDepartment && person.is_active !== false
  })

  // Get unique departments for filter
  const departments = [...new Set(people.map(person => person.department).filter(Boolean))]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
          <p className="text-gray-600">Loading people...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
        <div className="text-red-500 flex gap-3 p-6 items-center bg-red-50 rounded-lg border border-red-200 max-w-md">
          <AlertCircle size={24} />
          <div>
            <h3 className="font-semibold">Error Loading People</h3>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">People Directory</h1>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, position, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <p className="text-gray-600 mt-4">
            {filteredPeople.length} {filteredPeople.length === 1 ? 'person' : 'people'} found
          </p>
        </div>
      </div>

      {/* People Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredPeople.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No people found</h3>
            <p className="text-gray-500">
              {searchTerm || selectedDepartment 
                ? "Try adjusting your search or filter criteria." 
                : "No people have been added yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPeople.map(person => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Person Card Component
const PersonCard = ({ person }) => {
  const fullName = `${person.first_name} ${person.last_name}`
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Avatar */}
      <div className="p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold">
          {person.avatar_url ? (
            <img 
              src={person.avatar_url} 
              alt={fullName}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            `${person.first_name[0]}${person.last_name[0]}`
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{fullName}</h3>
        <p className="text-blue-600 font-medium text-sm mb-2">{person.position}</p>
        {person.department && (
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {person.department}
          </span>
        )}
      </div>
      
      {/* Contact Info */}
      <div className="px-6 pb-6 space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Mail className="w-4 h-4 flex-shrink-0" />
          <a 
            href={`mailto:${person.email}`}
            className="hover:text-blue-600 transition-colors truncate"
          >
            {person.email}
          </a>
        </div>
        
        {person.phone && (
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <a 
              href={`tel:${person.phone}`}
              className="hover:text-blue-600 transition-colors"
            >
              {person.phone}
            </a>
          </div>
        )}
        
        {person.location && (
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{person.location}</span>
          </div>
        )}
        
        {person.bio && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 line-clamp-3">{person.bio}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default People