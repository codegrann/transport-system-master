import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import reportWebVitals from './reportWebVitals'
import Dashboard from './pages/dashboard'
import Mails from './pages/mails'
import Customer from './pages/Customer'
import Invoicing from './pages/Invoicing'
import Finance from './pages/Finance'
import HumanResource from './pages/HumanResource'
import DataInput from './pages/DataInput'
import RolesPermissions from './pages/RolesPermissions'
import Branches from './pages/Branches'
import Settings from './pages/Settings'
import Messages from './pages/Messages'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='app'>
        <Header />
        <div className='lower-section'>
          <Sidebar />
          <div className='main-page'>
            <div className='main-page-container'>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/mails' element={<Mails />} />
                <Route path='/customer' element={<Customer />} />
                <Route path='/invoice' element={<Invoicing />} />
                <Route path='/finance' element={<Finance />} />
                <Route path='/human-resource' element={<HumanResource />} />
                <Route path='/data-input' element={<DataInput />} />
                <Route
                  path='/roles-permission'
                  element={<RolesPermissions />}
                />
                <Route path='/branches' element={<Branches />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
