import { useState } from 'react'
import './App.css'
import Card from './Card' // Importing card Compenent

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-wrapper'>
        <nav className='nav-wrapper'>
          <ul className='nav-items'>
            <li className='Home'>Home</li>
            <li className='Poems'>Poems</li>
            <li className='Books'>Books</li>
            <li className='News'>News</li>
          </ul>
        </nav>
      <body>
    
       <div className='content-wrapper'>
        <Card
          title='Title'
          content='Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor per aenean mattis eleifend mauris vitae tellus malesuada consequat.Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor per aenean mattis eleifend mauris vitae tellus malesuada consequat.'
          author='- Beth Turley'>
        </Card>

        <Card
          title='Title'
          content='Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor per aenean mattis eleifend mauris vitae tellus malesuada consequat.Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor per aenean mattis eleifend mauris vitae tellus malesuada consequat.'
          author='- Caroline forbes'>
        </Card>
        
        <Card
          title='Title'
          content='Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor per aenean mattis eleifend mauris vitae tellus malesuada consequat.Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor per aenean mattis eleifend mauris vitae tellus malesuada consequat.'
          author='- Caroline forbes'>
        </Card>
       </div>
      </body>
    </div>
  )
}

export default App
