import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../public/img/eearphoneLogo.svg';
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
    return (
        <header>
            <h1>世界中のイヤホン・ヘッドホンが試聴・買取・購入ができる専門店</h1>
            <div className='h_top'>
            <img src={Logo} alt="e☆イヤホン" />
            <div className='search_window'>
                <label>
                    <select name="search_type" className="search_type">
                        <option value="1">新品</option>
                        <option value="2">中古</option>
                        <option value="3">買取</option>

                    </select>
                </label>
            
                <form className='search_box'role='search' method='get' action="#">
                    <input className='text search_text' type="search" placeholder='キーワード検索' name='s'/>
                </form>
            <FaSearch className='search_icon'/>
            <button className='kaitori_btn'>買取金額検索</button>
            </div>
            </div>
            <div className='login'>
            <ul className='mypage'>
                <li>
                    <IoPerson size={40} />
                    <p>ログイン</p>
                </li>
                <li>
                    <FaHeart size={40}/>
                    <p>お気に入り</p>
                </li>
                <li>
                <FaShoppingCart size={40} />
                    <p>カート</p>
                </li>
            </ul>
            </div>
            
        </header>
    );
}

export default Header;