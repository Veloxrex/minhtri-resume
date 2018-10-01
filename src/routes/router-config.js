import HomeScreen from "../screen/homepage/homepage.screen";
import PortfolioScreen from "../screen/portfolio/portfolio.screen";
import ContactScreen from "../screen/contact/contact.screen";

export const routes = [
    {
        path: '/',
        name: 'Home Page',
        component: HomeScreen,
        exact: true
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioScreen,
        exact: true
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactScreen,
        exact: true
    }
]
