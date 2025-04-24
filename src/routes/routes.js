import config from '~/config';
// Layouts
import { HederOnlyLayout } from '~/layouts';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/UpLoad';
import Search from '~/pages/Search';

// dùng cho các router mà ta muốn không cần đăng nhập vẫn xem được
const publicRoutes = [
    // các layout mặc định
    {path: config.routes.home, component: Home},
    {path: config.routes.following, component: Following},
    {path: config.routes.profile, component: Profile,},
    // các layout ko phải mặc định
    {path: config.routes.upload, component: Upload, layout: HederOnlyLayout},
    {path: config.routes.search, component: Search, layout: null},
];

// dùng cho các router mà ta cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
