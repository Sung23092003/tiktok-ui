import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
                <div className="content">{children}</div>
        </div>
    );
};

export default DefaultLayout;
