import React from 'react'
import './Info.css'
import windowsIcon from '../images/windows-icon.png'
import macOS from '../images/MacOS-icon.png'
import user from '../images/Attribute-Icon.png'
import archive from '../images/Attribute-Icon2.png'
import captions from '../images/Atribute-icon3.png'
import workShop from '../images/Attribute-Icon4.png'


export default function Info() {

    return(
        <div className='InfoBlock'>
        <div className='info-container'>
            <div className='left--column'>
                <div className='buy-widget'>
                    <h3 className='buy-widget--header'>Buy Half Life: Alyx</h3>
                    <div className='platforms'>
                       <img 
                            alt='for windows' 
                            src={windowsIcon} 
                            className='icon'>  
                        </img>
                        <img 
                            alt='for macOS' 
                            src={macOS}
                            className='icon'>
                        </img> 
                    </div>
                    <div className='cost-widget'>
                    <div className='cost-widget--block'>
                        <p className='cost-widget--price'>$49,99</p>
                    </div>
                    <div className='cost-widget--cartBLock'>
                        <p className='cost-widget--cart'>Add to Cart</p>
                    </div>  
                    </div>
                </div>
                {/* About section */}
                <div className='about--section'>
                    <h4>ABOUT THIS GAME</h4>
                    <div className='line'><pre/></div>
                    <div className='about-text'>
                        <p>Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2.</p>

                        <p>Playing as Alyx Vance, you are humanity’s only chance for survival. The Combine’s control of the planet since the Black Mesa incident has only strengthened as they corral the remaining population in cities. Among them are some of Earth’s greatest scientists: you and your father, Dr. Eli Vance.</p>

                        <p>As founders of a fledgling resistance, you’ve continued your clandestine scientific activity—performing critical research, and building invaluable tools for the few humans brave enough to defy the Combine.</p>

                        <p>Every day, you learn more about your enemy, and every day you work toward finding a weakness.</p>

                        <p>ABOUT GAMEPLAY IN VR:</p>

                        <p>Valve’s return to the Half-Life universe that started it all was built from the ground up for virtual reality. VR was built to enable the gameplay that sits at the heart of Half-Life.</p>

                        <p>Immerse yourself in deep environmental interactions, puzzle solving, world exploration, and visceral combat.</p>

                        <p>Lean to aim around a broken wall and under a Barnacle to make an impossible shot. Rummage through shelves to find a healing syringe and some shotgun shells. Manipulate tools to hack alien interfaces. Toss a bottle through a window to distract an enemy. Rip a Headcrab off your face and throw it out the window.</p>

                        <p>COMMUNITY-BUILT ENVIRONMENTS</p>

                        <p>A set of Source 2 tools for building new levels is included with the game, enabling any player to build and contribute new environments for the community to enjoy through Half-Life: Alyx's Steam Workshop. Hammer, Valve’s level authoring tool, has been updated with all of the game's virtual reality gameplay tools and components.</p>
                    </div>
                </div>
            </div>
            <div className='right--column'>
            <div className='atributes'>
                <div className='atribute-item'>
                    <img 
                    alt='user' src={user}
                    className='atribute-icon'
                    />
                    <p className='atribute-text'>Single-player</p>      
                </div>
                <div className='atribute-item'>
                    <img 
                    alt='user' src={archive}
                    className='atribute-icon'
                    />
                    <p className='atribute-text'>Attributes Item</p>      
                </div>
                <div className='atribute-item'>
                    <img 
                    alt='user' src={captions}
                    className='atribute-icon'
                    />
                    <p className='cc'>CC</p>
                    <p className='atribute-text'>Captions available</p>      
                </div>
                <div className='atribute-item'>
                    <img 
                    alt='user' src={workShop}
                    className='atribute-icon'
                    />
                    <p className='atribute-text'>Steam Workshop</p>      
                </div>
            </div>
            </div>
        </div>
        </div>
    )
};
