import { Globe, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { getAvatarColor, getCountryName } from '@/lib/utils'

const SocialLink = ({ href, icon: Icon, label }) => {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="text-gray-400 hover:text-yellow-500 transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}

const ContactCard = ({ contact }) => {
  const { first_name, last_name, email, phone, location, country_region_code, website, facebook, twitter, instagram, youtube } = contact
  const fullName = `${first_name || ''} ${last_name || ''}`.trim()
  const initials = `${(first_name || '')[0] || ''}${(last_name || '')[0] || ''}`.toUpperCase()
  const avatarColor = getAvatarColor(last_name || first_name || '')
  const countryName = getCountryName(country_region_code)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className={`${avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
          {initials || '?'}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900 truncate">{fullName || 'Unknown'}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {location && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                <MapPin className="w-3 h-3" />
                {location}
              </span>
            )}
            {country_region_code && (
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">
                {country_region_code}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-1.5 text-sm">
        {phone && (
          <a href={`tel:${phone}`} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors">
            <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <span className="truncate">{phone}</span>
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors">
            <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <span className="truncate">{email}</span>
          </a>
        )}
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate text-xs">{website.replace(/^https?:\/\//, '')}</span>
          </a>
        )}
      </div>

      {(facebook || twitter || instagram || youtube) && (
        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-400 mr-1">社交媒体</span>
          <SocialLink href={facebook} icon={Facebook} label="Facebook" />
          <SocialLink href={twitter} icon={Twitter} label="Twitter" />
          <SocialLink href={instagram} icon={Instagram} label="Instagram" />
          <SocialLink href={youtube} icon={Youtube} label="YouTube" />
        </div>
      )}
    </div>
  )
}

export default ContactCard
