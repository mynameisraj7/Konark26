import "./Homefooter.css";
import iconnectlogo from "./assets/iconnectlog.svg";
import konarklogo from "./assets/konark.png";
import whiteline from "./assets/whiteline.png";


function Homefooter() {
  return (
    <>
      <section className="footerblack">
          <div className="footcontainer">
            <div className="foottop">
            <div className="footleft">
            <div className="imgcontent">
              <img src={konarklogo} alt="footer image" />
              <img src={whiteline} alt="footer image" />
              <img src={iconnectlogo} alt="footer image" />
            </div>
            <div className="lowerimg">
              Konark’26 at GJUS&T Hisar is Haryana’s premier technology and innovation fest, organized by Team iConnect, PDUIIC, to inspire creativity, foster innovation, and empower the next generation of visionary leaders.
            </div>
            
            </div>
            <div className="address">
                <h2>Address</h2>
                <p>Ground Floor, PDUIIC,<br/>
                    GJUS&T, Hisar,<br/>
                    Haryana - 125001</p>
            </div>
            <div className="footright">
              <div className="footcontact">
                <h2>Query</h2>
                <div className="contactcontent">
                <div className="conleft">
                  <h3>Let us know about your queries.<br/> Support will be given within 24 hours.</h3>
                  <a href="https://forms.gle/XUtgD2DS21iNYeDR9" className="footbut">Click Here</a>
                  {/* <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 7011964796 (Yuvansh)</p>
                  </div>
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9729561035 (Tushar)</p>
                  </div>
                  <h3>For Event queries</h3> 
                 <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9813709139 (Vansh)</p>
                  </div>
                   <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 7015537609 (Krish)</p>
                  </div> */}
                </div>
                <div className="conright">
                   <h3>For other queries</h3>
                  <div className="phonecont">
                     <i class='bx bx-phone'></i>
                     <p>+91 9467905906</p>
                  </div>
                <h3>You can also mail us at</h3> 
                 <div className="phonecont">
                     <i class='bx bx-envelope' ></i>
                     <p>iconnectgjust@gmail.com</p>
                  </div>
                </div>
                </div>
                <div className="context">
                  Team iConnect under PDUIIC is conducting the fest and is dedicated to help you with your queries . 
                </div>
              </div>
            </div>
            </div>
            <div className="divider"></div>
            <div className="footbottom">
              <div>Built with ❤️ by Team iConnect</div>
              <div>© Team iConnect, PDUIIC, GJUS&T, Hisar. All Rights Reserved</div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Homefooter;
