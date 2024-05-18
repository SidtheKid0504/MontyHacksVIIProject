

export function Volunteering() {
    return (
<div>


<div className="topnav">
    <span onClick={openProfile}>Profile</span>
    <span onClick={openScholarships}>Scholarships</span>
    <span onClick={openVol}>Volunteering</span>
</div>

<div className="myscrollingdiv">


<table className="widthFull">


<tr>
      <td>
        <label><center><strong>Volunteer to pick up trash</strong> <br/> <embed type="image/jpg" src="https://tse3.mm.bing.net/th?id=OIP.cGQh6547qXMwttL4rezOAgHaE8&pid=Api&P=0&h=220" width="300" height="200"/><br/>
        <sub>Help clean up your local community</sub><br/>
        <button className="button">Sign up</button><br/>
        </center></label>
      </td>

      <td>
        <label><center><strong>Volunteer at a soup kitchen</strong> <br/> 
        <embed type="image/jpg" src="https://tse2.mm.bing.net/th?id=OIP.DnI1q3CQCgaCn4tLrJ2p1AHaFj&pid=Api&P=0&h=220" width="300" height="200"/><br/>
            <sub>Help feed the poor</sub><br/>
            <button className="button">Sign up</button><br/>
        </center></label>
      </td>

</tr>

      <tr>
        <td>
          <label>
            <center>
              <strong>Volunteer to help animals</strong> <br/> 
          <embed type="image/jpg" src="https://tse2.mm.bing.net/th?id=OIP.0m3VsSoSYoAFmz-GzxljKAHaEc&pid=Api&P=0&h=220" width="300" height="200"/>
          <br/>
            <sub>Help take care of animals in need</sub><br/>
            <button className="button">Sign up</button><br/>
            </center>
          </label>
        </td>
  
        <td>
          <label><center>
            <strong>Volenteer to plant trees</strong> 
            <br/> 
            <embed type="image/jpg" src="https://tse4.mm.bing.net/th?id=OIP.o47TZPQjsW_DFjv9rWjfJwHaE8&pid=Api&P=0&h=220" width="300" height="200"/><br/>
            <sub>Help plant trees and grow new enviorments</sub><br/>
            <button className="button">Sign up</button><br/></center>
          </label>
        </td>
    </tr>




    <tr>
      <td>
        <center><strong>Volunteer at Baratie</strong> <br/> 
<embed type="image/png" src="https://4.bp.blogspot.com/-nxTwp7fxM4w/U65pstgrJjI/AAAAAAAAB1E/hsc6qBknOOM/s1600/250px-Baratie_Infobox.png" width="300" height="200"/><br/>
        <sub>Sanji replacement needed</sub><br/>
        <button className="button">Sign up</button><br/>
        </center>
      </td>

      <td>
        <label><center><strong>Volunteer for Buggy</strong> <br/> <embed type="image/jpg" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/buggyhathair.jpg" width="300" height="200"/><br/>
        <sub>Performers wanted</sub><br/>
        <button className="button">Sign up</button><br/></center>
      </label>
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