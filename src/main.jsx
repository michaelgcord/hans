import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Timeline from './pages/Timeline.jsx'
import Releases from './pages/Releases.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import MiscBlog from './pages/MiscBlog.jsx'
import './assets/css/index.css'

const router = createHashRouter([
	{
		path: '/homepage',
		element: <HomePage />
	},
	{
		path: '/timeline',
		element: <Timeline />
	},
	{
		path: '/releases',
		element: <Releases />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/events',
		element: <Events />
	},
	{
		path: '/misc-blog',
		element: <MiscBlog />
	},		
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
)
