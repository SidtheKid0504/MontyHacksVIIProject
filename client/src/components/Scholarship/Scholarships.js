

export function Scholarships() {
  console.log('run pls');
    return (
<div>
<div className="topnav">
    <span onClick={openProfile}>Profile</span>
    <span onClick={openScholarships}>Scholarships</span>
    <span onClick={openVol}>Volunteering</span>
</div>

<div className="hero-image">
          <div className="hero-text">
            <h1 style={{"fontSize":"50px"}}>Scholarship Opportunities</h1>
            <p>_______________</p>
          </div>
</div> 



<table style={{"width":"100%"}}>

   
<tr>
  <td>
    <tbody>
      <center>
      <strong>Straw Hat Pirates Scholarship</strong> <br/> <embed type="image/jpg" src="https://preview.redd.it/which-straw-hat-jolly-roger-do-you-like-the-most-mine-is-v0-2s3l0rbbt8qb1.jpg?width=640&crop=smart&auto=webp&s=2753a0f8e59adcd8060569186e3b8e848413c51a"  height="200" width="200" /><br/>
        <button className="button">See More</button><br/>
      </center>
  </tbody>
</td>
    
<td>
  <tbody>
    <center>
      <strong>Red Hair Pirates Scholarship</strong> 
      <br/><embed type="image/jpg" src="https://i.pinimg.com/564x/ba/12/f6/ba12f6b8c5cdb737439d17df9c9d55aa.jpg"  height="200" width="200"/><br/>
      <br/>
        <button className="button">See More</button>
      <br/>
    </center>
  </tbody>
</td>
</tr>

<tr>
<td>
  <tbody>
    <center>
      <strong>Big Mom Pirates Scholarship</strong> <br/> <embed type="image/jpg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dfgi7pm-f21c20e2-02c8-499d-81cf-61eb45330a32.png/v1/fill/w_1280,h_897,q_80,strp/big_mom_pirates_jolly_roger_by_jormxdos_dfgi7pm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk3IiwicGF0aCI6IlwvZlwvZThkZGM0ZGEtMjNkZC00NTAyLWI2NWItMzc4YzljZmU1ZWZhXC9kZmdpN3BtLWYyMWMyMGUyLTAyYzgtNDk5ZC04MWNmLTYxZWI0NTMzMGEzMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Sxe7kkuV0u-O-lo7--Ru2oX2FsOmJcC58sl8XiJYNrI"  height="200" width="200"/><br/>
        <button className="button">See More</button><br/>
    </center>
  </tbody>
</td>

<td>
  <tbody>
      <strong>Kidd Pirates Scholarship</strong> <br/> <embed type="image/png" src="https://i.pinimg.com/originals/8b/7d/dc/8b7ddc3414183776fbc9174ae7e70d27.png"  height="200" width="200"/><br/>
        <br/><button className="button">See More</button><br/>

  </tbody>
</td>
</tr>

  </table>
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