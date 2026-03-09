import React from 'react'
import { Users, Calendar, CreditCard, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getCurrentYear } from '@/lib/utils'

const HomePage = ({ user, onNavigate }) => {
  const features = [
    {
      icon: Users,
      title: '会员管理',
      description: '注册成为校友会会员，审核认证，管理会员信息',
      action: () => onNavigate('members')
    },
    {
      icon: Calendar,
      title: '活动管理',
      description: '发布和参与校友活动，线上线下聚会交流',
      action: () => onNavigate('activities')
    },
    {
      icon: CreditCard,
      title: '缴费管理',
      description: '会费缴纳，活动费用支付，财务透明管理',
      action: () => onNavigate('payments')
    }
  ]

  const stats = [
    { label: '注册会员', value: '1,200+', icon: Users },
    { label: '举办活动', value: '150+', icon: Calendar },
    { label: '活跃城市', value: '25+', icon: Award }
  ]

  return (
    <div className="space-y-8">
      {/* 欢迎横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            欢迎来到香港中文大学内地生校友会
          </h1>
          <p className="text-xl mb-6 text-blue-100">
            连接全球中大内地校友，共建温暖的校友网络
          </p>
          {!user && (
            <div className="flex space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onNavigate('register')}
              >
                立即注册
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
                onClick={() => onNavigate('login')}
              >
                会员登录
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* 统计数据 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 功能介绍 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">主要功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={feature.action}
                    disabled={!user && feature.title !== '会员管理'}
                  >
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* 关于我们 */}
      <Card>
        <CardHeader>
          <CardTitle>关于校友会</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              香港中文大学内地生校友会成立于2010年，致力于为全球中大内地校友提供一个温暖的交流平台。
              我们通过定期举办各类活动，帮助校友们保持联系，分享经验，互相支持。
            </p>
            <p className="text-gray-600 mb-4">
              无论您身在何处，从事何种职业，我们都欢迎您加入这个大家庭。
              让我们一起传承中大精神，共创美好未来。
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                成立于 2010 年
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                覆盖全球 25+ 城市
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Award className="w-4 h-4 mr-2" />
                举办活动 150+ 场
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 页脚 */}
      <footer className="text-center text-gray-500 text-sm py-8 border-t">
        <p>© {getCurrentYear()} 香港中文大学内地生校友会. 保留所有权利.</p>
      </footer>
    </div>
  )
}

export default HomePage