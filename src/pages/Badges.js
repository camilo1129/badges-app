import React from 'react';
import './styles/Badges.css';
import animeLogo from '../images/logo__page.png'
import Navbar from '../components/Navbar.js';
import BadgesList from '../components/BadgesList.js';


class Badges extends React.Component {
    state = {
        data: [
            {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                firstName: 'Bulma',
                lastName: 'Corp',
                powerFight: '300',
                specialTrait: 'Human',
                nameAnime: 'Dragon Ball',
                avatarUrl:
                  'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            },
            {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                firstName: 'Mr.',
                lastName: 'Satan',
                powerFight: '800',
                specialTrait: 'Human',
                nameAnime: 'Dragon Ball',
                avatarUrl:
                  'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
            },
            {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                firstName: 'Mr.',
                lastName: 'Krillin',
                powerFight: '1300',
                specialTrait: 'Human',
                nameAnime: 'Dragon Ball',
                avatarUrl:
                  'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            },
        ],
    };
    render(){
        return(
            <div>
                <Navbar/>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo img__logo" src={animeLogo} alt="anime logo"/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className="btn btn-primary"> New Badge</a>
                    </div>
                    <div className="Badges__list">
                        <div className="badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges;