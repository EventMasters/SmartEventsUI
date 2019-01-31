import React, {Component} from 'react';
import './Example.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-widgets/dist/css/react-widgets.css';

// export default class Example extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
        
//         return (
            
            // <div className="EventsMainPage">
            // <div className="EventsMainPage__btn1"><button className="EventsMainPage__btn"> Create An Event</button></div>
            // {/* <input type="button" value="button name" onclick="window.open('https://www.w3schools.com/tags/tag_button.asp')" /> */}
                
            //     <div class="EventsMainPage__txt">Past Events<i class="fas fa-times-circle"></i>
            //     {/* <i class="fa fa-search searchIcon"></i> */}
            //     <input class="EventsMainPage__searchBox" type="search" name="search" placeholder="Search..."/>
            //     </div>
              
            //     <div className="EventsMainPage__pastEventHeader">
            //     <span className="EventsMainPage__pastEventName">EventName</span>
            //     <span className="EventsMainPage__pastEventDate">Date</span>
            //     <span className="EventsMainPage__pastEventRsvp">RSVP Status</span>
            //     <span className="EventsMainPage__pastEventViewMore">View More</span>
            //     </div> <hr className="EventsMainPage__line"/>
            //     <div className="EventsMainPage__BirthdayParty">
            //     <span className="EventsMainPage__pastEventName">Birthday Party</span>
            //     <span className="EventsMainPage__pastEventDate">28-Dec-2018</span>
            //     <span className="EventsMainPage__pastEventRsvp">Attended</span>
            //     <span className="EventsMainPage__pastEventViewMore">+</span>
            //     </div> <hr className="EventsMainPage__line"/>
            //     <div className="EventsMainPage__Baby Shower">
            //     <span className="EventsMainPage__pastEventName">Baby Shower</span>
            //     <span className="EventsMainPage__pastEventDate">Date</span>
            //     <span className="EventsMainPage__pastEventRsvp">Attended</span>
            //     <span className="EventsMainPage__pastEventViewMore">+</span>
            //     </div> <hr className="EventsMainPage__line"/>
            //     <div className="EventsMainPage__Potluck">
            //     <span className="EventsMainPage__pastEventName">Potluck</span>
            //     <span className="EventsMainPage__pastEventDate">Date</span>
            //     <span className="EventsMainPage__pastEventRsvp">Attended</span>
            //     <span className="EventsMainPage__pastEventViewMore">+</span>
            //     </div>
            // </div>
            export default class Example extends Component {
                constructor(props) {
                    super(props);
                //     this.state = {
                //         Date: moment()
                //     };

                // this.handleSubmit = this.handleSubmit.bind(this);
                // this.handleDateChange = this.handleDateChange.bind(this);
                // }
                // handleDateChange(date) {
                //     this.setState({Date: date});
                //   }
                //   handleSubmit(event) {
                //     event.preventDefault();
                  }
                
            render() {
                    
            return (
            <div className="createNewEvent">
            
            <form onSubmit={this.handleSubmit} className="createNewEvent__form" name="createNewEvent">
            <h3 className="createNewEvent__Header"> Event Details </h3>

            <div className="createNewEvent__content">
            <div className="createNewEvent__textBlock">
              <h4>Event Name* </h4>
              <input className="createNewEvent__inputBlock" name="title" type="text" placeholder="e.g Joe's Birthday Party"
                     required/>
            </div>
            <div className="createNewEvent__textBlock">
              <h4>Co-Host </h4>
              <input className="createNewEvent__inputBlock" name="Name" type="text" placeholder="e.g Johny"
                     />
            </div>

            <div className="createNewEvent__textBlock">
              <h4>Email </h4>
              <input className="createNewEvent__inputBlock" name="email" type="email"
                     placeholder="e.g JohnDoe@domain.com" />
            </div>
            <div className="createNewEvent__textBlock">
              <h4>Date* </h4>
              <input className="createNewEvent__inputBlock" name="EventDate" type="date" placeholder="03/04/2019" required/>
               {/* <DatePicker className="createNewEvent__inputBlock" name="EventDate" 
              selected={this.state.Date}
              onChange={this.handleDateChange} /> */}
            </div>
            <div className="createNewEvent__textBlock">
              <h4>Venue </h4>
              <input className="createNewEvent__inputBlock" name="Venue" type="text" placeholder="e.g party hall"
                     />
            </div>
            <div className="createNewEvent__textBlock">
              <h4>Address* </h4>
              <input className="createNewEvent__inputBlock" name="Address" type="text"
                     required/>
            </div>
            <div className="createNewEvent__textBlock">
              <h4>Message From Host </h4>
              <input className="createNewEvent__inputBlock" name="Message" type="text"/>
            </div>
            <div className="createNewEvent__textBlock">
            <h4>RSVP</h4>
            <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe</option>
            </select>
            </div>

            <div className="createNewEvent__textBlock">
              <h4>Registry </h4>
              <input className="createNewEvent__inputBlock" name="Registry" type="text"/>
            </div>
            <div className="createNewEvent__textBlock">
              <h4>Suggestions </h4>
              <input className="createNewEvent__inputBlock" name="Suggestiond" type="text"/>
            </div>
            <div className="requestFormModal__Other">
            <input className="requestFormModal__checkbox" type="checkbox" id="customize" name="customize"/>
            <label for="Other">Other - Custom Fields Of Your Choice</label>
            </div>
            <div className="requestFormModal__Btn">
              <button className="requestFormModal__cancelBtn">Cancel</button>
              <button className="requestFormModal__continueBtn">Continue</button>
            </div>
            </div>
            </form>
            </div>

        )
    }

}
