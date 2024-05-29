import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleClick = (menuName, event) => {
    setActiveIcon(menuName);
  };

  return (
    <nav>
      <ul>
        <li onClick={(event) => handleClick('community', event)}>
          <Link to="/community">
            <img src={`/icons/${activeIcon === 'community' ? 'community.on.png' : 'community.png'}`} alt='커뮤니티' />
            <span>커뮤니티</span>
          </Link>
        </li>

        <li onClick={(event) => handleClick('search', event)}>
          <Link to="/search" >
            <img src={`/icons/${activeIcon === 'search' ? 'search.on.png' : 'search.png'}`} alt='검색' />
            <span>검색</span>
          </Link>
        </li>

        <li className='logo_home' onClick={(event) => handleClick('home', event)}>
          <Link to="/home" >
            <img src={`/icons/${activeIcon === 'home' ? 'home.on.png' : 'home.png'}`} alt='홈' />
          </Link>
        </li>

        <li onClick={(event) => handleClick('favorite', event)}>
          <Link to="/favorite" >
            <img src={`/icons/${activeIcon === 'favorite' ? 'favorite.on.png' : 'favorite.png'}`} alt='찜' />
            <span>찜</span>
          </Link>
        </li>

        <li onClick={(event) => handleClick('mypage', event)}>
          <Link to="/mypage" >
            <img src={`/icons/${activeIcon === 'mypage' ? 'mypage.on.png' : 'mypage.png'}`} alt='내정보' />
            <span>내정보</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
