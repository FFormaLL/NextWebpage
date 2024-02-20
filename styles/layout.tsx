// Layout.tsx
import React from 'react';
import Stars from '~/components/Stars/star';

const Layout = ({ children }) => (
    <>
        <Stars />
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        {children}
    </>
);

export default Layout;