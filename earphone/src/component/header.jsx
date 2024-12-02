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
            <section className='item_search'>
            <h1>世界中のイヤホン・ヘッドホンが試聴・買取・購入ができる専門店</h1>
            <div className='h_flex'>
            <img src={Logo} alt="e☆イヤホン" />
            <div className='search_window'>
                <label className='selectlabel'>
                    <select name="search_type" className="search_type">
                        <option value="1">新品</option>
                        <option value="2">中古</option>
                        <option value="3">買取</option>

                    </select>
                </label>
            
                <form className='search_box'role='search' method='get' action="#">
                    <input className='text search_text' type="search" placeholder='キーワード検索' name='s'/>
                    <FaSearch className='search_icon'/>
                </form>
            </div>
            <button className='kaitori_btn'>買取金額検索</button>
            </div>
            
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
            

            </section>
            <nav className='gnav'>
            <ul className='gnav_a'>
                <li><details>
                     <summary>買取</summary>
                       <ul>
                          <li>e☆イヤホンの買い取りサービス</li>
                           <li>無料査定のお申込み</li> {/*リンクを張る*/}
                          <li>買取金額を調べる</li>  
                          <li>買取Q&A</li>  {/*リンクを張る*/}
                      </ul>
                    </details>
                </li>

                <li><details>
                <summary>中古</summary>
                <ul>
                    <li>中古ワイヤレス</li> {/*リンクを張る*/}
                    <li>中古イヤホン</li>{/*リンクを張る*/}
                    <li>中古ヘッドホン</li>{/*リンクを張る*/}
                    <li>中古プレイヤー</li>{/*リンクを張る*/}
                    <li>中古アンプ</li>{/*リンクを張る*/}
                    <li>中古ケーブル</li>{/*リンクを張る*/}
                    <li>中古スピーカー</li>{/*リンクを張る*/}
                    <li>中古アクセサリー</li>{/*リンクを張る*/}
                </ul>
                </details>
                </li>
                <li><details>
                    <summary>修理</summary>
                    <ul>
                        <li>eイヤホンクリニック</li>
                    </ul>
                    </details>
                </li>
                <li><details>
                    <summary>カスタムIEM</summary>
                    <ul>
                        <li>カスタムIEMとは？</li>
                        <li>ブランド一覧</li>
                    </ul>
                    </details>
                </li>
                <li><details>
                    <summary>店舗一覧</summary>
                    <img src="" alt="" />
                    <ul>
                        <li>
                            <h3 className='area'>東京都</h3>
                            <img src="" alt="" />
                            <p>秋葉原店 本店</p>
                            <p><span>営業時間</span>11:00-22:00</p>
                            <img src="" alt="" />
                            <p>ゲーミングAKIBA</p>
                            <p><span>営業時間</span>11:00-22:00</p>
                        </li>
                        <li>
                            <h3 className='area'>大阪府</h3>
                            <img src="" alt="" />
                            <p>大阪日本橋本店</p>
                            <p><span>営業時間</span>11:00-22:00</p>
                        </li>
                        <li>
                            <h3 className='area'>愛知県</h3>
                            <img src="" alt="" />
                            <p>名古屋大塚店</p>
                            <p><span>営業時間</span>11:00-22:00</p>
                        </li>
                        <li>
                            <h3 className='area'>宮城県</h3>
                            <img src="" alt="" />
                            <p>仙台駅前店</p>
                            <p><span>営業時間</span>10:00-22:00</p>
                        </li>
                    </ul>
                    </details>
                </li>
                <li><details>
                    <summary>商品を探す</summary>
                    <ul>
                        <li>ブランドから探す</li>
                        <li>ランキングから探す</li>
                        <li>キャンペーンから探す</li>
                        <li>レビューから探す</li>
                        <li>特集から探す</li>
                    </ul>
                    </details>
                </li>
                <li>お得なキャンペーン</li>
            </ul>

            <ul className='guide'>
                <li><span>新品3,000円以上送料無料</span><br />16:00までのご注文で即日出荷</li>
                <li>ご利用ガイド</li>
                <li>お問い合わせ</li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;