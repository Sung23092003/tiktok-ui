import Button from '~/components/Button';
import classNames from 'classnames';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item',{
        separate: data.separate
    })
    return (
        <Button className={classes} LeftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
