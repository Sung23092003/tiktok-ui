import routesConfig from '~/config/routes';
// Layouts
import { HederOnlyLayout } from '~/components/Layout';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/UpLoad';
import Search from '~/pages/Search';

// dùng cho các router mà ta muốn không cần đăng nhập vẫn xem được
const publicRoutes = [
    // các layout mặc định
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile,},
    // các layout ko phải mặc định
    {path: routesConfig.upload, component: Upload, layout: HederOnlyLayout},
    {path: routesConfig.search, component: Search, layout: null},
];

// dùng cho các router mà ta cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
