import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// 格式化数据以符合Schema要求
export function formatPayload(data, schemaName) {
  const formatted = { ...data }
  
  // 根据不同的Schema进行类型转换
  switch (schemaName) {
    case 'Member':
      if (formatted.graduation_year) formatted.graduation_year = Number(formatted.graduation_year)
      if (formatted.membership_fee_paid !== undefined) {
        formatted.membership_fee_paid = formatted.membership_fee_paid === true || formatted.membership_fee_paid === 'true'
      }
      if (formatted.membership_fee_amount) formatted.membership_fee_amount = Number(formatted.membership_fee_amount)
      break
      
    case 'Activity':
      if (formatted.organizer_id) formatted.organizer_id = Number(formatted.organizer_id)
      if (formatted.max_participants) formatted.max_participants = Number(formatted.max_participants)
      if (formatted.current_participants) formatted.current_participants = Number(formatted.current_participants)
      if (formatted.is_paid !== undefined) {
        formatted.is_paid = formatted.is_paid === true || formatted.is_paid === 'true'
      }
      if (formatted.fee_amount) formatted.fee_amount = Number(formatted.fee_amount)
      break
      
    case 'ActivityRegistration':
      if (formatted.activity_id) formatted.activity_id = Number(formatted.activity_id)
      if (formatted.member_id) formatted.member_id = Number(formatted.member_id)
      if (formatted.payment_amount) formatted.payment_amount = Number(formatted.payment_amount)
      break
      
    case 'MembershipPayment':
      if (formatted.member_id) formatted.member_id = Number(formatted.member_id)
      if (formatted.amount) formatted.amount = Number(formatted.amount)
      if (formatted.year) formatted.year = Number(formatted.year)
      break
  }
  
  return formatted
}

// 格式化日期显示
export function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('zh-CN')
}

// 格式化时间显示
export function formatDateTime(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString('zh-CN')
}

// 获取当前年份
export function getCurrentYear() {
  return new Date().getFullYear()
}