
export default function loader() {

    return <div className="loader">
        <div className="loading">
            <svg id="svgC" width="5000" height="800" fill="black" viewBox="0 0 10000 10000" fillRule="evenodd">
                <defs>
                    <radialGradient id="orange">
                        <stop offset="1" stopOpacity="1" stopColor="#ff6600" >
                            <animate
                                attributeName="offset"
                                from="1" to="0" dur="0.8s"
                                begin="2"
                                fill="freeze" />
                        </stop>
                        <stop offset="1" stopOpacity="1" stopColor="transparent" >
                        <animate
                                attributeName="offset"
                                from="1" to="0" dur="0.8s"
                                begin="2"
                                fill="freeze" />
                        </stop>
                        <stop offset="1" stopOpacity="1" stopColor="transparent" />
                    </radialGradient>
                    <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="5347" y1="4500" x2="4605" y2="6096">
                        <stop offset="0" stopOpacity="1" stopColor="#000014" />
                        <stop offset="0.568627" stopOpacity="1" stopColor="#040F43" />
                        <stop offset="1" stopOpacity="1" stopColor="#091E73" />
                    </linearGradient>
                    <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="4667" y1="5506" x2="5382" y2="3898">
                        <stop offset="0" stopOpacity="1" stopColor="#003153" />
                        <stop offset="0.611765" stopOpacity="1" stopColor="#04558E" />
                        <stop offset="1" stopOpacity="1" stopColor="#0879C9" />
                    </linearGradient>
                    <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="5023" y1="4891" x2="5299" y2="4802">
                        <stop offset="0" stopOpacity="1" stopColor="white" />
                        <stop offset="0.0117647" stopOpacity="0.478431" stopColor="white" />
                        <stop offset="1" stopOpacity="0.478431" stopColor="white" />
                    </linearGradient>
                    <linearGradient id="id3" gradientUnits="userSpaceOnUse" xlinkHref="#id2" x1="4980" y1="5133" x2="4705" y2="5223">
                    </linearGradient>
                    <radialGradient id="id4" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.00001 -0 -0 0.999994 0 0)" cx="5002" cy="5009" r="1209" fx="5002" fy="5009">
                        <stop offset="0" stopOpacity="1" stopColor="#FF9B05" />
                        <stop offset="0" stopOpacity="1" stopColor="#FF6600" >
                        <animate
                                attributeName="offset"
                                from="0" to="1" dur="1s"
                                begin="2"
                                fill="freeze" />
                        </stop>
                        <stop offset="0" stopOpacity="1" stopColor="white" >
                        <animate
                                attributeName="offset"
                                from="0" to="1" dur="1s"
                                begin="2"
                                fill="freeze" />
                        </stop>
                    </radialGradient>
                </defs>
                
            </svg>

        </div>
        <div className="boxOrange">
        <div className="loading">
            <svg width="5000" height="800" viewBox="0 0 10000 10000" fillRule="evenodd">
            {/* <animate
                            attributeName="viewBox"
                            from="0 20000 10000 10000"
                            to="0 0 10000 10000"
                            dur="0.9s"

                            fill="freeze"
                        /> */}

            <g transform=""  opacity="1">
                {/* <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="6.6"
                            fill="freeze" /> */}
                    <path fill="url(#id1)" d="M4910 4378c93,-1 191,6 273,29 59,16 109,38 150,67 0,0 0,0 1,0 166,105 276,292 276,506 0,143 -49,274 -132,377 -5,7 -6,15 -1,22 5,7 13,10 20,8 329,-91 660,-257 995,-497 5,-3 7,-8 8,-13 1,-6 -1,-11 -5,-15 -995,-1131 -1976,-1129 -2942,7 -6,7 -6,18 0,25 6,7 17,9 24,3 502,-349 946,-522 1332,-519 0,0 0,0 0,0z" />
                    <circle cx="5000" cy="7680" r="3000" stroke="black" strokeWidth="1400" strokeDasharray="0 125% 50%" fill="none">
                        <animate
                            attributeName="stroke-dashoffset"
                            begin="3.4s"
                            from="0"
                            to="-4000"
                            dur="0.4s"
                            fill="freeze"
                        />
                    </circle>
                    <path className="fil1" fill="url(#id0)" d="M5090 5622c-93,1 -191,-6 -273,-29 -59,-16 -109,-38 -150,-67 0,0 -1,0 -1,0 -166,-105 -276,-292 -276,-506 0,-143 49,-274 132,-377 5,-7 6,-15 1,-22 -4,-7 -13,-10 -20,-8 -329,91 -660,257 -994,497 -5,3 -7,8 -8,13 -1,6 1,11 5,15 995,1131 1976,1129 2942,-7 6,-7 6,-18 0,-25 -6,-7 -17,-9 -24,-3 -502,349 -946,522 -1332,519 0,0 0,0 0,0z" />
                    <circle cx="5000" cy="2320" r="3000" stroke="black" strokeWidth="1400" strokeDasharray="0 25% 75%" fill="none">
                        <animate
                            attributeName="stroke-dashoffset"
                            begin="3s"
                            from="0"
                            to="-4000"
                            dur="0.4s"
                            fill="freeze"
                        />
                    </circle>
                    {/* <circle cx="5000" cy="5000"  fill="url(#orange)" r="10000" >

                    </circle> */}
                    <rect x="-5000" y="-5000" width="20000" fill="url(#orange)" height="20000" />


                    <g >
                        <path fill="url(#id4)" d="M5002 5388c-209,0 -379,-170 -379,-379 0,-209 170,-379 379,-379 209,0 379,170 379,379 0,209 -170,379 -379,379zm0 -420c23,0 41,18 41,41 0,23 -18,41 -41,41 -23,0 -41,-18 -41,-41 0,-23 18,-41 41,-41z" />
                        <path fill="url(#id2)" d="M5042 4951l145 -230c69,44 121,110 145,188l-259 83c-6,-18 -17,-32 -32,-41z" />
                        <path fill="url(#id3)" d="M4960 5073l-143 231c-69,-43 -122,-109 -147,-187l258 -85c6,18 17,32 32,41z" />
                        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 5000 5000"
                          to="360 5000 5000"
                          dur="0.2s"
                          begin="2"
                          repeatCount="indefinite"/>
                    </g>
                    <g
                    transform="
                    translate(3250 3240)

                    scale(0.7)">
                        <animate id="animation1"
                            attributeName="opacity"
                            from="1" to="0" dur="0.1ms"
                            begin="2.8"
                            fill="freeze" />

                        <path id="lowake2" fill="none" stroke="#ff6600" strokeWidth="1100" strokeLinecap="round" strokeMiterlimit="22.9256" d="M400 2460, Q2500,2600 4600 2460" >

                        <animate xlinkHref="#lowake2"
                            attributeName="d"
                            attributeType="XML" 
                            from="M400 2460, Q2500,2600 4600 2460"
                            to="M400 2460, Q2500,0 4600 2460"
                            begin="1.2"
                            dur="0.3s"
                            fill="freeze" />
                        <animate id="animation1"
                            attributeName="opacity"
                            from="1" to="0" dur="0.1ms"
                            begin="1.4"
                            fill="freeze" />
                    </path>
                    <path id="redeye" opacity="0" fill="none" stroke="black" strokeWidth="250" strokeLinecap="round" strokeMiterlimit="22.9256" d="M891 2537, Q2500,4400 4109 2527" >
                    <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="1.1"
                            fill="freeze" />
                    </path>
                    <path id="loweye2" fill="none" opacity="0" stroke="black" strokeWidth="250" strokeLinecap="round" strokeMiterlimit="22.9256" d="M891 2537, Q2500,4400 4109 2527" >
                    <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="1.1"
                            fill="freeze" />
                        <animate xlinkHref="#loweye2"
                            attributeName="d"
                            attributeType="XML"
                            from="M891 2537, Q2500,4400 4109 2527"
                            to="M891 2537, Q2500,600 4109 2527"
                            begin="1.2s"
                            dur="0.3s"
                            fill="freeze" />
                    </path>
                    <path id="p112" fill="none" stroke="black" strokeWidth="250" opacity="0" strokeLinecap="round" strokeMiterlimit="22.9256" d="M850 1950, 850 1950" >
                        {/* aparece */}
                        <animate xlinkHref="#p112"
                            attributeName="d"
                            attributeType="XML"
                            from="M850 1950, 850 1950"
                            to="M850 1950, 660 1750"
                            begin="1.2"
                            dur="0.1ms"
                            fill="freeze" />
                        <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="1.2"
                            fill="freeze" />

                    </path>
                    <path id="p222" fill="none" stroke="black" strokeWidth="250" opacity="0" strokeLinecap="round" strokeMiterlimit="22.9256" d="M1600 1370, 1600 1370" >
                        <animate xlinkHref="#p222"
                            attributeName="d"
                            attributeType="XML"
                            from="M1600 1370, 1600 1370"
                            to="M1600 1370, 1450 1100"
                            begin="1.3"
                            dur="0.1ms"
                            fill="freeze" />
                        <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="1.3"
                            fill="freeze" />

                    </path>
                    <path id="p32" fill="none" stroke="black" strokeWidth="250" opacity="0" strokeLinecap="round" strokeMiterlimit="22.9256" d="M2500 1150, 2500 1150" >
                        <animate xlinkHref="#p32"
                            attributeName="d"
                            attributeType="XML"
                            from="M2500 1150, 2500 1150"
                            to="M2500 1150, 2500 870"
                            begin="1.4"
                            dur="0.1ms"
                            fill="freeze" />
                        <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="1.4"
                            fill="freeze" />

                    </path>
                    <path id="p42" fill="none" stroke="black" strokeWidth="250" opacity="0" strokeLinecap="round" strokeMiterlimit="22.9256" d="M3400 1370, 3400 1370" >
                        <animate xlinkHref="#p42"
                            attributeName="d"
                            attributeType="XML"
                            from="M3400 1370, 3400 1370"
                            to="M3400 1370, 3550 1100"
                            begin="1.5"
                            dur="0.1ms"
                            fill="freeze" />
                        <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="1.5"
                            fill="freeze" />

                    </path>
                    <path id="p52" fill="none" stroke="black" strokeWidth="250" opacity="0" strokeLinecap="round" strokeMiterlimit="22.9256" d="M4150 1950, 4150 1950" >
                        <animate xlinkHref="#p52"
                            attributeName="d"
                            attributeType="XML"
                            from="M4150 1950, 4150 1950"
                            to="M4150 1950, 4400 1750"
                            begin="1.6"
                            dur="0.1ms"
                            fill="freeze" />
                        <animate id="animation1"
                            attributeName="opacity"
                            from="0" to="1" dur="0.1ms"
                            begin="1.6"
                            fill="freeze" />

                    </path>


                </g>

                </g>
                </svg>
            </div>
            </div>

    </div>
}
