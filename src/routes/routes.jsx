import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-me',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/about',
                element: <h3>This is about page</h3>
            }
        ]
    }
])

export default routes;
