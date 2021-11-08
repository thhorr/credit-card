import {Card} from "./components/Card";
import {Form} from "./components/Form";
import './App.css';
import {useState} from "react";

function App() {

const [formData, setFormData] = useState({
  name : "",
  card_number : 0,
  month: 0,
  year: 0,
  code : 0,
  price: 0
});



const handleChange = (e) => {
  const {name, value} = e.target;

  setFormData({...formData, [name] : value});

}


console.log(formData);

  return (
    <div className="App">
        <Card style = "visa-container">
            <div id = "visa" className = "visa">VISA</div>
            <div className = "chip-container"><img className = "chip" src = "https://img.icons8.com/plasticine/2x/sim-card-chip.png" alt = "chip" /></div>
            <div className = "card-number-container">
              <p className = "card-number">{formData.card_number}</p>
            </div>
            <div className = "last-container">
              <div>
                <labe className = "label">Name</labe><p className = "p">{formData.name}</p>
              </div>
              <div>
                <label className = "label">Expiry</label>
                <p className = "p">{formData.month}/{formData.year}</p>
              </div>
              <div>
                <label className = "label">CVV</label>
                <p className = "p">{formData.code}</p>
              </div>
            </div>
        </Card>
        <Form onSubmita = {(e) =>{
         e.preventDefault();

          alert("Payment successful");
          console.log("payment successful")
        }}>
          <h1>Payment details</h1>
          <div className = "container">
            <div className = "input-name">
              <label className = "card" for = "name" >CARDHOLDER NAME</label>
              <div className = "group">
              <img className = "img" src = "https://www.bing.com/th?id=OIP.6CN9-QzymRXk9sQnRJRvwAHaE8&w=153&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt = "user" />
              <input className = "input" type = "text" onChange = {handleChange} name = "name" placeholder = "Enter the name" />
              </div>
            </div>

            <div className = "input-name">
              <label className = "card" for = "name" >CARD NUMBER</label>
              <div className = "group" >
              <img className = "img" src = "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png" alt = "user" /><input className = "input" type = "number" name = "card_number" onChange = {handleChange} placeholder = "Enter the card number" />
              </div>
            </div>
            <div className = "month-year-ccv input-name">
              <div >
                <label className = "card">EXPIRY MONTH</label>
                <div>
                  <img className = "img" src = "https://th.bing.com/th/id/R.703e17449c55a5164f65002b3bcbad7d?rik=pq0REaLp7xnIYg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_222368.png&ehk=b95kXNXz1PnIeln0VE9hfO5efxZHUvRxeCHnq8gjsa4%3d&risl=&pid=ImgRaw&r=0" alt = "month" />
                  <input className = "date" type = "number" name = "month" onChange = {handleChange}  />
                </div>
              </div>

              <div>
                <label className = "card">EXPIRY YEAR</label>
                <div>
                 <img className = "img" src = "https://th.bing.com/th/id/R.703e17449c55a5164f65002b3bcbad7d?rik=pq0REaLp7xnIYg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_222368.png&ehk=b95kXNXz1PnIeln0VE9hfO5efxZHUvRxeCHnq8gjsa4%3d&risl=&pid=ImgRaw&r=0" alt = "year" />
                 <input className = "date" type = "number" name = "year" onChange = {handleChange} />
                </div>
              </div>

              <div>
                <label className = "card">CCV</label>
                <div>
                  <img className = "img" src = "https://th.bing.com/th/id/R.078ddeb0017a2c3a8a1eb39a7aa7ba85?rik=GcpGiyM9kUW%2bqA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_213920.png&ehk=Efq65%2fq%2b1MH2GaU0cZ%2fdsHpCdR6glFU5%2bzBN0LB06QU%3d&risl=&pid=ImgRaw&r=0" alt = "ccv" />
                  <input className = "date" type = "number" name = "code" onChange = {handleChange}  />
                </div>
              </div>
            </div>

            <div className = "input-name">
              <label className = "card">Payment amount</label>
               <input className = "input" type = "number" name = "price" onChange = {handleChange} placeholder = "Enter the amount" />
            </div>
            <div classsName = "btn">
              <button className = "pay">Pay</button>
            </div>

          </div>
        </Form>
    </div>
  );
}

export default App;
