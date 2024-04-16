import PropTypes from 'prop-types';

const Layout = ({ children }) => {
   return <div className='flex flex-col mt-20 items-center'>{children}</div>;
};

export default Layout;

Layout.propTypes = {
   children: PropTypes.array,
};
