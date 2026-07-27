import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  fetchInquiries,
  updateInquiryStatus,
  deleteInquiry,
  getErrorMessage,
} from "@/api/inquiries";
import {
  Mail,
  Phone,
  Building2,
  Package,
  Calendar,
  Trash2,
  ChevronDown,
  Loader2,
  AlertCircle,
  Inbox,
  Filter,
} from "lucide-react";

const statusLabels = {
  new: "New",
  in_review: "In Review",
  quoted: "Quoted",
  closed: "Closed",
};

const statusStyles = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  in_review: "bg-amber-50 text-amber-700 border-amber-200",
  quoted: "bg-emerald-50 text-emerald-700 border-emerald-200",
  closed: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const loadInquiries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = await fetchInquiries({
        status: statusFilter || undefined,
      });
      setInquiries(rows);
    } catch (err) {
      setError(err.message || "Failed to load inquiries");
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadInquiries();
  }, [loadInquiries]);

  const handleStatusChange = async (inquiry, newStatus) => {
    setUpdatingId(inquiry.id);
    try {
      const updated = await updateInquiryStatus(inquiry, newStatus);
      setInquiries((current) =>
        current.map((item) => (item.id === updated.id ? updated : item))
      );
    } catch (err) {
      setError(err.message || "Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (inquiry) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?"))
      return;
    setDeletingId(inquiry.id);
    try {
      await deleteInquiry(inquiry);
      setInquiries((current) => current.filter((item) => item.id !== inquiry.id));
    } catch (err) {
      setError(err.message || "Failed to delete inquiry");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Sourcing Inquiries</h1>
            <p className="text-slate-500 mt-1">
              Manage and respond to quote requests from potential buyers.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="text-sm text-slate-700 bg-transparent outline-none"
              >
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="in_review">In Review</option>
                <option value="quoted">Quoted</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <Link
              to="/"
              className="text-sm text-amber-600 font-medium hover:text-amber-700"
            >
              Back to Site
            </Link>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-amber-600 animate-spin" />
          </div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
            <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              No inquiries yet
            </h3>
            <p className="text-slate-500">
              {statusFilter
                ? `No inquiries with status "${statusLabels[statusFilter]}".`
                : "Inquiries will appear here when buyers submit the contact form."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => {
              const data = inquiry.data || {};
              return (
                <div
                  key={inquiry.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {data.name}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${
                            statusStyles[data.status] || statusStyles.new
                          }`}
                        >
                          {statusLabels[data.status] || "New"}
                        </span>
                        {updatingId === inquiry.id && (
                          <Loader2 className="w-4 h-4 text-amber-600 animate-spin" />
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="truncate">{data.email}</span>
                        </div>
                        {data.company && (
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="truncate">{data.company}</span>
                          </div>
                        )}
                        {data.phone && (
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{data.phone}</span>
                          </div>
                        )}
                        {data.product && (
                          <div className="flex items-center gap-2 text-sm text-slate-600 sm:col-span-2 lg:col-span-3">
                            <Package className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="truncate">{data.product}</span>
                          </div>
                        )}
                        {data.volume && (
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="text-slate-400 text-xs font-medium uppercase">
                              Vol:
                            </span>
                            <span>{data.volume}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="w-4 h-4 shrink-0" />
                          <span>
                            {data.created_at
                              ? new Date(data.created_at).toLocaleString()
                              : "—"}
                          </span>
                        </div>
                      </div>

                      {data.message && (
                        <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3 border border-slate-100">
                          {data.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="relative">
                        <select
                          value={data.status || "new"}
                          onChange={(e) =>
                            handleStatusChange(inquiry, e.target.value)
                          }
                          disabled={updatingId === inquiry.id}
                          className="appearance-none bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none disabled:opacity-50"
                        >
                          <option value="new">New</option>
                          <option value="in_review">In Review</option>
                          <option value="quoted">Quoted</option>
                          <option value="closed">Closed</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      <button
                        onClick={() => handleDelete(inquiry)}
                        disabled={deletingId === inquiry.id}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Delete inquiry"
                      >
                        {deletingId === inquiry.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
