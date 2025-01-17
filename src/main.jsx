import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Timeline from './pages/Timeline.jsx'
import './assets/css/index.css'

const router = createBrowserRouter([
	{
		path: '/hans/',
		element: <HomePage />
	},
	{
		path: '/hans/timeline',
		element: <Timeline />
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
)
