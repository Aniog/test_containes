import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchInquiries, updateInquiryStatus, deleteInquiry } from '../api/inquiries';
import { ArrowLeft, RefreshCw, Trash2, Clock, Mail, User, Building2, Package, Loader2, AlertCircle, ChevronDown } from 'lucide-react';

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  in_review: 'bg-amber-100 text-amber-800',
  contacted: 'bg-purple-100 text-purple-800',
  quoted: 'bg-emerald-100 text-emerald-800',
  closed: 'bg-slate-100 text-slate-800',
};

const statusLabels = {
  new: 'New',
  in_review: 'In Review',
  contacted: 'Contacted',
  quoted: 'Quoted',
  closed: 'Closed',
};

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [filter, setFilter] = useState('all');

  const loadInquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = await fetchInquiries(100);
      setInquiries(rows);
    } catch (err) {
      setError(err.message || 'Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await updateInquiryStatus(id, newStatus);
      setInquiries((current) =>
        current.map((inq) =>
          inq.id === id ? { ...inq, data: { ...inq.data, status: newStatus } } : inq
        )
      );
    } catch (err) {
      setError(err.message || 'Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    setUpdatingId(id);
    try {
      await deleteInquiry(id);
      setInquiries((current) => current.filter((inq) => inq.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete inquiry');
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredInquiries = filter === 'all'
    ? inquiries
    : inquiries.filter((inq) => inq.data?.status === filter);

  const getSchemaData = (entity) => entity?.data ?? {};

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700">
                <ArrowLeft className="w-4 h-4" />
                Back to site
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={loadInquiries}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mt-4">Sourcing Inquiries</h1>
          <p className="text-sm text-slate-500 mt-1">
            {inquiries.length} total inquiry{inquiries.length !== 1 ? 'ies' : 'y'} received
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['all', 'new', 'in_review', 'contacted', 'quoted', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                filter === status
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {status === 'all' ? 'All' : statusLabels[status]}
              {status !== 'all' && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({inquiries.filter((i) => i.data?.status === status).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-teal-600 animate-spin" />
            <span className="ml-2 text-slate-500">Loading inquiries...</span>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200">
            <Mail className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">
              {filter === 'all' ? 'No inquiries yet.' : `No ${statusLabels[filter]} inquiries.`}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Source</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredInquiries.map((inq) => {
                    const d = getSchemaData(inq);
                    return (
                      <tr key={inq.id} className="hover:bg-slate-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400 shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-slate-800">{d.name}</p>
                              <p className="text-xs text-slate-500">{d.email}</p>
                              {d.company && (
                                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                  <Building2 className="w-3 h-3" />
                                  {d.company}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-start gap-1.5">
                            <Package className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm text-slate-700">{d.product}</p>
                              {d.quantity && (
                                <p className="text-xs text-slate-500">{d.quantity}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-slate-500">{d.source || 'website'}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            {inq.created_at
                              ? new Date(inq.created_at).toLocaleDateString()
                              : 'N/A'}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <select
                              value={d.status || 'new'}
                              onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                              disabled={updatingId === inq.id}
                              className={`appearance-none text-xs font-medium px-2.5 py-1 rounded-full border-0 cursor-pointer ${statusColors[d.status || 'new']}`}
                            >
                              {Object.entries(statusLabels).map(([value, label]) => (
                                <option key={value} value={value}>{label}</option>
                              ))}
                            </select>
                            <ChevronDown className="w-3 h-3 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => handleDelete(inq.id)}
                            disabled={updatingId === inq.id}
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete inquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Inquiry detail cards for mobile */}
        <div className="mt-6 space-y-3 lg:hidden">
          {filteredInquiries.map((inq) => {
            const d = getSchemaData(inq);
            return (
              <div key={inq.id} className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{d.name}</p>
                    <p className="text-xs text-slate-500">{d.email}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[d.status || 'new']}`}>
                    {statusLabels[d.status || 'new']}
                  </span>
                </div>
                <p className="text-sm text-slate-700 mb-1">{d.product}</p>
                {d.quantity && <p className="text-xs text-slate-500 mb-2">{d.quantity}</p>}
                {d.message && (
                  <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded mb-2">{d.message}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {inq.created_at ? new Date(inq.created_at).toLocaleDateString() : ''}
                  </span>
                  <div className="flex items-center gap-1">
                    <select
                      value={d.status || 'new'}
                      onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                      disabled={updatingId === inq.id}
                      className="text-xs border border-slate-200 rounded px-2 py-1"
                    >
                      {Object.entries(statusLabels).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleDelete(inq.id)}
                      disabled={updatingId === inq.id}
                      className="p-1 text-slate-400 hover:text-red-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminInquiries;
