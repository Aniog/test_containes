import { Outlet, useParams } from 'react-router-dom'
import GalleryIndex from '../components/gallery/GalleryIndex'
import GalleryDetail from '../components/gallery/GalleryDetail'

export default function Gallery() {
  return <GalleryIndex />
}

export function GalleryDetailPage() {
  return <GalleryDetail />
}
