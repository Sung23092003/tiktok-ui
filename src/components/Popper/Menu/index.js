import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
    const renderItem = () =>
        items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx()}>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
