import Header from '../components/Header';
import SideBar from './SideBar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="contaner">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
