import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage.jsx'
import Timeline from './pages/Timeline.jsx'
import Releases from './pages/Releases.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Syncs from './pages/Syncs.jsx'
import MiscBlog from './pages/MiscBlog.jsx'
import './assets/css/index.css'
import { Theme } from "@radix-ui/themes";

const router = createHashRouter([
	{
		path: '/homepage',
		element: <Homepage />
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
		path: '/syncs',
		element: <Syncs />
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Theme>
			<RouterProvider router={router}/>
		</Theme>
	</StrictMode>,
)
