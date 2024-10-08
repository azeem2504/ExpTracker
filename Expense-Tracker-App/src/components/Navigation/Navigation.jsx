import React from 'react'
import styled from 'styled-components';
import menuItems from '../../utils/MenuItems';
import bg from '../../img/bg.jpeg';
import { signout } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';
function Navigation({active, setActive}) {
  const {totalBalance} = useGlobalContext()
  return (
    <NavCont>
        <div className="user-con">
            <img src={bg} alt="" />
            <div className="text">
                <h2>Arshil</h2>
                <p>Balance: Rs {totalBalance()}</p>
            </div>
        </div>
        <ul className="menu-items">
            {menuItems.map((items) => {
                return <li key={items.id}
                            onClick={() => setActive(items.id)}
                            className={active === items.id ? 'active' : ''}
                >
                        {items.icon}
                        <span>{items.title}</span>
                </li>
            })}
        </ul>
        <div className="bottom-nav">
            <li>
                {signout} Sign Out
            </li>
        </div>
      
    </NavCont>
  )
}
const NavCont = styled.nav`
        padding: 2rem 1.5rem;
        width: 374px;
        height: 100%;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;

        .user-con{
            height: 100px;
            display: flex;
            align-items: center;
            gap: 1rem;

            img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                object-fit: cover;
                background: #fcf6f9;
                border: 2px solid white;
                padding: 0.2rem;
                box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
            }
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }

        .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
            li{
                display: grid;
                grid-template-columns: 40px auto;
                align-items: center;
                margin: .4rem 0;
                font-weight: 500;
                cursor: pointer;
                transition: all .4s ease-in-out;
                color: rgba(34, 34, 96, .6);
                padding-left: 1rem;
                position: relative;
            }
        }

        .active{
            color: rgba(34, 34, 96, 1) !important;
            i{
                color: rgba(34, 34, 96, 1) !important;
            }
            
            &::before{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 4px;
                height: 100%;
                background: #242222;
                border-radius: 0 10px 10px 0;
            }
        }

`;


export default Navigation
