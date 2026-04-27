export const currentUser = {
  id: 1,
  name: '林晓雨',
  username: 'xiaoyulin',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaoyulin&backgroundColor=b6e3f4',
  cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  bio: '设计师 · 摄影爱好者 · 咖啡成瘾者 ☕',
  location: '上海',
  following: 312,
  followers: 1840,
  posts: 128,
};

export const suggestedUsers = [
  { id: 2, name: '陈明远', username: 'chenminyuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenminyuan&backgroundColor=c0aede', bio: '产品经理 · 旅行者' },
  { id: 3, name: '王思琪', username: 'wangsiqi', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wangsiqi&backgroundColor=d1d4f9', bio: '前端工程师 · 开源爱好者' },
  { id: 4, name: '张浩然', username: 'zhanghaoran', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhanghaoran&backgroundColor=ffd5dc', bio: '摄影师 · 视觉艺术家' },
  { id: 5, name: '刘雨桐', username: 'liuyutong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liuyutong&backgroundColor=b6e3f4', bio: '插画师 · 独立创作者' },
];

export const posts = [
  {
    id: 1,
    user: { id: 2, name: '陈明远', username: 'chenminyuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenminyuan&backgroundColor=c0aede' },
    content: '今天在西湖边拍到了这张照片，光线刚刚好，整个人都沉浸在那种宁静里了。旅行的意义大概就是这样，让你暂时忘掉所有烦恼。',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    likes: 248, comments: 32, shares: 14,
    time: '2026-04-23T08:30:00Z', liked: false, bookmarked: false,
  },
  {
    id: 2,
    user: { id: 3, name: '王思琪', username: 'wangsiqi', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wangsiqi&backgroundColor=d1d4f9' },
    content: '刚刚完成了一个新的开源项目，一个轻量级的 React 状态管理库，欢迎大家 star 和 PR！代码简洁、零依赖、TypeScript 支持完善。',
    image: null,
    likes: 183, comments: 47, shares: 89,
    time: '2026-04-23T07:15:00Z', liked: true, bookmarked: false,
  },
  {
    id: 3,
    user: { id: 4, name: '张浩然', username: 'zhanghaoran', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhanghaoran&backgroundColor=ffd5dc' },
    content: '城市里的光与影，总是有说不完的故事。这是昨晚在陆家嘴拍的，后期几乎没有处理，原片直出。',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    likes: 512, comments: 68, shares: 43,
    time: '2026-04-22T22:00:00Z', liked: false, bookmarked: true,
  },
  {
    id: 4,
    user: { id: 5, name: '刘雨桐', username: 'liuyutong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liuyutong&backgroundColor=b6e3f4' },
    content: '新插画系列「城市漫游者」第一张，灵感来自于每天上班路上看到的那些行色匆匆的人们。每个人都是一个故事。',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80',
    likes: 734, comments: 91, shares: 156,
    time: '2026-04-22T18:45:00Z', liked: true, bookmarked: false,
  },
  {
    id: 5,
    user: { id: 2, name: '陈明远', username: 'chenminyuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenminyuan&backgroundColor=c0aede' },
    content: '产品思考：好的产品不是功能最多的，而是让用户感觉不到它存在的。极简主义在产品设计中的应用，往往能带来最好的用户体验。',
    image: null,
    likes: 329, comments: 54, shares: 112,
    time: '2026-04-22T14:20:00Z', liked: false, bookmarked: false,
  },
  {
    id: 6,
    user: { id: 3, name: '王思琪', username: 'wangsiqi', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wangsiqi&backgroundColor=d1d4f9' },
    content: '分享一个提升工作效率的小技巧：把每天最重要的三件事写在便利贴上，贴在显示器旁边。简单但真的有效，坚持了半年了。',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
    likes: 421, comments: 38, shares: 67,
    time: '2026-04-22T10:00:00Z', liked: false, bookmarked: false,
  },
];

export const trendingTopics = [
  { id: 1, tag: '#上海春日', count: '4.2万讨论' },
  { id: 2, tag: '#极简设计', count: '2.8万讨论' },
  { id: 3, tag: '#开源项目', count: '1.9万讨论' },
  { id: 4, tag: '#城市摄影', count: '3.1万讨论' },
  { id: 5, tag: '#产品思维', count: '1.5万讨论' },
];

export const exploreCategories = [
  { id: 1, name: '设计', emoji: '🎨', count: '12.4k', gradient: 'from-purple-500 to-pink-500' },
  { id: 2, name: '摄影', emoji: '📷', count: '8.9k', gradient: 'from-amber-400 to-orange-500' },
  { id: 3, name: '科技', emoji: '💻', count: '21.3k', gradient: 'from-cyan-400 to-blue-500' },
  { id: 4, name: '旅行', emoji: '✈️', count: '15.7k', gradient: 'from-green-400 to-teal-500' },
  { id: 5, name: '美食', emoji: '🍜', count: '9.2k', gradient: 'from-red-400 to-rose-500' },
  { id: 6, name: '音乐', emoji: '🎵', count: '7.6k', gradient: 'from-violet-500 to-purple-600' },
];
