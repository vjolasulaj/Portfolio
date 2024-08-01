import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className="project-card" key={item.id}>
        <img src={item.image} alt="" className='project-img' />
        <h3 className='project-title'>{item.title}</h3>
        <a href="https://github.com/vjolasulaj"className='project-button'>
            Github <i className='bx bx-right-arrow-alt project-button-icon'></i>
        </a>
    </div>
  )
}

export default ProjectItems