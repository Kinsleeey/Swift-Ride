import React from 'react'
import { useState } from 'react'
import Option, {HomeOption} from './options'


function App() {
    const [currentScreen, setCurrentScreen] = useState("s1")
    const [screens, setScreens] = useState(["s1"]);

    function go(screenId) {
        setCurrentScreen(screenId);
        setScreens(prevVal => {
            return [
                ...prevVal,
                screenId
            ]
        })
    }

    function goBack() {
        const newScreens = [...screens];
        newScreens.pop();
        const last = newScreens.at(-1)
        
        setScreens(newScreens)
        setCurrentScreen(last)
    }

    function selectChip() {

    }

  return (
    <div className="app">

        <div className="header">
            <div className="logo">Swift<span>Ride</span></div>
            <div className="h-nav">
                <hr style={{width: "20px", border: "1px solid white"}} />
                <hr style={{width: "20px", border: "1px solid white"}} />
                <hr style={{width: "20px", border: "1px solid white"}} />
            </div>
        </div>

        <div className="progress">
            <div className="dot active" id="d1"></div>
            <div className="dot" id="d2"></div>
            <div className="dot" id="d3"></div>
            <div className="dot" id="d4"></div>
        </div>

        {/* <!-- Screen 1: Home --> */}
        <div className={`screen ${currentScreen === "s1" ? "active" : ""}`} id="s1">
            <div className="hero">
                <div className="hero-tag">Speed & Efficiency</div>
                <h1>What do you <em>need</em> today?</h1>
                <p>Fast, reliable dispatch at your fingertips.</p>
            </div>
            <div className="choice-grid">
                <HomeOption addClass="accent-card" click={() => go('s2-ride')} image="/undraw_on-the-way_zwi3 (1).svg" mainText="I need a ride" subText="Go anywhere, anytime" />
                <HomeOption click={() => go('s2-errand')} image="/undraw_empty_4zx0 (1).svg" mainText="Run an errand" subText="Pick up, deliver, buy" />
            </div>
            <div className="section-label">Quick access</div>
            <div className="option-list">
                <Option click={() => go('s3-food')} icon="🍔" mainText="Order food" subText="From nearby restaurants" tag="popular" />
                <Option click={() => go('s4-confirm')} icon="🔄" mainText="Multiple waybills" subText="Batch pickup or delivery across locations" tag="Batch" />
                <Option click={() => go('s3-ride-schedule')} icon="🕐" mainText="Schedule a ride" subText="Book ahead for a specific date & time" tag="on time"/>
            </div>
        </div>

        {/* <!-- Screen 2a: Ride options --> */}
        <div className={`screen ${currentScreen === "s2-ride" ? "active" : ""}`} id="s2-ride">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Rides</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Where are you <em>headed?</em></h1>
            </div>
            <div className="section-label">Choose ride type</div>
            <div className="option-list">
                
                <Option click={() => go('s3-ride-now')} icon="⚡" mainText="Ride now" subText="Instant pickup, driver arrives in minutes" tag="~5 min" />
                <Option click={() => go('s3-ride-multi')} icon="🗺️" mainText="Multi-stop ride" subText="A → B → C, multiple destinations" tag="›" />
                <Option click={() => go('s3-ride-schedule')} icon="🕐" mainText="Schedule a ride" subText="Book ahead for a specific date & time" tag="›" />
                
            </div>
            <div className="spacer"></div>
        </div>

            {/* <!-- Screen 2b: Errand options --> */}
        <div className={`screen ${currentScreen === "s2-errand" ? "active" : ""}`} id="s2-errand">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Errands</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>What should we <em>handle?</em></h1>
            </div>
            <div className="option-list">
                <Option click={() => go('s3-delivery')} icon="📦" mainText="Item delivery" subText="Pick up & drop off, single or multiple stops" tag=">" />
                <Option click={() => go('s3-food')} icon="🍔" mainText="Food order" subText="Order from one or multiple restaurants" tag="popular" />
                <Option click={() => go('s3-grocery')} icon="🛒" mainText="Grocery shopping" subText="We buy and deliver your list" tag=">" />
                <Option click={() => go('s3-laundry')} icon="👕" mainText="Laundry pickup" subText="Drop off or collect your laundry" tag=">" />
                <Option click={() => go('s3-waybill')} icon="📋" mainText="Waybill" subText="Pickup or drop off waybill to different terminals" tag=">" />
                <Option click={() => go('s3-pharmacy')} icon="💊" mainText="Pharmacy run" subText="Get your medications delivered fast" tag="New" />
            </div>
        </div>

        {/* <!-- Screen 3: Ride now --> */}
        <div className={`screen ${currentScreen === "s3-ride-now" ? "active" : ""}`} id="s3-ride-now">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Ride now</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Set your <em>route</em></h1>
            </div>
            <div className="route-builder">
                <div className="route-stop">
                <div className="stop-dot green"></div>
                <div style={{width: "100%"}}>
                    <div className="stop-label">Pickup</div>
                    <input type="text" name="pickup" placeholder="Enter current location" />
                </div>
                </div>
                <div className="route-stop">
                <div className="stop-dot red"></div>
                <div style={{width: "100%"}}>
                    <div className="stop-label">Drop-off</div>
                    <input type="text" name="pickup" placeholder="Where to ?" />
                </div>
                </div>
            </div>
            <button className="cta-btn" onClick={() => go('s4-confirm')}>Find a driver →</button>
        </div>

        {/* <!-- Screen 3: Food --> */}
        <div className={`screen ${currentScreen === "s3-food" ? "active" : ""}`} id="s3-food">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Food order</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>How are you <em>ordering?</em></h1>
            </div>
            <div className="section-label">Number of restaurants</div>
            <div className="chip-row">
                <div className="chip selected" onClick={() => selectChip(this)}>Single restaurant</div>
                <div className="chip" onClick={() => selectChip(this)}>Multiple restaurants</div>
            </div>
            <div className="section-label">Delivery type</div>
            <div className="chip-row">
                <div className="chip selected" onClick={() => selectChip(this)}>Deliver to me</div>
                <div className="chip" onClick={() => selectChip(this)}>Multiple drop-offs</div>
            </div>
            <div className="route-builder">
                <div className="route-stop"><div className="stop-dot amber"></div><div><div className="stop-label">Restaurant</div><div className="stop-value">Search restaurant name</div></div></div>
                <div className="route-stop"><div className="stop-dot red"></div><div><div className="stop-label">Deliver to</div><div className="stop-value">Your address</div></div></div>
            </div>
            <div className="schedule-row" onClick={() => toggleSchedule(this)}>
                <div className="schedule-left"><span className="schedule-icon">🕐</span><div className="schedule-text"><div className="title">Schedule for later</div><div className="sub">Choose a time</div></div></div>
                <div className="toggle"><div className="toggle-thumb"></div></div>
            </div>
            <div className="spacer"></div>
            <button className="cta-btn" onClick={() => go('s4-confirm')}>Continue →</button>
        </div>

        {/* <!-- Screen 3: Delivery --> */}
        <div className={`screen ${currentScreen === "s3-delivery" ? "active" : ""}`} id="s3-delivery">
            <div className="hero">
                <div className="hero-tag-div" >
                    <div className="hero-tag">Item delivery</div>
                    <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Plan your <em>delivery</em></h1>
            </div>
            <div className="section-label">Route type</div>
            <div className="chip-row">
                <div className="chip selected" onClick={() => selectChip(this)}>A → B</div>
                <div className="chip" onClick={() => selectChip(this)}>A → B → C</div>
                <div className="chip" onClick={() => selectChip(this)}>A → B, C, D</div>
            </div>
            <div className="route-builder">
                <div className="route-stop"><div className="stop-dot green"></div><div><div className="stop-label">Pickup from</div><div className="stop-value">Enter address</div></div></div>
                <div className="route-stop"><div className="stop-dot red"></div><div><div className="stop-label">Deliver to</div><div className="stop-value">Enter address</div></div></div>
                <div className="add-stop">＋ Add another stop</div>
            </div>
            <div className="schedule-row" onClick={() => toggleSchedule(this)}>
                <div className="schedule-left"><span className="schedule-icon">🕐</span><div className="schedule-text"><div className="title">Schedule for later</div><div className="sub">Choose a date and time</div></div></div>
                <div className="toggle"><div className="toggle-thumb"></div></div>
            </div>
            <div className="spacer"></div>
            <button className="cta-btn" onClick={() => go('s4-confirm')}>Continue →</button>
        </div>

        {/* <!-- Screen 3: Laundry --> */}
        <div className={`screen ${currentScreen === "s3-laundry" ? "active" : ""}`} id="s3-laundry">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Laundry</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Pickup or <em>drop-off?</em></h1>
            </div>
            <div className="section-label">Service type</div>
            <div className="chip-row">
                <div className="chip selected" onClick={() => selectChip(this)}>Pickup laundry</div>
                <div className="chip" onClick={() => selectChip(this)}>Deliver laundry</div>
                <div className="chip" onClick={() => selectChip(this)}>Both</div>
            </div>
            <div className="section-label">Locations</div>
            <div className="chip-row">
                <div className="chip selected" onClick={() => selectChip(this)}>Single location</div>
                <div className="chip" onClick={() => selectChip(this)}>Multiple locations</div>
            </div>
            <div className="route-builder">
                <div className="route-stop"><div className="stop-dot green"></div><div><div className="stop-label">Pickup from</div><div className="stop-value">Enter address</div></div></div>
                <div className="route-stop"><div className="stop-dot red"></div><div><div className="stop-label">Drop off at</div><div className="stop-value">Laundry address</div></div></div>
            </div>
            <div className="spacer"></div>
            <button className="cta-btn" onClick={() => go('s4-confirm')}>Continue →</button>
        </div>

        {/* <!-- Screen 3: Waybill --> */}
        <div className={`screen ${currentScreen === "s3-waybill" ? "active" : ""}`} id="s3-waybill">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Waybills</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Handle your <em>waybill</em></h1>
            </div>
            <div className="section-label">What do you need?</div>
            <div className="option-list">
                <Option click={() => go('s4-confirm')} icon="📤" mainText="Pick up waybill" subText="Collect from sender, deliver to you" tag=">" />
                <Option click={() => go('s4-confirm')} icon="📤" mainText="Drop off waybill" subText="We take it to the courier or recipient" tag=">" />
                <Option click={() => go('s4-confirm')} icon="🔄" mainText="Multiple waybills" subText="Batch pickup or delivery across locations" tag="Batch" />
            </div>
            <div className="spacer"></div>
        </div>

        {/* <!-- Screen 3: Grocery --> */}
        <div className={`screen ${currentScreen === "s3-grocery" ? "active" : ""}`} id="s3-grocery">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Groceries</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>We'll shop <em>for you</em></h1>
            </div>
            <div className="section-label">Number of stores</div>
            <div className="chip-row">
                <div className="chip selected" onClick={() => selectChip(this)}>One store</div>
                <div className="chip" onClick={() => selectChip(this)}>Multiple stores</div>
            </div>
            <div className="route-builder">
                <div className="route-stop"><div className="stop-dot amber"></div><div><div className="stop-label">Shop at</div><div className="stop-value">Store name or location</div></div></div>
                <div className="route-stop"><div className="stop-dot red"></div><div><div className="stop-label">Deliver to</div><div className="stop-value">Your address</div></div></div>
                <div className="add-stop">＋ Add another store</div>
            </div>
            <div className="schedule-row" onClick={() => toggleSchedule(this)}>
                <div className="schedule-left"><span className="schedule-icon">🕐</span><div className="schedule-text"><div className="title">Schedule for later</div><div className="sub">Choose a time</div></div></div>
                <div className="toggle"><div className="toggle-thumb"></div></div>
            </div>
            <div className="spacer"></div>
            <button className="cta-btn" onClick={() => go('s4-confirm')}>Continue →</button>
        </div>

        {/* <!-- Screen 3: Pharmacy --> */}
        <div className={`screen ${currentScreen === "s3-pharmacy" ? "active" : ""}`} id="s3-pharmacy">
        <div className="hero">
            <div className="hero-tag-div" >
            <div className="hero-tag">Pharmacy</div>
            <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
            </div>
            <h1>Get your <em>meds</em> fast</h1>
        </div>
            <div className="option-list">
                <Option click={() => go('s4-confirm')} icon="🏥" mainText="Nearest pharmacy" subText="We find the closest one to you" tag="Fastest" />
                <Option click={() => go('s4-confirm')} icon="📍" mainText="Specific pharmacy" subText="You choose which pharmacy" tag=">" />
                <Option click={() => go('s4-confirm')} icon="🔄" mainText="Multiple pharmacies" subText="Check stock across locations" tag=">" />  
            </div>
            <div className="spacer"></div>
        </div>

        {/* <!-- Screen 3: Scheduled ride --> */}
        <div className={`screen ${currentScreen === "s3-ride-schedule" ? "active" : ""}`} id="s3-ride-schedule">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Schedule a ride</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Book <em>ahead</em> of time</h1>
            </div>
            <div className="route-builder">
                <div className="route-stop"><div className="stop-dot green"></div><div style={{width: '100%'}}><div className="stop-label">Pickup</div><input type="text" name="pickup" placeholder="Enter your location" /></div></div>
                <div className="route-stop"><div className="stop-dot red"></div><div style={{width: '100%'}}><div className="stop-label">Drop-off</div><input type="text" name="pickup" placeholder="Destination" /></div></div>
                <div className="add-stop">＋ Add a stop</div>
            </div>
            <div className="confirm-card">
                <div className="confirm-title">📅 When?</div>
                <div className="confirm-row"><span className="label">Date</span><span className="value">Select date →</span></div>
                <div className="confirm-row"><span className="label">Time</span><span className="value">Select time →</span></div>
                <div className="confirm-row"><span className="label">Reminder</span><span className="value">30 mins before</span></div>
            </div>
            <div className="spacer"></div>
            <button className="cta-btn" onClick={() => go('s4-confirm')}>Confirm booking →</button>
        </div>

        {/* <!-- Screen 3: Multi-stop ride --> */}
        <div className={`screen ${currentScreen === "s3-ride-multi" ? "active" : ""}`} id="s3-ride-multi">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Multi-stop ride</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Plan your <em>stops</em></h1>
            </div>
            <div className="route-builder">
                <div className="route-stop"><div className="stop-dot green"></div><div style={{width: '100%'}}><div className="stop-label">Start</div><input type="text" name="pickup" placeholder="Enter current location" /></div></div>
                <div className="route-stop"><div className="stop-dot amber"></div><div style={{width: '100%'}}><div className="stop-label">Stop 1</div><input type="text" name="pickup" placeholder="Enter address" /></div></div>
                <div className="route-stop"><div className="stop-dot red"></div><div style={{width: '100%'}}><div className="stop-label">Final stop</div><input type="text" name="pickup" placeholder="Enter address" /></div></div>
                <div className="add-stop">＋ Add a stop</div>
            </div>
            <div className="spacer"></div>
            <button className="cta-btn" onClick={() => go('s4-confirm')}>Find a driver →</button>
        </div>

        {/* <!-- Screen 4: Confirm --> */}
        <div className={`screen ${currentScreen === "s4-confirm" ? "active" : ""}`} id="s4-confirm">
            <div className="hero">
                <div className="hero-tag-div" >
                <div className="hero-tag">Almost done</div>
                <div className="back-btn" id="back-btn" onClick={() => goBack()}>←</div>
                </div>
                <h1>Confirm your <em>order</em></h1>
            </div>
            <div className="confirm-card">
                <div className="confirm-title">📦 Order summary</div>
                <div className="confirm-row"><span className="label">Service</span><span className="value">Item delivery</span></div>
                <div className="confirm-row"><span className="label">Route</span><span className="value">A → B → C</span></div>
                <div className="confirm-row"><span className="label">Pickup</span><span className="value">Now</span></div>
                <div className="confirm-row"><span className="label">Estimated time</span><span className="value">~25 min</span></div>
            </div>
            <div className="confirm-card">
                <div className="price-row">
                <span className="price-label">Estimated cost</span>
                <span className="price-value">₦2,400</span>
                </div>
            </div>
            <div className="spacer"></div>
            <button className="cta-btn" onClick={() => go('s5-done')}>Place order →</button>
            <button className="cta-btn secondary mt16" onClick={() => goBack()}>Edit order</button>
        </div>

        {/* <!-- Screen 5: Done --> */}
        <div className={`screen ${currentScreen === "s5-done" ? "active" : ""}`} id="s5-done">
            <div className="success-center">
                <div style={{ fontSize: "56px", marginBottom: "20px" }}>🎉</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "26px", marginBottom: "8px" }}>Order placed!</div>
                <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, maxWidth: "260px" }}>A rider has been assigned. You'll get a confirmation shortly.</div>
                <div style={{ marginTop: "28px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 24px", width: "100%" }}>
                    <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "4px" }}>Tracking ID</div>
                    <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--accent)" }}>#SWG-20481</div>
                </div>                
            </div>
            <button className="cta-btn">New order →</button>
        </div>
    
    </div>
  )
}

export default App
