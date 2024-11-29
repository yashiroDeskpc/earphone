import React from 'react';
import Logo from '../../public/img/eearphoneLogo.svg';

function Header() {
    return (
        <header>
            <h1>世界中のイヤホン・ヘッドホンが試聴・買取・購入ができる専門店</h1>
            <img src={Logo} alt="" />
        </header>
    );
}

export default Header;