import "./profile.css";

export function Profile(){
  return (
    <div>
    
    
    <div className="topnav">
    <span onClick={openProfile}>Profile</span>
    <span onClick={openScholarships}>Scholarships</span>
    <span onClick={openVol}>Volunteering</span>
    </div>
    
    <div style={{"backgroundColor":"#F7BE6D", "width":"80%", "position":"relative", "left":"10%"}}>
    <center><h1>USERNAME</h1></center>
    <center><h3>Hours Volunteered: 0</h3></center>
    <center><h3>Email: example@example.com</h3></center>
    </div>
    
    <div style={{"backgroundColor":"#e7e9e4", "position": "relative"}}>
    
    <center><h2>Upcoming Projects</h2></center>
    <center><h2>━━━━━━━━━━━━━━━</h2></center>
    <table style={{"width":"100%"}}>
    
    <tr>
    <td>
      <label><center><strong>Volunteer to pick up trash</strong> <br /> 
      <embed type="image/jpg" src="https://tse3.mm.bing.net/th?id=OIP.cGQh6547qXMwttL4rezOAgHaE8&pid=Api&P=0&h=220" width="300" height="200" />
      </center></label>
    </td>
    
    <td>
      <label><center><strong>Gave Candy to the Big Mom Pirates</strong> <br /> 
      <embed type="image/jpg" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/the-big-mom-pirates-jolly-roger.jpg" width="300" height="200"/>
      </center></label>
    </td>
    </tr>
    
    
    </table>
    
    </div>
    
    </div>
    
    
        );

  
}
function openProfile() {
  window.open("/")
}
function openScholarships() {
  window.open("/scholarship");

}
function openVol() {
  window.open("/volunteering")
}