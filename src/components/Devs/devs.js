import React from 'react';

class Devs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      devAbout: true,
      devResume: false,
      devSkills: false,
      currentDev: {
        avatar: "/devs/elisbao.jpeg",
        about: {
          name: "",
          nasc: "",
          desc: ""
        },
        resume: {
          education: [
            {
              svg: "",
              title: "",
              where: "",
              period: ""
            }
          ],
          professional: [
            {
              svg: "",
              title: "",
              where: "",
              period: ""
            }
          ],
        },
        skills: [
          {
           svg: "",
            skill: "",
            level:"",
            xp: ""
        }
        ],
        cv: "",
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.getJSONFromApi('/devs/elisbao.json').then((json) => {
      this.setState({
        currentDev: json
      })
    })

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {

    this.setState({
    });

  };

  async getJSONFromApi(route) {
    try {
      let response = await fetch(route);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  showAbout = () => {
    this.setState({
      devAbout: true,
      devResume: false,
      devSkills: false,
    })
  }
  showResume = () => {
    this.setState({
      devAbout: false,
      devResume: true,
      devSkills: false,
    })
  }
  showSkills = () => {
    this.setState({
      devAbout: false,
      devResume: false,
      devSkills: true,
    })
  }

  showDevInfo = (e) => {
    let id = e.target.id;
    if (id === 'elisbao') {
      this.getJSONFromApi('/devs/elisbao.json').then((json) => {
        this.setState({
          currentDev: json
        })
      })
    } else {
      this.getJSONFromApi('/devs/thiagao.json').then((json) => {
        this.setState({
          currentDev: json
        })
      })
    }

  }

  getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }


  render() {

    return <div className="devs">
      <div className="listDevs">
        <div className="title sv">We,</div>
        <div id="elisbao" className="devFoto" onClick={this.showDevInfo}>
          {/* <svg width="150" height="150" fillRule="evenodd" xmlSpace="preserve" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" clipRule="evenodd">
            <g id="eye" transform="
            translate(24 24)

            scale(0.7)">
              <path fill="url(#color0)" className="fil0" d="M70.79 45.97c4.34,-0.05 8.91,0.29 12.76,1.35 2.75,0.74 5.09,1.78 7.02,3.13 0.01,0.01 0.02,0.01 0.03,0.02 7.73,4.89 12.88,13.63 12.88,23.61 0,6.67 -2.31,12.8 -6.15,17.58 -0.25,0.31 -0.27,0.72 -0.06,1.04 0.21,0.33 0.58,0.48 0.95,0.38 15.35,-4.26 30.82,-11.99 46.41,-23.18 0.21,-0.15 0.33,-0.36 0.36,-0.62 0.03,-0.26 -0.04,-0.5 -0.21,-0.69 -46.44,-52.77 -92.21,-52.67 -137.3,0.3 -0.29,0.34 -0.28,0.83 0,1.16 0.29,0.34 0.78,0.4 1.14,0.15 23.43,-16.3 44.15,-24.37 62.16,-24.23 0,0 0.01,0 0.01,0z" />
              <path fill="url(#color1)" className="fil1" d="M79.21 104.03c-4.34,0.05 -8.91,-0.29 -12.76,-1.35 -2.75,-0.74 -5.09,-1.78 -7.02,-3.13 -0.01,-0.01 -0.02,-0.01 -0.03,-0.02 -7.73,-4.89 -12.88,-13.63 -12.88,-23.61 0,-6.67 2.31,-12.8 6.15,-17.59 0.25,-0.3 0.27,-0.71 0.06,-1.03 -0.21,-0.33 -0.58,-0.48 -0.95,-0.38 -15.35,4.26 -30.82,11.99 -46.41,23.18 -0.21,0.15 -0.33,0.36 -0.36,0.62 -0.03,0.26 0.04,0.5 0.21,0.69 46.44,52.77 92.21,52.67 137.3,-0.3 0.29,-0.34 0.28,-0.83 0,-1.16 -0.29,-0.34 -0.78,-0.4 -1.14,-0.15 -23.43,16.3 -44.15,24.37 -62.16,24.23 0,0 -0.01,0 -0.01,0z" />
              <g>
                <path fill="url(#color4)" className="fil2" d="M75.08 93.11c-9.77,0 -17.69,-7.92 -17.69,-17.68 0,-9.77 7.92,-17.69 17.69,-17.69 9.76,0 17.68,7.92 17.68,17.69 0,9.76 -7.92,17.68 -17.68,17.68zm0 -19.6c1.07,0 1.91,0.84 1.91,1.92 0,1.07 -0.84,1.91 -1.91,1.91 -1.08,0 -1.92,-0.84 -1.92,-1.91 0,-1.08 0.84,-1.92 1.92,-1.92z" />
                <path fill="url(#color2)" className="fil3" d="M76.97 72.7l6.77 -10.73c3.22,2.04 5.62,5.14 6.78,8.77l-12.08 3.87c-0.26,-0.82 -0.8,-1.48 -1.47,-1.91z" />
                <path fill="url(#color3)" className="fil4" d="M73.13 78.39l-6.67 10.79c-3.24,-2 -5.67,-5.08 -6.87,-8.7l12.05 -3.98c0.27,0.82 0.81,1.47 1.49,1.89z" />
              </g>
            </g>
          </svg> */}
          <div className="imgContainer" id='elisbao'>
            <img
              id="elisbao"
              src="/devs/elisbao.jpeg"
              alt="elisbao"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div id="thiagao" className="devFoto" onClick={this.showDevInfo}>
          <img
            id="thiagao"
            src="/devs/thiagao.jpg"
            alt="thiagao"
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className='somenteMobile tabsDevs'>
      <button onClick={this.showAbout} class={this.state.devAbout ? "octActv" : "oct"}><span className='custom'>About</span></button>
            <button onClick={this.showResume} class={this.state.devResume ? "octActv" : "oct"}><span className="custom">Resume</span></button>
            <button onClick={this.showSkills} class={this.state.devSkills ? "octActv" : "oct"}><span className="custom">Skills</span></button>
        </div>
      <div className="aboutDevs">
        <div className="devsSide">
          <div className="devsCardImg">
            <img
              id="t"
              src={this.state.currentDev.avatar}
              alt="currentDev"
              width={130}
              height={130}
            />
          </div>
          <div className="devsMenu">

            <button onClick={this.showAbout} class={this.state.devAbout ? "octagonActv" : "octagon"}><span className='custom'>About</span></button>
            <button onClick={this.showResume} class={this.state.devResume ? "octagonActv" : "octagon"}><span className="custom">Resume</span></button>
            <button onClick={this.showSkills} class={this.state.devSkills ? "octagonActv" : "octagon"}><span className="custom">Skills</span></button>

            <button class="downloadbutton" onClick={() => window.open(this.state.currentDev.cv)}><span className="custom ">Download cv</span></button>
          </div>
        </div>
        <div className="devsBody">
        <p className='titleDevAbout'>{this.state.currentDev.about.name}, <span>{this.getAge(this.state.currentDev.about.nasc)}</span></p>

          {this.state.devAbout && <div className="devAbout">
            {this.state.currentDev.about.desc}
          </div>}
          {this.state.devResume && <div className="devResume">
            <p>EDUCATION</p>
            <div className='cards'>{this.state.currentDev.resume.education.map((element) => {
              return (
                <div className='cardResume'>
                  <div className='svg'><img src={element.svg}
              alt="icon"
              width={60}
              height={60}></img></div>
                  <div className='content'>
                    <span>{element.title}</span>
                    <span>{element.where}</span>
                    <span>{element.period}</span>
                  </div>
                </div>
              )
            })}</div>

            <p>EXPERIENCE</p>
            <div className='cards'>{this.state.currentDev.resume.professional.map((element) => {
              return (
                <div className='cardResume'>
                  <div className='svg'><img src={element.svg}
              alt="icon"
              width={60}
              height={60}></img></div>
                  <div className='content'>
                    <span>{element.title}</span>
                    <span>{element.where}</span>
                    <span>{element.period}</span>
                  </div>
                </div>
              )
            })}</div>


          </div>}
          {this.state.devSkills && <div className="devSkills">
            <div className='cards'>{this.state.currentDev.skills.map((element) => {
              return (
                <div className='cardSkill'>
                <div className='svg'><img src={element.svg}
            alt="icon"
            width={45}
            height={45}></img></div>
                <div className='content'>
                  <span>{element.skill}</span>
                  <span><div class="progress">
                      <span class="progress-bar" style={{"width" : element.level}}></span>
                    </div>{element.level}</span>
                  <span>{element.xp}</span>
                </div>
              </div>              
               
              )
            })}</div>
          </div>}
        </div>
      </div>
      <div className='somenteMobile downloadMobilebutton'>
      <button class="downloadbutton" onClick={() => window.open(this.state.currentDev.cv)}><span className="custom ">Download cv</span></button>
      </div>
    </div>
  }
}

export default Devs;