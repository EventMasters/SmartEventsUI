import React, {Component} from 'react';
import './EventsMainPage.css';
import {Link} from 'react-router-dom';


export default class EventsMainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            
            <div className="EventsMainPage">
            <div className="EventsMainPage__btn1">
            <Link to='/smartevents/event/newevent' className="EventsMainPage__btn">Create An Event</ Link>
           
            {/* <button className="EventsMainPage__btn">Create An Event</button></div> */}
            </div>
                <div class="EventsMainPage__txt">Past Events<i class="fas fa-times-circle"></i>
                <input class="EventsMainPage__searchBox" type="search" name="search" placeholder="Search..."/>
                </div>
                <div className="EventsMainPage__pastEventHeader">
                <div className="EventsMainPage__pastEventName">EventName</div>
                <div className="EventsMainPage__pastEventDate">Date</div>
                <div className="EventsMainPage__pastEventRsvp">RSVP Status</div>
                <div className="EventsMainPage__pastEventViewMore">View More</div>
                </div> <hr className="EventsMainPage__line"/>
                <div className="EventsMainPage__BirthdayParty">
                <div className="EventsMainPage__pastEventName">Birthday Party</div>
                <div className="EventsMainPage__pastEventDate">28-Dec-2018</div>
                <div className="EventsMainPage__pastEventRsvp">Attended</div>
                <div className="EventsMainPage__pastEventViewMore">+</div>
                </div> <hr className="EventsMainPage__line"/>
                <div className="EventsMainPage__Baby Shower">
                <div className="EventsMainPage__pastEventName">Baby Shower</div>
                <div className="EventsMainPage__pastEventDate">Date</div>
                <div className="EventsMainPage__pastEventRsvp">Attended</div>
                <div className="EventsMainPage__pastEventViewMore">+</div>
                </div> <hr className="EventsMainPage__line"/>
                <div className="EventsMainPage__Potluck">
                <div className="EventsMainPage__pastEventName">Potluck</div>
                <div className="EventsMainPage__pastEventDate">Date</div>
                <div className="EventsMainPage__pastEventRsvp">Attended</div>
                <div className="EventsMainPage__pastEventViewMore">+</div>
                </div>
            </div>
        )
    }

}