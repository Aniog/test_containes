import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Award, Users, Globe, Cog } from 'lucide-react'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const milestones = [
    { year: '1998', event: 'Company founded with a vision for precision engineering' },
    { year: '2005', event: 'Launched first CNC-controlled folding machine' },
    { year: '2012', event: 'Expanded to international markets' },
    { year: '2018', event: 'Introduced smart automation features' },
    { year: '2024', event: '500+ machines delivered worldwide' },
  ]

  return (
    <section id="about" className="about" ref={containerRef}>
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">About ARTITECT</span>
            <h2 id="about-title" className="section-title">Over 25 Years of Precision Engineering</h2>
            <p id="about-desc" className="about-description">
              Since 1998, ARTITECT MACHINERY has been at the forefront of sheet metal 
              fabrication technology. Our commitment to quality, innovation, and 
              customer success has made us a trusted partner for metalworking professionals 
              across industries worldwide.
            </p>
            <p className="about-description">
              Every machine that leaves our facility represents our dedication to 
              precision engineering and manufacturing excellence. We combine traditional 
              craftsmanship with cutting-edge technology to deliver equipment that 
              exceeds expectations.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <Award className="about-stat-icon" size={24} />
                <div>
                  <span className="about-stat-value">ISO Certified</span>
                  <span className="about-stat-label">Quality Management</span>
                </div>
              </div>
              <div className="about-stat">
                <Users className="about-stat-icon" size={24} />
                <div>
                  <span className="about-stat-value">50+ Experts</span>
                  <span className="about-stat-label">Engineering Team</span>
                </div>
              </div>
              <div className="about-stat">
                <Globe className="about-stat-icon" size={24} />
                <div>
                  <span className="about-stat-value">30+ Countries</span>
                  <span className="about-stat-label">Global Reach</span>
                </div>
              </div>
              <div className="about-stat">
                <Cog className="about-stat-icon" size={24} />
                <div>
                  <span className="about-stat-value">R&D Driven</span>
                  <span className="about-stat-label">Continuous Innovation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <div
              className="about-image"
              data-strk-bg-id="about-bg-image"
              data-strk-bg="[about-desc] [about-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <div className="about-timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-year">{milestone.year}</span>
                  <span className="timeline-event">{milestone.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
