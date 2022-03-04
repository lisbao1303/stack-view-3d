
import React from 'react';

export default function Front() {


    return <div className="front" >

        <div className="icon">

            <img
                id="back"
                src="/viewicons/nodisk.svg"
                alt="stackview"
                layout="fill"
            /><div className="front"><img
                id="f"
                src="/viewicons/disk.svg"
                alt="stackview"
                layout="fill"

            /></div>
        </div>
        <div className="stack">
            <div className="sv s">Stack</div>
            <div className="sv v">View</div>
        </div>

        <div className="fdd">
            <div className="f custom">Engineering</div>
            <div className="d custom">design</div>
            <div className="m custom" >fullstack development</div>
        </div>
    </div>




}
