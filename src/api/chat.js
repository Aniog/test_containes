import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export function buildConversationId(userA, userB) {
  return [userA, userB].sort().join('_')
}

// ─── User APIs ───────────────────────────────────────────────────────────────

export async function registerUser(userId, nickname, avatarColor) {
  const now = new Date().toISOString()
  const { data: response, error } = await client
    .from('ChatUser')
    .insert({
      data: {
        user_id: userId,
        nickname,
        avatar_color: avatarColor,
        last_seen: now,
        is_online: true,
      },
    })
    .select()
    .single()

  if (error) throw error
  return getEntity(response)
}

export async function updateUserOnline(userId) {
  const now = new Date().toISOString()
  const { data: listResp, error: listErr } = await client
    .from('ChatUser')
    .select('*')
    .eq('user_id', userId)

  if (listErr) throw listErr
  const rows = getRows(listResp)
  if (rows.length === 0) return null

  const existing = rows[0]
  const { data: response, error } = await client
    .from('ChatUser')
    .update({ data: { ...existing.data, last_seen: now, is_online: true } })
    .eq('id', existing.id)
    .select()
    .single()

  if (error) throw error
  return getEntity(response)
}

export async function setUserOffline(userId) {
  const now = new Date().toISOString()
  const { data: listResp, error: listErr } = await client
    .from('ChatUser')
    .select('*')
    .eq('user_id', userId)

  if (listErr) throw listErr
  const rows = getRows(listResp)
  if (rows.length === 0) return null

  const existing = rows[0]
  const { data: response, error } = await client
    .from('ChatUser')
    .update({ data: { ...existing.data, last_seen: now, is_online: false } })
    .eq('id', existing.id)
    .select()
    .single()

  if (error) throw error
  return getEntity(response)
}

export async function findUserById(userId) {
  const { data: response, error } = await client
    .from('ChatUser')
    .select('*')
    .eq('user_id', userId)

  if (error) throw error
  const rows = getRows(response)
  return rows.length > 0 ? rows[0] : null
}

export async function searchUsers(query) {
  const { data: response, error } = await client
    .from('ChatUser')
    .select('*')
    .ilike('user_id', `%${query}%`)
    .limit(20)

  if (error) throw error
  return getRows(response)
}

// ─── Message APIs ─────────────────────────────────────────────────────────────

export async function sendMessage(senderId, receiverId, content) {
  const conversationId = buildConversationId(senderId, receiverId)
  const now = new Date().toISOString()

  const { data: response, error } = await client
    .from('ChatMessage')
    .insert({
      data: {
        conversation_id: conversationId,
        sender_id: senderId,
        receiver_id: receiverId,
        content,
        sent_at: now,
        is_read: false,
      },
    })
    .select()
    .single()

  if (error) throw error
  return getEntity(response)
}

export async function fetchMessages(userA, userB, limit = 50) {
  const conversationId = buildConversationId(userA, userB)

  const { data: response, error } = await client
    .from('ChatMessage')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('sent_at', { ascending: true })
    .limit(limit)

  if (error) throw error
  return getRows(response)
}

export async function fetchNewMessages(userA, userB, afterTimestamp) {
  const conversationId = buildConversationId(userA, userB)

  const { data: response, error } = await client
    .from('ChatMessage')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('sent_at', { ascending: true })
    .limit(100)

  if (error) throw error
  const rows = getRows(response)
  if (!afterTimestamp) return rows
  return rows.filter((msg) => msg.data.sent_at > afterTimestamp)
}

export async function fetchRecentConversations(userId) {
  const { data: sentResp, error: sentErr } = await client
    .from('ChatMessage')
    .select('*')
    .eq('sender_id', userId)
    .order('sent_at', { ascending: false })
    .limit(200)

  const { data: recvResp, error: recvErr } = await client
    .from('ChatMessage')
    .select('*')
    .eq('receiver_id', userId)
    .order('sent_at', { ascending: false })
    .limit(200)

  if (sentErr) throw sentErr
  if (recvErr) throw recvErr

  const allMessages = [...getRows(sentResp), ...getRows(recvResp)]

  const convMap = new Map()
  for (const msg of allMessages) {
    const d = msg.data
    const otherId = d.sender_id === userId ? d.receiver_id : d.sender_id
    const existing = convMap.get(otherId)
    if (!existing || d.sent_at > existing.data.sent_at) {
      convMap.set(otherId, msg)
    }
  }

  return Array.from(convMap.entries())
    .map(([otherId, lastMsg]) => ({ otherId, lastMsg }))
    .sort((a, b) => b.lastMsg.data.sent_at.localeCompare(a.lastMsg.data.sent_at))
}

export async function markMessagesRead(userA, userB, currentUserId) {
  const conversationId = buildConversationId(userA, userB)

  const { data: response, error } = await client
    .from('ChatMessage')
    .select('*')
    .eq('conversation_id', conversationId)
    .eq('receiver_id', currentUserId)
    .eq('is_read', false)

  if (error) throw error
  const unread = getRows(response)

  for (const msg of unread) {
    await client
      .from('ChatMessage')
      .update({ data: { ...msg.data, is_read: true } })
      .eq('id', msg.id)
      .select()
      .single()
  }
}
