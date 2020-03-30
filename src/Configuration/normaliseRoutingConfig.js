import HomePage from '../Pages/HomePage/HomePage';
import News from '../Pages/News/News';
import Orders from '../Pages/Orders/Orders';
import Promotions from '../Pages/Promotions/Promotions';
import { RoutingConfig } from './RoutingConfig';

const RoutersList = RoutingConfig;
RoutersList.HomePage.Component = HomePage;
RoutersList.News.Component = News;
RoutersList.Orders.Component = Orders;
RoutersList.Promotions.Component = Promotions;

export { RoutersList };
