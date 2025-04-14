import Button from '~/components/Button';
import classNames from 'classnames';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    return (
        <Button className={cx('menu-item')} LeftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
