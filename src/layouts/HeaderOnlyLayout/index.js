import Header from "../components/Header";

const HeaderOnlyLayout = ({ children }) => {
    return (
        <div>
            <Header />
                <div className="content">{children}</div>
        </div>
    );
};

export default HeaderOnlyLayout;
