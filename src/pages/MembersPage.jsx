import React, { useState, useEffect } from 'react'
import { Users, Search, Filter, Check, X, Eye, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/api/postgrest-client.js'
import { formatDate, formatPayload } from '@/lib/utils'

const MembersPage = ({ user }) => {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedMember, setSelectedMember] = useState(null)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('Member')
        .select('*')

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setMembers(dataPayload.list || [])
    } catch (err) {
      console.error('Fetch members failed:', err)
      setError(err.message || '获取会员列表失败')
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (memberId) => {
    try {
      const updates = { status: 'approved' }
      const formattedPayload = formatPayload(updates, 'Member')

      const { data: responseData, error } = await supabase
        .from('Member')
        .update(formattedPayload)
        .eq('id', memberId)
        .select()

      if (error || !responseData?.success) {
        console.error('Approve failed:', error)
        alert('审核通过失败')
        return
      }

      const updatedMember = responseData.data
      setMembers(prev => prev.map(member => 
        member.id === memberId ? updatedMember : member
      ))
      
      alert('会员审核通过')
    } catch (err) {
      console.error('Approve error:', err)
      alert('审核通过失败')
    }
  }

  const handleReject = async (memberId) => {
    try {
      const updates = { status: 'rejected' }
      const formattedPayload = formatPayload(updates, 'Member')

      const { data: responseData, error } = await supabase
        .from('Member')
        .update(formattedPayload)
        .eq('id', memberId)
        .select()

      if (error || !responseData?.success) {
        console.error('Reject failed:', error)
        alert('审核拒绝失败')
        return
      }

      const updatedMember = responseData.data
      setMembers(prev => prev.map(member => 
        member.id === memberId ? updatedMember : member
      ))
      
      alert('会员审核已拒绝')
    } catch (err) {
      console.error('Reject error:', err)
      alert('审核拒绝失败')
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { variant: 'warning', text: '待审核' },
      approved: { variant: 'success', text: '已通过' },
      rejected: { variant: 'destructive', text: '已拒绝' }
    }
    
    const config = statusConfig[status] || statusConfig.pending
    return (
      <Badge variant={config.variant}>
        {config.text}
      </Badge>
    )
  }

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.student_id?.includes(searchTerm)
    
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <Loader2 className="animate-spin w-8 h-8" />
        <span className="ml-2">加载中...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>错误: {error}</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            会员管理
          </h1>
          <p className="text-gray-600 mt-1">管理校友会会员信息和审核状态</p>
        </div>
        <div className="text-sm text-gray-500">
          共 {members.length} 名会员
        </div>
      </div>

      {/* 搜索和筛选 */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="搜索姓名、邮箱或学号..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="all">全部状态</option>
                <option value="pending">待审核</option>
                <option value="approved">已通过</option>
                <option value="rejected">已拒绝</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 会员列表 */}
      <div className="grid gap-4">
        {filteredMembers.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">没有找到符合条件的会员</p>
            </CardContent>
          </Card>
        ) : (
          filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {member.full_name}
                      </h3>
                      {getStatusBadge(member.status)}
                      {member.membership_fee_paid && (
                        <Badge variant="success">已缴费</Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">邮箱：</span>
                        {member.email}
                      </div>
                      <div>
                        <span className="font-medium">学号：</span>
                        {member.student_id}
                      </div>
                      <div>
                        <span className="font-medium">毕业年份：</span>
                        {member.graduation_year}
                      </div>
                      <div>
                        <span className="font-medium">学院：</span>
                        {member.college}
                      </div>
                      <div>
                        <span className="font-medium">专业：</span>
                        {member.major}
                      </div>
                      <div>
                        <span className="font-medium">现居城市：</span>
                        {member.current_city || '未填写'}
                      </div>
                    </div>

                    {member.current_company && (
                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-medium">工作：</span>
                        {member.current_company} - {member.current_position}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedMember(member)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      详情
                    </Button>
                    
                    {user?.role === 'admin' && member.status === 'pending' && (
                      <>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleApprove(member.id)}
                        >
                          <Check className="w-4 h-4 mr-1" />
                          通过
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleReject(member.id)}
                        >
                          <X className="w-4 h-4 mr-1" />
                          拒绝
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* 会员详情弹窗 */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>会员详情</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedMember(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">姓名</label>
                  <p className="text-gray-900">{selectedMember.full_name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">邮箱</label>
                  <p className="text-gray-900">{selectedMember.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">学号</label>
                  <p className="text-gray-900">{selectedMember.student_id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">联系电话</label>
                  <p className="text-gray-900">{selectedMember.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">毕业年份</label>
                  <p className="text-gray-900">{selectedMember.graduation_year}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">学院</label>
                  <p className="text-gray-900">{selectedMember.college}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">专业</label>
                  <p className="text-gray-900">{selectedMember.major}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">现居城市</label>
                  <p className="text-gray-900">{selectedMember.current_city || '未填写'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">现任职公司</label>
                  <p className="text-gray-900">{selectedMember.current_company || '未填写'}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">现任职位</label>
                  <p className="text-gray-900">{selectedMember.current_position || '未填写'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">审核状态</label>
                  <div className="mt-1">
                    {getStatusBadge(selectedMember.status)}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">缴费状态</label>
                  <div className="mt-1">
                    <Badge variant={selectedMember.membership_fee_paid ? 'success' : 'warning'}>
                      {selectedMember.membership_fee_paid ? '已缴费' : '未缴费'}
                    </Badge>
                  </div>
                </div>
              </div>
              
              {selectedMember.created_at && (
                <div>
                  <label className="text-sm font-medium text-gray-700">注册时间</label>
                  <p className="text-gray-900">{formatDate(selectedMember.created_at)}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default MembersPage