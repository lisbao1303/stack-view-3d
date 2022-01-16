import React from 'react';

import * as Scroll from 'react-scroll';

class ScrollUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: "0%",
            text: <> &nbsp;•&nbsp;&nbsp;•&nbsp;&nbsp;•&nbsp;&nbsp;stackview&nbsp;&nbsp;•&nbsp;&nbsp; •&nbsp;&nbsp; •&nbsp; scroll&nbsp; down&nbsp; to &nbsp;see&nbsp; more</>,
            rotate: 0,
            show_controls: false,
            move: this.handleContact
        };

        this.handleScroll = this.scrollListener.bind(this);

        this.tooltipControlsObserverI = {
            observers: [],
            onShowControlsMove: (event)=> {
                this.tooltipControlsObserverI.observers.forEach((observer)=>{
                observer(event);
              });
            },
            registerObserver: (observer)=> {
              this.tooltipControlsObserverI.observers.push(observer);
            }
        };

    }

    handleUp = () => {
        const scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }

    handleBottom = () => {
        const scroll = Scroll.animateScroll;
        scroll.scrollToBottom();
    }

    
    handleClick = (e) => {
        if (this.state.open) {
            this.setState({
                
            })
        } else {
            this.setState({
                
            })
            
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate(prevProps, prevState) {
        const inInterval = (min, v, max) => v>=min && v<=max || v>=max && v<=min;
        if (!this.state.show_controls){
            if (inInterval(prevState.progress, 100, this.state.progress)){
                document.body.classList.add("stop-scrolling");
                this.tooltipControlsObserverI.onShowControlsMove();
                setTimeout(()=>{
                    document.body.classList.remove("stop-scrolling");
                }, 5000);
                this.setState({
                    show_controls: true
                });
            }
        }
    }

    scrollListener(event) {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        // da documentação 
        //Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state
        // vou mudar para função anonima
        this.setState((p_state)=>{
            let new_state = {};
            new_state.progress = (window.pageYOffset / totalHeight) * 100 * 4;
            new_state.rotate= ((window.pageYOffset / totalHeight) * 100) * 360 / 100;
            if (new_state.progress > 30) {
                new_state.text= <> back to the start  &nbsp;&nbsp;• &nbsp;&nbsp; Scroll Up  &nbsp;&nbsp;•&nbsp;&nbsp; Scroll Up &nbsp;&nbsp;•&nbsp; &nbsp;</>;
                new_state.move= this.handleUp;
            } else {
                new_state.text= <> &nbsp;•&nbsp;&nbsp;•&nbsp;&nbsp;•&nbsp;&nbsp;stackview&nbsp;&nbsp;•&nbsp;&nbsp; •&nbsp;&nbsp; •&nbsp; scroll&nbsp; down&nbsp; to &nbsp;see&nbsp; more</>
                new_state.move= this.handleBottom;
            }
            return new_state;
        });
        //chato pa bune 
        //console.log(this.state.progress);

    };

    render() {

        return (
            <div className="ScrollButton sv">
                <svg width="200" height="200" fillRule="evenodd">
                    <defs>
                        <radialGradient id="radial">
                            <stop offset="0%" stopColor="#ff6600" />
                            <stop offset= {Math.round(this.state.progress/4) +"%"} stopColor="#ff6600" />
                            <stop offset={Math.round(this.state.progress/4)+10 +"%"} stopColor="white" />                            
                        </radialGradient>

                    </defs>
                    <circle cx="100" cy="100" r="63.662" stroke="white" strokeWidth="3" strokeDasharray={this.state.progress + ", 400"} fill="none" />
                    <g onClick={() => {if (this.state.move!== null) this.state.move();}} id="ScrollText">
                        <path
                            d="M50,100a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"
                            fill="none"
                            id="curve"
                        />
                        <g style={{ transform: "rotate(" + this.state.rotate + "deg)", transformOrigin: "50% 50%" }}>
                            <path fill="url(#radial)" className="fil0" d="M100 128c-15.46,0 -28,-12.54 -28,-28 0,-15.47 12.54,-28 28,-28 15.46,0 28,12.53 28,28 0,15.46 -12.54,28 -28,28zm0 -31.04c1.7,0 3.04,1.34 3.04,3.04 0,1.7 -1.34,3.04 -3.04,3.04 -1.7,0 -3.04,-1.34 -3.04,-3.04 0,-1.7 1.34,-3.04 3.04,-3.04z" />
                            <path fill="#CCCCCC" className="fil1" d="M103 95.69l10.72 -16.99c5.1,3.22 8.9,8.13 10.74,13.88l-19.13 6.12c-0.42,-1.3 -1.26,-2.34 -2.33,-3.01z" />
                            <path fill="#B3B3B3" className="fil2" d="M96.92 104.69l-10.56 17.09c-5.13,-3.18 -8.98,-8.05 -10.87,-13.78l19.07 -6.3c0.43,1.29 1.28,2.32 2.36,2.99z" />
                        </g>

                        <text width="10" id="textScroll" fontSize="13">
                            <textPath id="text" alignmentBaseline="top" stroke="black" fill="white" xlinkHref="#curve">
                                {this.state.text}
                            </textPath>
                        </text>
                    </g>

                </svg>
            </div>
        );
    }

}

export default ScrollUp;