import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import config  from '~/config';
import Menu, {MenuItem} from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {HomeIcon,HomeActiveIcon, UserGroupIcon ,UserActiveGroupIcon,LiveIcon, LiveActiveIcon} from "~/components/Icons"
const cx = classNames.bind(styles);

const SideBar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title = "For You" to= {config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title = "Following" to= {config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserActiveGroupIcon/>}/>
                <MenuItem title = "LIVE" to= {config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
            </Menu>
            <SuggestedAccounts lable='Suggested accounts'/>
            {/* <SuggestedAccounts lable='Following accounts'/> */}
        </aside>
    );
};

export default SideBar;
