import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Service'
import Contact from './components/Contact'
import CustomTemplateForm from './components/CustomTemplateForm'
import SearchResults from './components/SearchResults'
import RegisterForm from './components/Registrationform'
import './App.css'



function App() {
    return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/customtemplate' element={<CustomTemplateForm />} />
      <Route path='/searchresults' element={<SearchResults />} />
      <Route path='/registerform' element={<RegisterForm />} />
      </Routes>
      </BrowserRouter>
      </>
    )}
    export default App