import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Clock, Mail } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function RegisterSuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold text-[#1A1A2E] mb-2">申请已提交！</h1>
        <p className="text-gray-500 mb-8">感谢您申请加入香港中文大学内地生校友会</p>

        <Card>
          <CardBody>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-medium text-amber-800">等待审核</p>
                  <p className="text-xs text-amber-600 mt-0.5">管理员将在3-5个工作日内审核您的申请及付款记录</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-medium text-blue-800">邮件通知</p>
                  <p className="text-xs text-blue-600 mt-0.5">审核结果将通过邮件通知您，请注意查收</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link to="/login">
                <Button className="w-full">登录查看状态</Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" className="w-full">返回首页</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
