// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import BlogList from './pages/BlogList/BlogList'
import NewBlog from './pages/NewBlog/NewBlog'
import EditBlog from './pages/EditBlog/EditBlog'
import NewVlog from './pages/NewVlog/NewVlog'
import VlogList from './pages/VlogList/VlogList'
import VlogDetails from './pages/VlogDetails/VlogDetails'
import EditVlog from './pages/EditVlog/EditVlog'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
// import * as profileService from './services/profileService'
import * as blogService from './services/BlogService'
import * as vlogService from './services/VlogService'

// styles
import './App.css'
import BlogDetails from './pages/BlogDetails/BlogDetails'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [blogs, setBlogs] = useState([])
  const [vlogs, setVlogs] = useState([])

  const navigate = useNavigate()

  // handle events
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }
  
  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }
  
  // ===*BLOGS*===
  const handleAddBlog = async (blogFormData) => {
    const newBlog = await blogService.create(blogFormData)
    setBlogs([newBlog, ...blogs])
    navigate('/blogs')
  }
  
  const handleUpdateBlog = async (blogFormData) => {
    const updatedBlog = await blogService.update(blogFormData)
    setBlogs(blogs.map((b) => blogFormData._id === b._id ? updatedBlog : b))
    navigate(`/blogs/${blogFormData._id}`)
  }
  
  const handleDeleteBlog = async (blogId) => {
    const deletedBlog = await blogService.deleteBlog(blogId)
    setBlogs(blogs.filter(b => b._id !== deletedBlog._id))
    navigate('/blogs')
  }
  
  // ===*VLOGS*===
  const handleAddVlog = async (vlogFormData) => {
    const newVlog = await vlogService.create(vlogFormData)
    setVlogs([...vlogs, newVlog])
    navigate('/vlogs')
  }

    const handleUpdateVlog = async (vlogFormData) => {
      const updatedVlog = await vlogService.update(vlogFormData)
      setVlogs(vlogs.map((v) => vlogFormData._id === v._id ? updatedVlog : v))
      navigate(`/vlogs/${vlogFormData._id}`)
    }
    
  // handleDeleteVlog
  const handleDeleteVlog = async(vlogId) => {
    const deletedVlog = await vlogService.deleteVlog(vlogId)
    setVlogs(vlogs.filter(v => v._id !== deletedVlog._id))
    navigate('/vlogs')
  }
  
  // use effects
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const blogData = await blogService.index()
      // console.log(blogData)
      setBlogs(blogData)
    }
    fetchAllBlogs()
  }, [])

  useEffect(() => {
    const fetchAllVlogs = async () => {
      const vlogData = await vlogService.index()
      // console.log(vlogData)
      setVlogs(vlogData)
    }
    fetchAllVlogs()
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/blogs"
          element={
            <BlogList blogs={blogs} />
          }
        />
        <Route 
          path='/blogs/:blogId'
          element={
            <BlogDetails user={user} handleDeleteBlog={handleDeleteBlog} />
          }
        />
        <Route 
          path='/blogs/newBlog'
          element={
            <ProtectedRoute user={user}>
              <NewBlog handleAddBlog={handleAddBlog} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/blogs/:blogId/edit'
          element={
            <ProtectedRoute user={user}>
              <EditBlog handleUpdateBlog={handleUpdateBlog} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/vlogs'
          element={ 
            <VlogList vlogs={vlogs} /> 
          }
          />
        <Route 
          path='/vlogs/newVlog'
          element={
            <ProtectedRoute user={user}>
              <NewVlog handleAddVlog={handleAddVlog} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/vlogs/:vlogId'
          element={
            <VlogDetails user={user} handleDeleteVlog={handleDeleteVlog} />
          }
        />
        <Route 
          path='/vlogs/:vlogId/edit'
          element={
            <ProtectedRoute user={user}>
              <EditVlog handleUpdateVlog={handleUpdateVlog} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
