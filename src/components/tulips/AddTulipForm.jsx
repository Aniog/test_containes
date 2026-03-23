import React, { useState } from 'react';
import { supabase } from '@/api/postgrest-client.js';
import { Plus, Loader2 } from 'lucide-react';

const AddTulipForm = ({ onTulipAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    description: '',
    bloom_season: 'mid_spring',
    height: '',
    image_url: '',
    is_featured: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const formatPayload = (rawData) => {
    return {
      data: {
        name: rawData.name,
        color: rawData.color,
        description: rawData.description,
        bloom_season: rawData.bloom_season,
        height: rawData.height ? Number(rawData.height) : null,
        image_url: rawData.image_url || null,
        is_featured: Boolean(rawData.is_featured)
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.color || !formData.description) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = formatPayload(formData);
      console.log('Adding tulip:', payload);

      const { data: responseData, error } = await supabase
        .from('TulipFlower')
        .insert(payload)
        .select();

      if (error) {
        console.error('Add tulip error:', error);
        throw error;
      }

      console.log('Tulip added successfully:', responseData);
      
      // Reset form
      setFormData({
        name: '',
        color: '',
        description: '',
        bloom_season: 'mid_spring',
        height: '',
        image_url: '',
        is_featured: false
      });
      
      setIsOpen(false);
      
      // Notify parent component
      if (onTulipAdded && responseData?.data) {
        onTulipAdded(responseData.data);
      }

    } catch (err) {
      console.error('Failed to add tulip:', err);
      alert('Failed to add tulip. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="text-center mb-8">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
        >
          <Plus className="w-5 h-5" />
          Add New Tulip
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Add New Tulip</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="e.g., Red Emperor"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color *
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="e.g., Red, Pink, Yellow"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="Describe this beautiful tulip..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bloom Season
            </label>
            <select
              name="bloom_season"
              value={formData.bloom_season}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="early_spring">Early Spring</option>
              <option value="mid_spring">Mid Spring</option>
              <option value="late_spring">Late Spring</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="e.g., 45"
            />
          </div>

          <div className="flex items-center">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                name="is_featured"
                checked={formData.is_featured}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
              />
              Featured
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="https://example.com/tulip-image.jpg"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Adding...
              </>
            ) : (
              'Add Tulip'
            )}
          </button>
          
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTulipForm;