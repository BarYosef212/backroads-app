import React from 'react'
import Title from './Title'
import { servicesData } from '../data'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='Our' subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          const { icon, text, id, title } = service
          return (
            <article key={id} className="service">
              <span className="service-icon"><i className={icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  {text}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
